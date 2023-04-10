import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import type {PayloadAction} from '@reduxjs/toolkit';
// import {logOutUser} from './userSlice';

export interface BlogDetailState {
  uid: string | null;
  email: string | null;
  title: string | null;
  content: string | null;
  createdAt: String | null;
}

export interface BlogState {
  blogDetails: BlogDetailState[];
}

const initialState: BlogState = {
  blogDetails: [],
};

export const addBlog = createAsyncThunk(
  'blogs/addBlog',
  async (payload: {
    title: string;
    content: string;
    uid: string;
    email: string;
    createdAt: String;
  }) => {
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
  extraReducers(builder) {
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.blogDetails.push(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {addBlogPost, clearBlogs} = blogSlice.actions;

export default blogSlice.reducer;
