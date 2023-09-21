import { RootState } from '@/store/store';

export const selectUserData = (state: RootState) => state.form.userData;
export const selectPlanType = (state: RootState) => state.form.planType;
export const selectPlan = (state: RootState) => state.form.plan;
export const selectAddOns = (state: RootState) => state.form.addOns;
