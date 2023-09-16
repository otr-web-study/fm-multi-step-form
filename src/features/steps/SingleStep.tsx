import { type FC } from 'react';
import clsx from 'clsx';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { type Step } from '@/types/step';

const QUERIES = ['(min-width: 768px)'];

interface SingleStepProps {
  step: Step;
  index: number;
  active: boolean;
  onClick: (id: Step['id']) => void;
}
export const SingleStep: FC<SingleStepProps> = ({ step, index, active, onClick }) => {
  const className = clsx('flex', { 'cursor-pointer': step.available && !active });
  const classNameNumbers = clsx(
    'rounded-full h-8 w-8 grid place-items-center text-sm font-medium',
    {
      'border border-alabaster text-alabaster': !active,
      'bg-light-blue border-transparent text-marine-blue': active,
    },
  );
  const [isMdScreen] = useMatchMedia(QUERIES);

  return (
    <div className={className} onClick={() => onClick(step.id)}>
      <span className={classNameNumbers}>{index + 1}</span>
      {isMdScreen && <div className=""></div>}
    </div>
  );
};
