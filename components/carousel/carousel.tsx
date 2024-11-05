import { ReactNode, useState } from "react";

import styles from "./Carousel.module.css";

type Placeholder = "placeholderX" | "placeholderY" | "placeholderZ";

type CarouselProps = {
  slides: ReactNode[];
  defaultSlideClassName: string;
};

const Carousel = ({ slides, defaultSlideClassName }: CarouselProps) => {
  /**
   * We have three placeholders to deal with the active image and
   * cache / buffer images. The idea is that previous/next operations
   * will rotate the active image in placeholders and therefore
   * eliminating loading times.
   */
  const [placeholderXIndex, setPlaceholderXIndex] = useState(0);
  const [placeholderYIndex, setPlaceholderYIndex] = useState(1);
  const [placeholderZIndex, setPlaceholderZIndex] = useState(2);

  const [placeholderXStyle, setPlaceholderXStyle] = useState(
    styles.transition_show
  );
  const [placeholderYStyle, setPlaceholderYStyle] = useState(
    styles.transition_hide
  );
  const [placeholderZStyle, setPlaceholderZStyle] = useState(
    styles.transition_hide
  );

  const [activeViewPlaceholder, setActiveViewPlaceholder] =
    useState<Placeholder>("placeholderX");

  const getActiveIndex = (): number => {
    switch (activeViewPlaceholder) {
      case "placeholderX":
        return placeholderXIndex;
      case "placeholderY":
        return placeholderYIndex;
      case "placeholderZ":
        return placeholderZIndex;

      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  const isLastIndexActive = (): boolean => {
    const activeIndex = getActiveIndex();
    return activeIndex === slides.length - 1;
  };

  const isFirstIndexActive = (): boolean => {
    const activeIndex = getActiveIndex();
    return activeIndex === 0;
  };

  /**
   * Check if next image can be cached. If index is
   * out of range returns without doing anything.
   */
  const prepareNextViewPlaceholderCache = () => {
    const activeIndex = getActiveIndex();
    const nextCacheIndex = activeIndex + 2;
    const isNextCacheOutOfRange = nextCacheIndex > slides.length - 1;

    if (isNextCacheOutOfRange) {
      return;
    }

    switch (activeViewPlaceholder) {
      case "placeholderX":
        setPlaceholderZIndex(nextCacheIndex);
        break;
      case "placeholderY":
        setPlaceholderXIndex(nextCacheIndex);
        break;
      case "placeholderZ":
        setPlaceholderYIndex(nextCacheIndex);
        break;
      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  /**
   * Check if previous image can be cached. If index is
   * out of range returns without doing anything.
   */
  const preparePreviousViewPlaceholderCache = () => {
    const activeIndex = getActiveIndex();
    const previousCacheIndex = activeIndex - 2;
    const isPreviousCacheOutOfRange = previousCacheIndex < 0;

    if (isPreviousCacheOutOfRange) {
      return;
    }

    switch (activeViewPlaceholder) {
      case "placeholderX":
        setPlaceholderYIndex(previousCacheIndex);
        break;
      case "placeholderY":
        setPlaceholderZIndex(previousCacheIndex);
        break;
      case "placeholderZ":
        setPlaceholderXIndex(previousCacheIndex);
        break;
      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  const nextSlide = () => {
    if (isLastIndexActive()) {
      return;
    }

    prepareNextViewPlaceholderCache();

    switch (activeViewPlaceholder) {
      case "placeholderX": {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderY");
        break;
      }
      case "placeholderY": {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderZ");
        break;
      }
      case "placeholderZ": {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderX");
        break;
      }
      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  const previousSlide = () => {
    if (isFirstIndexActive()) {
      return;
    }

    preparePreviousViewPlaceholderCache();

    switch (activeViewPlaceholder) {
      case "placeholderX": {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderZ");
        break;
      }
      case "placeholderY": {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderX");
        break;
      }
      case "placeholderZ": {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderY");
        break;
      }
      default:
        throw Error(`Unknown placeholder '${activeViewPlaceholder}'`);
    }
  };

  return (
    <>
      <div>
        <div
          className={`${styles.my_cycle_slideshow} ${defaultSlideClassName}`}
        >
          <div className={`${styles.slide_placeholder} ${placeholderXStyle}`}>
            {slides[placeholderXIndex]}
          </div>
          <div className={`${styles.slide_placeholder} ${placeholderYStyle}`}>
            {slides[placeholderYIndex]}
          </div>
          <div className={`${styles.slide_placeholder} ${placeholderZStyle}`}>
            {slides[placeholderZIndex]}
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
