import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectAddOns, selectPlan, selectPlanType } from './form-selectors';
import { setConfirmed } from '../steps/steps-slice';
import { setCurrentStep } from '../steps/steps-slice';

export const useSummary = () => {
  const dispatch = useAppDispatch();
  const addOns = useAppSelector(selectAddOns);
  const plan = useAppSelector(selectPlan);
  const planType = useAppSelector(selectPlanType);

  const totalSum =
    (plan?.price[planType] || 0) +
    addOns.reduce((acc, addOn) => {
      acc += addOn?.price[planType] || 0;
      return acc;
    }, 0);

  const handleConfirm = () => dispatch(setConfirmed());

  const handlePlanChange = () => dispatch(setCurrentStep('select-plan'));

  return { plan, addOns, planType, totalSum, handleConfirm, handlePlanChange };
};
