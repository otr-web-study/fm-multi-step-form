import { type FC } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useStepsNavigation } from '@/features/steps/useStepsNavigation';

interface FormContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  formValid: boolean;
  onSubmit?: () => void;
}

export const FormContainer: FC<FormContainerProps> = ({
  children,
  title,
  subtitle,
  formValid,
  onSubmit,
}) => {
  const { hasNextStep, hasPrevStep, navigateNextStep, navigatePrevStep } = useStepsNavigation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    onSubmit && onSubmit();

    if (formValid) navigateNextStep();
  };

  const nextBtnClassName = clsx(
    'col-start-2 justify-self-end rounded md:rounded-[8px] px-4 py-[10px] text-sm text-white transition-colors duration-500 md:py-[14px] md:px-[26px] md:text-base',
    {
      'bg-marine-blue hover:bg-purplish-blue': hasNextStep,
      'bg-purplish-blue hover:bg-marine-blue md:px-8': !hasNextStep,
    },
  );

  return (
    <form
      className="flex h-full flex-col justify-between md:ml-[min(104px,8vw)] md:mr-[min(88px,7vw)]"
      onSubmit={handleSubmit}
    >
      <motion.div
        layout
        className="mx-[max(16px,4vw)] rounded-lg bg-white px-6 py-[30px] text-marine-blue shadow-base-sh md:mx-0 md:px-0 md:py-[42px] md:shadow-none"
      >
        <h1 className="text-2xl font-bold md:text-[32px]">{title}</h1>
        <h2 className="mb-5 mt-[10px] tracking-[0.1px] text-cool-gray md:mb-10 md:mt-3">
          {subtitle}
        </h2>
        {children}
      </motion.div>
      <div className="grid min-h-[76px] grid-cols-2 items-center bg-white px-[max(16px,6vw)] shadow-base-sh md:min-h-[82px] md:px-0 md:shadow-none">
        {hasPrevStep && (
          <button
            className="justify-self-start text-sm text-cool-gray transition-colors hover:text-purplish-blue/60 md:text-base"
            onClick={navigatePrevStep}
          >
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
