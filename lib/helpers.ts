/**
 * Check if running from smartphone or tablet
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

export const random = (from: number, to: number): number => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

export const getRandomFromArray = <T>(items: T[]): T => {
  const idx = random(0, items.length - 1);
  return items[idx];
};
