import { configureStore } from '@reduxjs/toolkit';
import { stepsReducer } from '@/features/steps/steps-slice';

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
