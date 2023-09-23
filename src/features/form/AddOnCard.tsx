import { type FC, forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { AddOnWithControls, PlanType } from '@/types/form';
import { formatPrice } from '@/utils/formatPrice';

interface AddOnCardProps extends AddOnWithControls {
  planType: PlanType;
  onClick: () => void;
}
export const AddOnCard: FC<AddOnCardProps> = forwardRef<HTMLDivElement, AddOnCardProps>(
  ({ title, description, price, planType, checked, onClick }, ref) => {
    const className = clsx(
      'flex cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 transition-all duration-300 hover:border-purplish-blue md:py-[18px] md:px-5 md:gap-6',
      {
        'border-purplish-blue bg-pastel-blue/10': checked,
        'border-light-gray': !checked,
      },
    );

    const checkBoxClassName = clsx(
      'grid h-5 w-5 place-items-center rounded border border-light-gray transition-all duration-300 bg-no-repeat bg-center',
      {
        'bg-purplish-blue bg-icon-checkmark': checked,
      },
    );

    return (
      <div ref={ref} className={className} onClick={onClick}>
        <span className={checkBoxClassName} />
        <div className="flex flex-grow flex-col">
          <h3 className="text-sm font-medium md:text-base">{title}</h3>
          <p className="text-xs -tracking-[0.1px] text-cool-gray md:text-sm md:tracking-[0]">
            {description}
          </p>
        </div>
        <p className="text-xs text-purplish-blue md:text-[15px]">
          {formatPrice(price[planType], planType, true)}
        </p>
      </div>
    );
  },
);

export const MAddOnCard = motion(AddOnCard);
