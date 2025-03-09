import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";

export type PhotoProps = {
  src: StaticImageData;
  priority?: boolean;
  id?: string;
  legacy?: boolean;
  placeholder?: PlaceholderValue;
};

const Photo = ({ src, priority, id, legacy, placeholder }: PhotoProps) => {
  return (
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
    />
  );
};

export default Photo;
