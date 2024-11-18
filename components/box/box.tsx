import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Photo from "../photo";

export type BoxProps = BoxPhotoProps | BoxTextProps;

type BoxPhotoProps = {
  gap?: string;
  photoSrc: StaticImageData;
  photoWidth?: string;
  photoPriority?: boolean;
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
      <div className={`${props.photoWidth ?? ""} ${props.gap ?? "boxDistant"}`}>
        <Photo src={props.photoSrc} priority={props.photoPriority} />
      </div>
    ) : (
      <>{props.children}</>
    )}
  </div>
);
