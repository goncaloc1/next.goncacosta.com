import styles from "./Horizontal.module.css";

import { useWheel } from "../../hooks/useWheel";

type MainWithHorizontalScrollProps = {
  children: React.ReactNode;
};

const MainWithHorizontalScroll = ({
  children,
}: MainWithHorizontalScrollProps) => {
  useWheel();

  return <main className={styles.horizontal_scroll}>{children}</main>;
};

export default MainWithHorizontalScroll;
