export const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.5, duration: 0.9 },
  }),
};
