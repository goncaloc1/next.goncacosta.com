import { ReactNode, useState } from "react";

import styles from "./Carousel.module.css";
import SlidePlaceholder from "./slide-placeholder";
import CarouselSlide from "./carousel-slide";
import { CarouselProvider } from "./use-carousel-context";

enum Placeholder {
  X = "placeholderX",
  Y = "placeholderY",
  Z = "placeholderZ",
}

const slideConfig = {
  next: {
    placeholderX: {
      upcomingPlaceholder: Placeholder.Y,
      cachePlaceholder: Placeholder.Z,
    },
    placeholderY: {
      upcomingPlaceholder: Placeholder.Z,
      cachePlaceholder: Placeholder.X,
    },
    placeholderZ: {
      upcomingPlaceholder: Placeholder.X,
      cachePlaceholder: Placeholder.Y,
    },
  },
  previous: {
    placeholderX: {
      upcomingPlaceholder: Placeholder.Z,
      cachePlaceholder: Placeholder.Y,
    },
    placeholderY: {
      upcomingPlaceholder: Placeholder.X,
      cachePlaceholder: Placeholder.Z,
    },
    placeholderZ: {
      upcomingPlaceholder: Placeholder.Y,
      cachePlaceholder: Placeholder.X,
    },
  },
};

type CarouselProps = {
  slides: ReactNode[];
  defaultSlideClassName: string;
  transitionEnabled?: boolean;
};

function Carousel({
  slides,
  defaultSlideClassName,
  transitionEnabled,
}: CarouselProps) {
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

  const [currentPlaceholder, setCurrentPlaceholder] = useState<{
    name: Placeholder;
    idx: number;
  }>({ name: Placeholder.X, idx: 0 });

  const moveSlide = (
    direction: "next" | "previous",
    isCacheinRange: boolean,
    upcomingIdx: number,
    cacheIdx: number
  ) => {
    const map = {
      placeholderX: {
        setStyle: setPlaceholderXStyle,
        setIndex: setPlaceholderXIdx,
      },
      placeholderY: {
        setStyle: setPlaceholderYStyle,
        setIndex: setPlaceholderYIdx,
      },
      placeholderZ: {
        setStyle: setPlaceholderZStyle,
        setIndex: setPlaceholderZIdx,
      },
    };

    const cfg = slideConfig[direction][currentPlaceholder.name];

    map[currentPlaceholder.name].setStyle(styles.transition_hide);
    map[cfg.upcomingPlaceholder].setStyle(styles.transition_show);

    setCurrentPlaceholder({
      name: cfg.upcomingPlaceholder,
      idx: upcomingIdx,
    });

    isCacheinRange && map[cfg.cachePlaceholder].setIndex(cacheIdx);
  };

  const nextSlide = () => {
    const isLastIdxVisible = currentPlaceholder.idx === slides.length - 1;

    if (isLastIdxVisible) {
      return;
    }

    const cacheIdx = currentPlaceholder.idx + 2;
    const isCacheInRange = cacheIdx <= slides.length - 1;

    moveSlide("next", isCacheInRange, currentPlaceholder.idx + 1, cacheIdx);
  };

  const previousSlide = () => {
    const isFirstIdxVisible = currentPlaceholder.idx === 0;

    if (isFirstIdxVisible) {
      return;
    }

    const cacheIdx = currentPlaceholder.idx - 2;
    const isCacheInRange = cacheIdx >= 0;

    moveSlide("previous", isCacheInRange, currentPlaceholder.idx - 1, cacheIdx);
  };

  return (
    <CarouselProvider defaultSlideClassName={defaultSlideClassName}>
      <div className={`${styles.my_cycle_slideshow} ${defaultSlideClassName}`}>
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
    </CarouselProvider>
  );
}

Carousel.Slide = CarouselSlide;

export default Carousel;
