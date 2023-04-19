import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

import {UserState, LoginUserPayload} from '../utils/types';

const initialState: UserState = {
  userDetails: {
    uid: '',
    email: '',
  },
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload: LoginUserPayload) => {
    const {userEmail, password} = payload;
    const response = await auth()
      .signInWithEmailAndPassword(userEmail, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        const {uid, email} = user;
        const userDetails = {uid, email};
        return userDetails;
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
        return error;
      });
    return response;
  },
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (payload: LoginUserPayload) => {
    const {userEmail, password} = payload;
    const response = await auth()
      .createUserWithEmailAndPassword(userEmail, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        const {uid, email} = user;
        const userDetails = {uid, email};
        return userDetails;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
        return error;
      });
    return response;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser: state => {
      state.userDetails = initialState.userDetails;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {setUser} = userSlice.actions;

export default userSlice.reducer;
