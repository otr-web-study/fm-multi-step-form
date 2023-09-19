import { type FC } from 'react';
import clsx from 'clsx';
import { useAppSelector } from '@/store/appHooks';
import { selectHasNextStep, selectHasPrevStep } from '@/features/steps/steps-selectors';

interface FormContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onSubmit: () => void;
}

export const FormContainer: FC<FormContainerProps> = ({ children, title, subtitle, onSubmit }) => {
  const hasNextStep = useAppSelector(selectHasNextStep);
  const hasPrevStep = useAppSelector(selectHasPrevStep);

  const nextBtnClassName = clsx(
    'col-start-2 justify-self-end rounded-[4px] px-4 py-[10px] text-sm text-white transition-colors duration-500',
    {
      'bg-marine-blue hover:bg-purplish-blue': hasNextStep,
      'bg-purplish-blue hover:bg-marine-blue': !hasNextStep,
    },
  );

  return (
    <form
      className="flex h-full flex-col justify-between md:mx-[min(98px,7vw)] md:max-w-[443px]"
      onSubmit={onSubmit}
    >
      <div className="shadow-base-sh mx-[max(16px,6vw)] rounded-lg bg-white px-6 py-[30px] text-marine-blue md:mx-0 md:px-0 md:py-[42px] md:shadow-none">
        <h1 className="text-2xl font-bold md:text-[32px]">{title}</h1>
        <h2 className="mb-5 mt-[10px] text-cool-gray md:mb-10 md:mt-3">{subtitle}</h2>
        {children}
      </div>
      <div className="grid min-h-[76px] grid-cols-2 items-center bg-white px-[max(16px,6vw)] md:px-0">
        {hasPrevStep && (
          <button className="justify-self-start text-cool-gray transition-colors hover:text-purplish-blue/60">
            Go Back
          </button>
        )}
        <button type="submit" className={nextBtnClassName}>
          {hasNextStep ? 'Next Step' : 'Confirm'}
        </button>
      </div>
    </form>
  );
};
