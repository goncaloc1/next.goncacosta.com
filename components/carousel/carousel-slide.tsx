import { StaticImageData } from "next/image";
import Photo from "../photo";
import { ReactNode } from "react";

export type CarouselSlideProps = {
  photoSrc?: StaticImageData;
  photoPriority?: boolean;
  className?: string;
  children?: ReactNode;
};

const CarouselSlide = ({
  photoSrc,
  photoPriority,
  className,
  children,
}: CarouselSlideProps) => {
  return (
    <div className={className}>
      {photoSrc && !children ? (
        <Photo src={photoSrc} priority={photoPriority} />
      ) : (
        children
      )}
    </div>
  );
};

export default CarouselSlide;
