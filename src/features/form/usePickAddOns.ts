import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectAddOns } from './form-selectors';
import { addAddOn, removeAddOn } from './form-slice';
import dataAddOns from '@/data/add-ons.json';
import type { AddOn } from '@/types/form';

interface AddOnWithControls extends AddOn {
  checked: boolean;
}

export const usePickAddOns = () => {
  const dispatch = useAppDispatch();
  const addOns = useAppSelector(selectAddOns);
  const addOnsWithControls: AddOnWithControls[] = useMemo(
    () =>
      dataAddOns.map((addOn) => ({
        ...addOn,
        checked: addOns.findIndex((a) => a.name === addOn.name) < 0 ? false : true,
      })),
    [addOns],
  );

  const toggleAddOn = (addOn: AddOnWithControls) =>
    dispatch(addOn.checked ? addAddOn(addOn) : removeAddOn(addOn.name));

  return { addOnsList: addOnsWithControls, toggleAddOn };
};
