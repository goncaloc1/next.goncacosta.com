import styles from "./Box.module.css";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Photo from "../photo";

export type BoxProps = BoxPhotoProps | BoxTextProps;

type BoxPhotoProps = {
  photoSrc: StaticImageData;
  photoId?: string;
  photoPriority?: boolean;
  className?: string;
};

type BoxTextProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Type guard for @type BoxPhotoProps
 */
const isBoxPhoto = (data: BoxProps): data is BoxPhotoProps =>
  (data as BoxPhotoProps).photoSrc != null;

export const BoxV2 = (props: BoxProps) => {
  const { className = "" } = props;

  return (
    <div className={styles.box_wrapper}>
      {isBoxPhoto(props) ? (
        <div className={`${styles.box_photo_wrapper} ${className}`}>
          <Photo
            src={props.photoSrc}
            id={props.photoId}
            priority={props.photoPriority}
          />
        </div>
      ) : (
        <div className={`${styles.box_text_wrapper} ${className}`}>
          {props.children}
        </div>
      )}
    </div>
  );
};
