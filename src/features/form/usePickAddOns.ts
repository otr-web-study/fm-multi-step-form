import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectAddOns, selectPlanType } from './form-selectors';
import { addAddOn, removeAddOn } from './form-slice';
import dataAddOns from '@/data/add-ons.json';
import type { AddOnWithControls } from '@/types/form';

export const usePickAddOns = () => {
  const dispatch = useAppDispatch();
  const addOns = useAppSelector(selectAddOns);
  const planType = useAppSelector(selectPlanType);
  const addOnsWithControls: AddOnWithControls[] = useMemo(
    () =>
      dataAddOns.map((addOn) => ({
        ...addOn,
        checked: addOns.findIndex((a) => a.name === addOn.name) < 0 ? false : true,
      })),
    [addOns],
  );

  const toggleAddOn = (addOn: AddOnWithControls) =>
    dispatch(addOn.checked ? removeAddOn(addOn.name) : addAddOn(addOn));

  return { addOnsList: addOnsWithControls, planType, toggleAddOn };
};
