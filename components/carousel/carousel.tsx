import { useState } from "react";

// TODO remove specific styles from here
import styles from "../../pages/reminiscencia/Reminiscencia.module.css";

type Placeholder = "placeholderX" | "placeholderY" | "placeholderZ";

type CarouselProps = {
  slides: JSX.Element[];
};

const Carousel = ({ slides }: CarouselProps) => {
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
        <div className={styles.my_cycle_slideshow}>
          <div className={placeholderXStyle}>{slides[placeholderXIndex]}</div>
          <div className={placeholderYStyle}>{slides[placeholderYIndex]}</div>
          <div className={placeholderZStyle}>{slides[placeholderZIndex]}</div>
        </div>
        <div className="slideshow_buttons">
          <a className="mCSB_buttonRight" onClick={nextSlide}></a>
          <a className="mCSB_buttonLeft" onClick={previousSlide}></a>
        </div>
      </div>

      <style jsx>{`
        .slideshow_buttons {
          margin: 0 3% 0 0;
          margin-top: 5px;
          padding: 0 10px 0 0;
        }

        .mCSB_buttonRight,
        .mCSB_buttonLeft {
          display: block;
          position: relative;
          width: 20px;
          height: 17px;
          overflow: hidden;
          margin: 0 auto;
          cursor: pointer;
          float: right;
        }

        .mCSB_buttonUp,
        .mCSB_buttonDown,
        .mCSB_buttonLeft,
        .mCSB_buttonRight {
          background-image: url(./icons.png);
          background-repeat: no-repeat;
          opacity: 0.3;
          filter: "alpha(opacity=30)";
        }
        .mCSB_buttonUp {
          background-position: 0 0;
          /*
	          sprites locations are 0 0/-16px 0/-32px 0/-48px 0 (light) and -80px 0/-96px 0/-112px 0/-128px 0 (dark)
	        */
        }
        .mCSB_buttonDown {
          background-position: 0 -20px;
          /*
	        sprites locations are 0 -20px/-16px -20px/-32px -20px/-48px -20px (light) and -80px -20px/-96px -20px/-112px -20px/-128px -20px (dark)
	        */
        }
        .mCSB_buttonLeft {
          background-position: -100px -40px;
          /*
	        sprites locations are 0 -40px/-20px -40px/-40px -40px/-60px -40px (light) and -80px -40px/-100px -40px/-120px -40px/-140px -40px (dark)
	        */
        }
        .mCSB_buttonRight {
          background-position: -100px -56px;
          /*
	        sprites locations are 0 -56px/-20px -56px/-40px -56px/-60px -56px (light) and -80px -56px/-100px -56px/-120px -56px/-140px -56px (dark)
	        */
        }
        .mCSB_buttonUp:hover,
        .mCSB_buttonDown:hover,
        .mCSB_buttonLeft:hover,
        .mCSB_buttonRight:hover {
          opacity: 0.2;
          filter: "alpha(opacity=20)";
        }
        .mCSB_buttonUp:active,
        .mCSB_buttonDown:active,
        .mCSB_buttonLeft:active,
        .mCSB_buttonRight:active {
          opacity: 0.15;
          filter: "alpha(opacity=15)";
        }
      `}</style>
    </>
  );
};

export default Carousel;
