import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import type {PayloadAction} from '@reduxjs/toolkit';
// import {logOutUser} from './userSlice';
import {BlogState, BlogDetailState, AddBlogPayload} from '../utils/types';

const initialState: BlogState = {
  blogDetails: [],
};

export const addBlog = createAsyncThunk(
  'blogs/addBlog',
  async (payload: AddBlogPayload) => {
    const {title, content, uid, email, createdAt} = payload;
    const ref = firestore().collection('blogs');
    await ref
      .add({
        title,
        content,
        uid,
        email,
        createdAt,
      })
      .then(() => {
        console.log('Blog added!');
      });
    return payload;
  },
);

export const delBlog = createAsyncThunk(
  'blogs/delBlog',
  async (payload: {blogId: string}) => {
    const {blogId} = payload;
    const ref = firestore().collection('blogs');
    await ref
      .doc(blogId)
      .delete()
      .then(() => {
        console.log('Blog deleted!');
      });
    return payload;
  },
);

export const editBlog = createAsyncThunk(
  'blogs/editBlog',
  async (payload: BlogDetailState) => {
    const {blogId, title, content, uid, email, createdAt} = payload;
    const ref = firestore().collection('blogs');
    await ref
      .doc(blogId)
      .update({
        title,
        content,
        uid,
        email,
        createdAt,
      })

      .then(() => {
        console.log('Blog updated!');
      });
    return payload;
  },
);

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlogPost: (state, action: PayloadAction<BlogDetailState>) => {
      state.blogDetails.push(action.payload);
    },
    clearBlogs: state => {
      state.blogDetails = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addBlogPost, clearBlogs} = blogSlice.actions;

export default blogSlice.reducer;
