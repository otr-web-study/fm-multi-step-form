import { type FC, forwardRef } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

interface AppInputProps extends Omit<UseFormRegisterReturn<string>, 'ref'> {
  label: string;
  errorMessage?: string;
  validationState?: 'valid' | 'invalid';
  placeholder?: string;
}

export const AppInput: FC<AppInputProps> = forwardRef<HTMLInputElement, AppInputProps>(
  ({ label, errorMessage, validationState = 'valid', ...props }, ref) => {
    const inputClassName = clsx(
      'h-[38px] text-[15px] tracking-[0.1px] col-span-2 font-medium rounded px-4 -tracking-[0.3px] outline outline-1 outline-cool-gray transition-all duration-500 placeholder:text-cool-gray focus:outline-purplish-blue md:h-[46px] md:text-base',
      { 'outline-strawberry-red': validationState === 'invalid' },
    );
    const errorClassName = clsx('text-strawberry-red transition-opacity duration-500 text-end', {
      'opacity-100': validationState === 'invalid',
      'opacity-0': validationState === 'valid',
    });
    return (
      <label className="grid grid-cols-2 justify-between gap-1 text-xs md:text-sm">
        {label}
        <span className={errorClassName}>{errorMessage}</span>
        <input ref={ref} className={inputClassName} autoComplete="off" {...props} />
      </label>
    );
  },
);
