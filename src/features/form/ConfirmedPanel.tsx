import { motion } from 'framer-motion';
import { itemVariants } from '@/utils/animateVatianst';

export const ConfirmedPanel = () => {
  return (
    <motion.div
      variants={itemVariants}
      custom={1}
      initial="hidden"
      animate="visible"
      className="mx-[max(16px,4vw)] flex flex-col items-center rounded-lg bg-white px-6 py-20 shadow-base-sh md:ml-[min(98px,7vw)] md:mr-[min(94px,7vw)] md:h-full md:justify-center md:px-0 md:shadow-none"
    >
      <img
        className="h-14 w-14 md:h-[78px] md:w-[78px]"
        src="/assets/images/icon-thank-you.svg"
        alt="thank you icon"
      />
      <h1 className="mt-[22px] text-2xl font-bold text-marine-blue md:mt-8 md:text-[32px]">
        Thank you!
      </h1>
      <p className="mt-[10px] text-center md:mt-5">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </motion.div>
  );
};
