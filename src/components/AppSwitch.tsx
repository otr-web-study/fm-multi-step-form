import { FC } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SwitchProps {
  titleLeft?: string;
  titleRight?: string;
  value: boolean;
  onChange: () => void;
}

export const AppSwitch: FC<SwitchProps> = ({
  titleLeft = '',
  titleRight = '',
  value,
  onChange,
}) => {
  const tittleLeftClassName = clsx('text-sm transition-colors duration-150', {
    'text-cool-gray': value,
    'text-marine-blue': !value,
  });
  const titleRightClassName = clsx('text-sm transition-colors duration-150', {
    'text-cool-gray': !value,
    'text-marine-blue': value,
  });

  return (
    <motion.div
      layout
      className="flex items-center justify-center gap-6 rounded-lg bg-pastel-blue/10 py-2 md:py-3"
    >
      {titleLeft && <span className={tittleLeftClassName}>{titleLeft}</span>}
      <label className="relative inline-block h-5 w-10">
        <input
          checked={value}
          onChange={onChange}
          type="checkbox"
          className="peer h-0 w-0 opacity-0"
        ></input>
        <motion.div
          className="group absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-start rounded-[20px] bg-marine-blue px-[3px] data-[is-on='true']:justify-end"
          data-is-on={value}
        >
          <motion.div
            layout
            transition={{ type: 'tween', duration: 0.15, ease: 'easeInOut' }}
            className="h-[14px] w-[14px] rounded-[50%] bg-white group-[[data-is-on='true']]:justify-end"
          />
        </motion.div>
      </label>
      {titleRight && <span className={titleRightClassName}>{titleRight}</span>}
    </motion.div>
  );
};
