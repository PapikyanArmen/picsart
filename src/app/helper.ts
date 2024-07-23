export const variants = (id: number) => {
  return {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
        delay: (1 * id) / 10,
      },
    },
    hide: {
      y: 100,
      opacity: 0,
    },
  };
};
