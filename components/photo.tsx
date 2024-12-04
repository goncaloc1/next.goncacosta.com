import Image, { StaticImageData } from "next/image";

type PhotoProps = {
  src: StaticImageData;
  priority?: boolean;
  id?: string;
  legacy?: boolean;
};

const Photo = ({ src, priority, id, legacy }: PhotoProps) => {
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
    />
  );
};

export default Photo;
