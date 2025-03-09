import styles from "./Box.module.css";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Photo, { PhotoProps } from "../photo";

export type BoxProps = BoxPhotoProps | BoxTextProps;

type BaseBoxProps = {
  className?: string;
  legacy?: boolean;
};

type BoxPhotoProps = BaseBoxProps & {
  photoSrc: StaticImageData;
  photoId?: string;
  photoPriority?: boolean;
  placeholder?: PhotoProps["placeholder"];
  easeIn?: boolean;
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
  const { className = "", legacy } = props;

  return (
    <div className={legacy ? "cell" : styles.box_wrapper}>
      {isBoxPhoto(props) ? (
        <div
          className={`${
            legacy ? "max-w-max" : styles.box_photo_wrapper
          } ${className}`}
        >
          <Photo
            src={props.photoSrc}
            id={props.photoId}
            priority={props.photoPriority}
            legacy={legacy}
            placeholder={props.placeholder}
            easeIn={props.easeIn}
          />
        </div>
      ) : (
        <div
          className={`${
            legacy ? styles.box_text_wrapper_legacy : styles.box_text_wrapper
          } ${className}`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};
