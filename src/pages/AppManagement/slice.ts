import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppManagementState } from './types';

export const initialState: AppManagementState = {
  currentLocale: 'en',
  mode: 'light',
  loading: false,
  error: '',
  userData: {}
};

const localeSlice = createSlice({
  name: 'appManagement',
  initialState,
  reducers: {
    setCurrentLocale: (state: AppManagementState, action: PayloadAction<string>) => {
      state.currentLocale = action.payload;
    },
    setThemeMode: (state: AppManagementState, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
    fetchUser: state => {
      state.loading = true;
      state.error = '';
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { setCurrentLocale, setThemeMode, fetchUser, fetchUserSuccess, fetchUserFailure } = localeSlice.actions;

export default localeSlice.reducer;
