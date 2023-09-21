import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserData, Plan, PlanType, AddOn } from '@/types/form';

interface FormSlice {
  userData: UserData;
  plan: Plan | undefined;
  planType: PlanType;
  addOns: AddOn[];
}

const initialState: FormSlice = {
  userData: {
    name: '',
    email: '',
    phone: '',
  },
  plan: undefined,
  planType: 'monthly',
  addOns: [],
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
    addAddOn: (state, action: PayloadAction<AddOn>) => {
      state.addOns = [...new Set([...state.addOns, action.payload])];
    },
    removeAddOn: (state, action: PayloadAction<AddOn['name']>) => {
      state.addOns = state.addOns.filter((addOn) => addOn.name !== action.payload);
    },
  },
});

export const formReducer = formSlice.reducer;
export const { setUserData, setPlan, setPlanType, addAddOn, removeAddOn } = formSlice.actions;
