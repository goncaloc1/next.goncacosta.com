import Image, { StaticImageData } from "next/image";

type PhotoV2Props = {
  src: StaticImageData;
  priority?: boolean;
  id?: string;
};

const PhotoV2 = ({ src, priority, id }: PhotoV2Props) => {
  return (
    <Image
      id={id}
      alt="photo"
      src={src}
      quality={85}
      priority={priority}
      loading={priority ? undefined : "eager"}
      fill
      sizes="100vw"
      style={{
        objectFit: "contain",
        objectPosition: "right",
      }}
    />
  );
};

export default PhotoV2;
