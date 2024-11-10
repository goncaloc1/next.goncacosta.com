import { ReactNode, useCallback, useMemo, useState } from "react";

import styles from "./Carousel.module.css";

enum Placeholder {
  X = "placeholderX",
  Y = "placeholderY",
  Z = "placeholderZ",
}

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

type CarouselProps = {
  slides: ReactNode[];
  defaultSlideClassName: string;
  transitionEnabled?: boolean;
};

const Carousel = ({
  slides,
  defaultSlideClassName,
  transitionEnabled,
}: CarouselProps) => {
  /**
   * We have three placeholders to deal with the active image and cache / buffer images. The idea is that
   * previous/next operations will rotate the active image in placeholders and therefore eliminate loading times.
   */
  const [placeholderXIdx, setPlaceholderXIdx] = useState(0);
  const [placeholderYIdx, setPlaceholderYIdx] = useState(1);
  const [placeholderZIdx, setPlaceholderZIdx] = useState(2);

  const [placeholderXStyle, setPlaceholderXStyle] = useState(
    styles.transition_show
  );
  const [placeholderYStyle, setPlaceholderYStyle] = useState(
    styles.transition_hide
  );
  const [placeholderZStyle, setPlaceholderZStyle] = useState(
    styles.transition_hide
  );

  const [currentPlaceholder, setCurrentPlaceholder] = useState<Placeholder>(
    Placeholder.X
  );

  const activeIdx = useMemo((): number => {
    switch (currentPlaceholder) {
      case Placeholder.X:
        return placeholderXIdx;
      case Placeholder.Y:
        return placeholderYIdx;
      case Placeholder.Z:
        return placeholderZIdx;

      default:
        throw Error(`Unknown placeholder '${currentPlaceholder}'`);
    }
  }, [currentPlaceholder, placeholderXIdx, placeholderYIdx, placeholderZIdx]);

  const nextSlide = () => {
    const isLastIdxActive = activeIdx === slides.length - 1;

    if (isLastIdxActive) {
      return;
    }

    const nextCacheIdx = activeIdx + 2;
    const isNextCacheInRange = nextCacheIdx <= slides.length - 1;

    switch (currentPlaceholder) {
      case Placeholder.X: {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);
        isNextCacheInRange && setPlaceholderZIdx(nextCacheIdx);

        setCurrentPlaceholder(Placeholder.Y);
        break;
      }
      case Placeholder.Y: {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);
        isNextCacheInRange && setPlaceholderXIdx(nextCacheIdx);

        setCurrentPlaceholder(Placeholder.Z);
        break;
      }
      case Placeholder.Z: {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);
        isNextCacheInRange && setPlaceholderYIdx(nextCacheIdx);

        setCurrentPlaceholder(Placeholder.X);
        break;
      }
      default:
        throw Error(`Unknown placeholder '${currentPlaceholder}'`);
    }
  };

  const previousSlide = () => {
    const isFirstIdxActive = activeIdx === 0;

    if (isFirstIdxActive) {
      return;
    }

    const previousCacheIdx = activeIdx - 2;
    const isPreviousCacheInRange = previousCacheIdx >= 0;

    switch (currentPlaceholder) {
      case Placeholder.X: {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);
        isPreviousCacheInRange && setPlaceholderYIdx(previousCacheIdx);

        setCurrentPlaceholder(Placeholder.Z);
        break;
      }
      case Placeholder.Y: {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);
        isPreviousCacheInRange && setPlaceholderZIdx(previousCacheIdx);

        setCurrentPlaceholder(Placeholder.X);
        break;
      }
      case Placeholder.Z: {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);
        isPreviousCacheInRange && setPlaceholderXIdx(previousCacheIdx);

        setCurrentPlaceholder(Placeholder.Y);
        break;
      }
      default:
        throw Error(`Unknown placeholder '${currentPlaceholder}'`);
    }
  };

  return (
    <>
      <div>
        <div
          className={`${styles.my_cycle_slideshow} ${defaultSlideClassName}`}
        >
          <SlidePlaceholder
            className={placeholderXStyle}
            transitionEnabled={transitionEnabled}
          >
            {slides[placeholderXIdx]}
          </SlidePlaceholder>
          <SlidePlaceholder
            className={placeholderYStyle}
            transitionEnabled={transitionEnabled}
          >
            {slides[placeholderYIdx]}
          </SlidePlaceholder>
          <SlidePlaceholder
            className={placeholderZStyle}
            transitionEnabled={transitionEnabled}
          >
            {slides[placeholderZIdx]}
          </SlidePlaceholder>
        </div>
        <div className={styles.slideshow_buttons}>
          <a className={styles.mCSB_buttonRight} onClick={nextSlide}></a>
          <a className={styles.mCSB_buttonLeft} onClick={previousSlide}></a>
        </div>
      </div>
    </>
  );
};

export default Carousel;
