import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, useMemo, useState } from "react";

export type PhotoProps = {
  src: StaticImageData;
  priority?: boolean;
  id?: string;
  legacy?: boolean;
  placeholder?: PlaceholderValue;
  easeIn?: boolean;
};

const Photo = ({
  src,
  priority,
  id,
  legacy,
  placeholder,
  easeIn = true,
}: PhotoProps) => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  const easeInStyle = useMemo<CSSProperties>(() => {
    const base = {
      transition: "opacity 0.75s ease-in-out",
    };

    return isPhotoLoaded
      ? {
          ...base,
          visibility: "visible",
          opacity: "1",
        }
      : {
          ...base,
          visibility: "hidden",
          opacity: 0,
        };
  }, [isPhotoLoaded]);

  return (
    <div style={easeIn ? easeInStyle : undefined}>
      <Image
        id={id}
        alt="photo"
        src={src}
        quality={85}
        priority={priority}
        loading={priority ? undefined : "eager"}
        fill={!legacy}
        sizes={legacy ? undefined : "100vw"}
        style={
          legacy
            ? {
                maxWidth: "100%",
                height: "auto",
              }
            : {
                objectFit: "contain",
                objectPosition: "right",
              }
        }
        placeholder={placeholder}
        blurDataURL={src.blurDataURL}
        onLoad={() => setIsPhotoLoaded(true)}
      />
    </div>
  );
};

export default Photo;
