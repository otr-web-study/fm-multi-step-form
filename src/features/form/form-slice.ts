import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserData } from '@/types/form';

interface FormSlice {
  userData: UserData;
}

const initialState: FormSlice = {
  userData: {
    name: '',
    email: '',
    phone: '',
  },
};

const formSlice = createSlice({
  name: '@@form',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { setUserData } = formSlice.actions;
