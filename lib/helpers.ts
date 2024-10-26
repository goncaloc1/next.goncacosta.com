/**
 * Check if running from smartphone or tablet
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const random = (from: number, to: number): number => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};
