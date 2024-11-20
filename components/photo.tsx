import Image, { StaticImageData } from "next/image";

type PhotoProps = {
  src: StaticImageData;
  priority?: boolean;
  id?: string;
};

const Photo = ({ src, priority, id }: PhotoProps) => {
  return (
    <Image
      id={id}
      alt="photo"
      src={src}
      quality={85}
      priority={priority}
      loading={priority ? undefined : "eager"}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
};

export default Photo;
