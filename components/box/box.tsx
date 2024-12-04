import styles from "./Box.module.css";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Photo from "../photo";

export type BoxProps = BoxPhotoProps | BoxTextProps;

type BaseBoxProps = {
  className?: string;
  legacy?: boolean;
};

type BoxPhotoProps = BaseBoxProps & {
  photoSrc: StaticImageData;
  photoId?: string;
  photoPriority?: boolean;
};

type BoxTextProps = BaseBoxProps & {
  children: ReactNode;
};

/**
 * Type guard for @type BoxPhotoProps
 */
const isBoxPhoto = (data: BoxProps): data is BoxPhotoProps =>
  (data as BoxPhotoProps).photoSrc != null;

export const Box = (props: BoxProps) => {
  const { className = "" } = props;

  return props.legacy ? (
    <div className="cell">
      {isBoxPhoto(props) ? (
        <div className={`max-w-max ${className}`}>
          <Photo
            src={props.photoSrc}
            id={props.photoId}
            priority={props.photoPriority}
            legacy={true}
          />
        </div>
      ) : (
        <div className={`header ${className}`}>{props.children}</div>
      )}
    </div>
  ) : (
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
