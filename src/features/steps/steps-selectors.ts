import { RootState } from '@/store/store';

export const selectSteps = (state: RootState) => state.steps.steps;
export const selectCurrentStep = (state: RootState) => state.steps.current;
export const selectConfirmed = (state: RootState) => state.steps.confirmed;
