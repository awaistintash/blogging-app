import {useDispatch, useSelector} from 'react-redux';
import {registerUser, loginUser} from '../redux/userSlice';
import {AppDispatch} from '../store';
import {addBlog, delBlog, editBlog} from '../redux/blogSlice';

export const useBlogs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: any) => state.user?.userDetails);

  const handleRegister = (
    userEmail: string,
    password: string,
    rePassword: string,
  ) => {
    if (userEmail && password && rePassword && password === rePassword) {
      dispatch(registerUser({userEmail, password}));
    } else {
      console.log('Error');
    }
  };

  const handleLogin = (userEmail: string, password: string) => {
    if (userEmail && password) {
      dispatch(loginUser({userEmail, password}));
    } else {
      console.log('Error');
    }
  };

  const handleCreateBlog = (title: string, content: string) => {
    const createdAt = new Date();
    if (title && content) {
      dispatch(
        addBlog({
          title: title,
          content: content,
          uid: user?.uid,
          email: user?.email,
          createdAt: createdAt.toString(),
        }),
      );
      return true;
    }
    return false;
  };

  const handleEditBlog = (blogId: string, title: string, content: string) => {
    const createdAt = new Date();
    if (title && content) {
      dispatch(
        editBlog({
          blogId: blogId,
          title: title,
          content: content,
          uid: user?.uid,
          email: user?.email,
          createdAt: createdAt.toString(),
        }),
      );
      return true;
    }
    return false;
  };

  const handleDelBlog = (blogId: string) => {
    dispatch(delBlog({blogId}));
  };

  return {
    handleRegister,
    handleLogin,
    handleCreateBlog,
    handleEditBlog,
    handleDelBlog,
  };
};
