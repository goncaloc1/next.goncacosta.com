import { StaticImageData } from "next/image";
import Photo from "../photo";
import { ReactNode } from "react";

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

const CarouselSlide = (props: CarouselSlideProps) => (
  <div className={props.className} style={{ height: "100%" }}>
    {isCarouselSlidePhoto(props) ? (
      <Photo src={props.photoSrc} priority={props.photoPriority} />
    ) : (
      props.children
    )}
  </div>
);

export default CarouselSlide;
