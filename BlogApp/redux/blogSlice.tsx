import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface BlogDetailState {
  userID: string | null;
  title: string | null;
  content: string | null;
}

export interface BlogState {
  blogDetails: BlogDetailState[];
}

const initialState: BlogState = {
  blogDetails: [],
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlogPost: (state, action: PayloadAction<BlogDetailState>) => {
      state.blogDetails.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addBlogPost} = blogSlice.actions;

export default blogSlice.reducer;
