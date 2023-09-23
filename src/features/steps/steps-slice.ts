import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Step, StepId } from '@/types/step';

interface StepsSlice {
  steps: Step[];
  current: StepId;
  confirmed: boolean;
}

const steps: Step[] = [
  { id: 'info', available: true, title: 'your info' },
  { id: 'select-plan', available: false, title: 'select plan' },
  { id: 'select-addons', available: false, title: 'add-ons' },
  { id: 'summary', available: false, title: 'summary' },
];

const initialState: StepsSlice = {
  steps: steps,
  current: steps[0].id,
  confirmed: false,
};

const stepsSlice = createSlice({
  name: '@@steps',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<StepId>) => {
      state.current = action.payload;
      const current = state.steps.find((step) => step.id === action.payload);
      if (current) current.available = true;
    },
    setConfirmed: (state) => ({
      ...state,
      confirmed: true,
      steps: state.steps.map((step) => ({ ...step, available: false })),
    }),
  },
});

export const { setCurrentStep, setConfirmed } = stepsSlice.actions;
export const stepsReducer = stepsSlice.reducer;
