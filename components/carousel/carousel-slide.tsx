import { StaticImageData } from "next/image";
import PhotoV2 from "../photo-v2";
import { ReactNode } from "react";
import { useCarouselContext } from "./use-carousel-context";

export type CarouselSlideProps =
  | CarouselSlidePhotoProps
  | CarouselSlideTextProps;

type BaseCarouselSlideProps = {
  className?: string;
};

type CarouselSlidePhotoProps = BaseCarouselSlideProps & {
  photoSrc: StaticImageData;
  photoPriority?: boolean;
};

type CarouselSlideTextProps = BaseCarouselSlideProps & {
  children: ReactNode;
};

/**
 * Type guard for @type CarouselSlidePhotoProps
 */
const isCarouselSlidePhoto = (
  data: CarouselSlideProps
): data is CarouselSlidePhotoProps =>
  (data as CarouselSlidePhotoProps).photoSrc != null;

const CarouselSlide = (props: CarouselSlideProps) => {
  const { defaultSlideClassName } = useCarouselContext();

  return (
    <div
      className={props.className ?? defaultSlideClassName}
      style={{ height: "100%" }}
    >
      {isCarouselSlidePhoto(props) ? (
        <PhotoV2 src={props.photoSrc} priority={props.photoPriority} />
      ) : (
        props.children
      )}
    </div>
  );
};

export default CarouselSlide;
