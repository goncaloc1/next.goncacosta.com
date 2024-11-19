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
};

/**
 * Type guard for @type BoxPhotoProps
 */
const isBoxPhoto = (data: BoxProps): data is BoxPhotoProps =>
  (data as BoxPhotoProps).photoSrc != null;

export const Box = (props: BoxProps) => (
  <div className="cell">
    {isBoxPhoto(props) ? (
      <div className={`${props.photoWidth ?? ""} ${props.className ?? ""}`}>
        <Photo
          src={props.photoSrc}
          id={props.photoId}
          priority={props.photoPriority}
        />
      </div>
    ) : (
      <>{props.children}</>
    )}
  </div>
);
