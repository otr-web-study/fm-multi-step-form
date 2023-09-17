import { type FC } from 'react';
import clsx from 'clsx';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { type Step } from '@/types/step';

const QUERIES = ['(min-width: 768px)'];

interface SingleStepProps {
  step: Step;
  index: number;
  active: boolean;
  onClick: (step: Step) => void;
}
export const SingleStep: FC<SingleStepProps> = ({ step, index, active, onClick }) => {
  const className = clsx('flex gap-4', { 'cursor-pointer': step.available && !active });
  const classNameNumbers = clsx(
    'rounded-full h-8 w-8 grid place-items-center text-sm font-medium md:h-[34px] md:w-[34px]',
    {
      'border border-alabaster text-alabaster': !active,
      'bg-light-blue border-transparent text-marine-blue': active,
    },
  );
  const [isMdScreen] = useMatchMedia(QUERIES);

  return (
    <div className={className} onClick={() => onClick(step)}>
      <span className={classNameNumbers}>{index + 1}</span>
      {isMdScreen && (
        <div className="leading-[1.1] ">
          <span className="block text-xs uppercase text-light-gray opacity-70">{`step ${
            index + 1
          }`}</span>
          <span className="text-[15px] font-medium uppercase tracking-[0.8px] text-alabaster">
            {step.title}
          </span>
        </div>
      )}
    </div>
  );
};
