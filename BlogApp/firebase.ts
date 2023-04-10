import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {addBlogPost, clearBlogs} from './redux/blogSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from './store';

const useGetBlogs = async () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogRef = firestore().collection('blogs');
  blogRef.onSnapshot(querySnapshot => {
    const list: FirebaseFirestoreTypes.DocumentData[] = [];
    dispatch(clearBlogs());
    querySnapshot.forEach(doc => {
      const {uid, email, title, content, createdAt} = doc.data();
      const blogDetails = {
        uid: uid,
        email: email,
        title: title,
        content: content,
        createdAt: createdAt,
      };
      dispatch(addBlogPost(blogDetails));
    });
    return list;
  });
};

export default useGetBlogs;
