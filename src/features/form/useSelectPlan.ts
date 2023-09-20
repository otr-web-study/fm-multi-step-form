import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectPlan, selectPlanType } from './form-selectors';
import { setPlan, setPlanType } from './form-slice';
import dataPlans from '@/data/plans.json';
import { PlanType, type Plan } from '@/types/form';

export const useSelectPlan = () => {
  const dispatch = useAppDispatch();
  const plan = useAppSelector(selectPlan);
  const planType = useAppSelector(selectPlanType);

  const handleSelectPlan = (plan: Plan) => dispatch(setPlan(plan));

  const handleSelectPlanType = (planType: PlanType) => dispatch(setPlanType(planType));

  useEffect(() => {
    dispatch(setPlan(dataPlans[0]));
  });

  return [dataPlans, plan, planType, handleSelectPlan, handleSelectPlanType];
};
