import { ReactNode, useCallback, useMemo, useState } from "react";

import styles from "./Carousel.module.css";

type CarouselProps = {
  slides: ReactNode[];
  defaultSlideClassName: string;
};

enum Placeholder {
  X = "placeholderX",
  Y = "placeholderY",
  Z = "placeholderZ",
}

const Carousel = ({ slides, defaultSlideClassName }: CarouselProps) => {
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

  const isLastIdxActive = useMemo(
    (): boolean => activeIdx === slides.length - 1,
    [activeIdx, slides.length]
  );

  const isFirstIdxActive = useMemo((): boolean => activeIdx === 0, [activeIdx]);

  /**
   * Check if next image can be cached. If index is out of range returns without doing anything
   */
  const prepareNextViewPlaceholderCache = useCallback(() => {
    const nextCacheIdx = activeIdx + 2;
    const isNextCacheOutOfRange = nextCacheIdx > slides.length - 1;

    if (isNextCacheOutOfRange) {
      return;
    }

    switch (currentPlaceholder) {
      case Placeholder.X:
        setPlaceholderZIdx(nextCacheIdx);
        break;
      case Placeholder.Y:
        setPlaceholderXIdx(nextCacheIdx);
        break;
      case Placeholder.Z:
        setPlaceholderYIdx(nextCacheIdx);
        break;
      default:
        throw Error(`Unknown placeholder '${currentPlaceholder}'`);
    }
  }, [activeIdx, currentPlaceholder, slides.length]);

  const nextSlide = useCallback(() => {
    if (isLastIdxActive) {
      return;
    }

    prepareNextViewPlaceholderCache();

    switch (currentPlaceholder) {
      case Placeholder.X: {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);

        setCurrentPlaceholder(Placeholder.Y);
        break;
      }
      case Placeholder.Y: {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);

        setCurrentPlaceholder(Placeholder.Z);
        break;
      }
      case Placeholder.Z: {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);

        setCurrentPlaceholder(Placeholder.X);
        break;
      }
      default:
        throw Error(`Unknown placeholder '${currentPlaceholder}'`);
    }
  }, [isLastIdxActive, prepareNextViewPlaceholderCache, currentPlaceholder]);

  /**
   * Check if previous image can be cached. If index is out of range returns without doing anything
   */
  const preparePreviousViewPlaceholderCache = useCallback(() => {
    const previousCacheIdx = activeIdx - 2;
    const isPreviousCacheOutOfRange = previousCacheIdx < 0;

    if (isPreviousCacheOutOfRange) {
      return;
    }

    switch (currentPlaceholder) {
      case Placeholder.X:
        setPlaceholderYIdx(previousCacheIdx);
        break;
      case Placeholder.Y:
        setPlaceholderZIdx(previousCacheIdx);
        break;
      case Placeholder.Z:
        setPlaceholderXIdx(previousCacheIdx);
        break;
      default:
        throw Error(`Unknown placeholder '${currentPlaceholder}'`);
    }
  }, [activeIdx, currentPlaceholder]);

  const previousSlide = useCallback(() => {
    if (isFirstIdxActive) {
      return;
    }

    preparePreviousViewPlaceholderCache();

    switch (currentPlaceholder) {
      case Placeholder.X: {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);

        setCurrentPlaceholder(Placeholder.Z);
        break;
      }
      case Placeholder.Y: {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);

        setCurrentPlaceholder(Placeholder.X);
        break;
      }
      case Placeholder.Z: {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);

        setCurrentPlaceholder(Placeholder.Y);
        break;
      }
      default:
        throw Error(`Unknown placeholder '${currentPlaceholder}'`);
    }
  }, [
    isFirstIdxActive,
    preparePreviousViewPlaceholderCache,
    currentPlaceholder,
  ]);

  return (
    <>
      <div>
        <div
          className={`${styles.my_cycle_slideshow} ${defaultSlideClassName}`}
        >
          <div className={`${styles.slide_placeholder} ${placeholderXStyle}`}>
            {slides[placeholderXIdx]}
          </div>
          <div className={`${styles.slide_placeholder} ${placeholderYStyle}`}>
            {slides[placeholderYIdx]}
          </div>
          <div className={`${styles.slide_placeholder} ${placeholderZStyle}`}>
            {slides[placeholderZIdx]}
          </div>
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
