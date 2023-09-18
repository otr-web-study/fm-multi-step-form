import { configureStore } from '@reduxjs/toolkit';
import { stepsReducer } from '@/features/steps/steps-slice';
import { formReducer } from '@/features/form/form-slice';

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
    form: formReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
