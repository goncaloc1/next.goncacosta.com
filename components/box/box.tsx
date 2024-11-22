import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Photo from "../photo";

export type BoxProps = BoxPhotoProps | BoxTextProps;

type BoxPhotoProps = {
  photoSrc: StaticImageData;
  photoId?: string;
  photoWidth?: string;
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

export const Box = (props: BoxProps) => {
  const { className = "" } = props;

  return (
    <div className="cell">
      {isBoxPhoto(props) ? (
        <div className={`${props.photoWidth ?? ""} ${className}`}>
          <Photo
            src={props.photoSrc}
            id={props.photoId}
            priority={props.photoPriority}
          />
        </div>
      ) : (
        <div className={`header ${className}`}>{props.children}</div>
      )}
    </div>
  );
};
