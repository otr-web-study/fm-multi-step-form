import { type FC } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import type { Plan, PlanType } from '@/types/form';
import { formatPrice } from '@/utils/formatPrice';

interface PlanCardProps extends Plan {
  planType: PlanType;
  isActive: boolean;
  onClick: () => void;
}
export const PlanCard: FC<PlanCardProps> = ({
  title,
  icon,
  price,
  bonus,
  planType,
  isActive,
  onClick,
}) => {
  const className = clsx(
    'mt-[2px] flex cursor-pointer items-start gap-4 rounded-lg border border-cool-gray px-[14px] py-4 transition-colors duration-300 hover:bg-pastel-blue/10 md:flex-col md:min-w-[136px]',
    { 'border-purplish-blue bg-pastel-blue/10': isActive, 'border-light-gray': !isActive },
  );

  return (
    <motion.div layout className={className} onClick={onClick}>
      <img src={icon} alt={title} />
      <div className="md:mt-6">
        <h3 className="font-medium">{title}</h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={planType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm font-medium text-cool-gray"
          >
            {formatPrice(price[planType], planType)}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence>
          {bonus[planType] && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[13px] leading-[22px]"
            >
              {bonus[planType]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
