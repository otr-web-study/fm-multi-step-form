import { type FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface AppInputProps extends UseFormRegisterReturn<string> {
  label: string;
  errorMessage?: string;
  validationState?: 'valid' | 'invalid';
  placeholder?: string;
}

export const AppInput: FC<AppInputProps> = ({
  label,
  errorMessage,
  validationState = 'valid',
  ...props
}) => {
  return (
    <label className="flex flex-wrap justify-between gap-1 text-xs">
      {label}
      <span className="text-strawberry-red">{errorMessage} error</span>
      <input
        className="h-[38px] w-full rounded-[4px] px-4 -tracking-[0.3px] outline outline-1 outline-cool-gray placeholder:text-cool-gray"
        {...props}
      />
    </label>
  );
};
