import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import {
  selectNextStep,
  selectPrevStep,
  selectHasNextStep,
  selectHasPrevStep,
} from './steps-selectors';
import { setCurrentStep } from './steps-slice';

export const useStepsNavigation = () => {
  const dispatch = useAppDispatch();
  const prevStep = useAppSelector(selectPrevStep);
  const nextStep = useAppSelector(selectNextStep);
  const hasNextStep = useAppSelector(selectHasNextStep);
  const hasPrevStep = useAppSelector(selectHasPrevStep);

  const navigatePrevStep = () => {
    if (prevStep) dispatch(setCurrentStep(prevStep.id));
  };

  const navigateNextStep = () => {
    if (nextStep) dispatch(setCurrentStep(nextStep.id));
  };

  return { hasNextStep, hasPrevStep, navigateNextStep, navigatePrevStep };
};
