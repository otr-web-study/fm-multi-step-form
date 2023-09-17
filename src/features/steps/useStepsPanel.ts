import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectSteps, selectCurrentStep } from './steps-selectors';
import { setCurrentStep } from './steps-slice';
import type { Step } from '@/types/step';

export const useStepsPanel = () => {
  const dispatch = useAppDispatch();
  const steps = useAppSelector(selectSteps);
  const currentStep = useAppSelector(selectCurrentStep);

  const handleClick = (step: Step) => {
    if (!step.available || step.id === currentStep) return;

    dispatch(setCurrentStep(step.id));
  };

  return { steps, currentStep, handleClick };
};
