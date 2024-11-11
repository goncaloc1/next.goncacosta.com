import { ReactNode } from "react";

import styles from "./Carousel.module.css";

type SlidePlaceholderProps = {
  children: ReactNode;
  className: string;
  transitionEnabled?: boolean;
};

const SlidePlaceholder = ({
  children,
  className,
  transitionEnabled,
}: SlidePlaceholderProps) => (
  <div
    className={`${styles.slide_placeholder} ${
      transitionEnabled ? styles.slide_transition : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default SlidePlaceholder;
