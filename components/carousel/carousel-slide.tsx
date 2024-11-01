// TODO remove specific styles from here
import { StaticImageData } from "next/image";
import styles from "../../pages/reminiscencia/Reminiscencia.module.css";
import Photo from "../photo";
import { ReactNode } from "react";

type CarouselSlideProps = {
  photoSrc?: StaticImageData;
  photoPriority?: boolean;
  className?: string;
  children?: ReactNode;
};

const CarouselSlide = ({
  photoSrc,
  photoPriority,
  className = styles.slide,
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
