import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { setUserData } from './form-slice';
import { selectUserData } from './form-selectors';
import type { UserData } from '@/types/form';

export const usePersonalInfo = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserData>({ mode: 'onBlur', defaultValues: userData });

  const onSubmit = (fields: UserData) => dispatch(setUserData(fields));

  return { errors, handleSubmit: handleSubmit(onSubmit), register };
};
