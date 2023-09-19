import { RootState } from '@/store/store';

export const selectSteps = (state: RootState) => state.steps.steps;
export const selectCurrentStep = (state: RootState) => state.steps.current;
export const selectConfirmed = (state: RootState) => state.steps.confirmed;
export const selectHasPrevStep = (state: RootState) =>
  state.steps.steps.findIndex((step) => step.id === state.steps.current) > 0;
export const selectHasNextStep = (state: RootState) =>
  state.steps.steps.findIndex((step) => step.id === state.steps.current) <
  state.steps.steps.length - 1;
