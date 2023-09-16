import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectSteps, selectCurrentStep } from './steps-selectors';
import { setCurrentStep } from './steps-slice';
import type { StepId } from '@/types/step';

export const useStepsPanel = () => {
  const dispatch = useAppDispatch();
  const steps = useAppSelector(selectSteps);
  const currentStep = useAppSelector(selectCurrentStep);

  const handleClick = (id: StepId) => dispatch(setCurrentStep(id));

  return { steps, currentStep, handleClick };
};
