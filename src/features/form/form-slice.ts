import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserData, Plan, PlanType } from '@/types/form';

interface FormSlice {
  userData: UserData;
  plan: Plan | undefined;
  planType: PlanType;
}

const initialState: FormSlice = {
  userData: {
    name: '',
    email: '',
    phone: '',
  },
  plan: undefined,
  planType: 'monthly',
};

const formSlice = createSlice({
  name: '@@form',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    setPlanType: (state, action: PayloadAction<PlanType>) => {
      state.planType = action.payload;
    },
    setPlan: (state, action: PayloadAction<Plan>) => {
      state.plan = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { setUserData, setPlan, setPlanType } = formSlice.actions;
