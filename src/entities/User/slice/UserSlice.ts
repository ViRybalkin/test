import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSliceTypes } from './UserSlice.types';

const initialState: UserSliceTypes = {
  username: '',
  id: '',
  avatar: '',
  isAuth: false,
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state: UserSliceTypes, action: PayloadAction<UserSliceTypes>) {
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
      state.isAuth = action.payload.isAuth;
    },
    initUserData(state: UserSliceTypes) {
      const data = localStorage.getItem('auth');
      if (data) {
        const authData: UserSliceTypes = JSON.parse(data);
        state.username = authData.username;
        state.id = authData.id;
        state.avatar = authData.avatar;
        state.isAuth = true;
      }
      state._inited = true;
    },
    logout(state: UserSliceTypes) {
      state.username = '';
      state.id = '';
      state.avatar = '';
      state.isAuth = false;

      localStorage.removeItem('auth');
    },
  },
});

export const userAction = userSlice.actions;
export const { reducer: userReducer } = userSlice;
