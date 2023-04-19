export interface BlogDetailState {
  blogId: string;
  uid?: string;
  email?: string;
  title?: string;
  content?: string;
  createdAt?: String;
}

export interface BlogState {
  blogDetails: BlogDetailState[];
}

export interface AddBlogPayload {
  title: string;
  content: string;
  uid: string;
  email: string;
  createdAt: String;
}

export interface userDetailState {
  uid: string;
  email: string;
}

export interface UserState {
  userDetails: userDetailState;
}

export interface LoginUserPayload {
  userEmail: string;
  password: string;
}

export type RootStackParamList = {
  ProfileStack: ProfileStackParamList;
  CreateBlog: undefined;
  Blogs: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditBlog: {blog: BlogDetailState};
};
