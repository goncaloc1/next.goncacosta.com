import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhotoMetadata } from "../lib/random-photo";

type MainImageProps = {
  photoMetadata: PhotoMetadata;
};

const MainImage = ({ photoMetadata }: MainImageProps) => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  return (
    <>
      <section
        style={isPhotoLoaded ? { visibility: "visible", opacity: "1" } : {}}
        className={photoMetadata.is35mm ? "landscape" : ""}
      >
        <Link legacyBehavior href={photoMetadata.path as string}>
          <a style={{ float: "right" }}>
            <figure>
              <Image
                alt="&nbsp"
                src={photoMetadata.source}
                priority={true}
                quality={85}
                onLoad={() => setIsPhotoLoaded(true)}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "right",
                }}
              />
              <figcaption>
                in&nbsp;
                <span>{photoMetadata.title}</span>
              </figcaption>
            </figure>
          </a>
        </Link>
      </section>

      <style jsx>{`
        section {
          visibility: hidden;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          -moz-transition: opacity 1s ease-in-out;
          -webkit-transition: opacity 1s ease-in-out;
          position: relative;
          height: 90%;
          width: 65%;
          float: right;
          margin-right: 5%;
        }

        .landscape {
          height: 60%;
        }

        @media (max-width: 768px) {
          section {
            display: none;
          }
        }

        figcaption {
          font-variant: normal;
          font-style: italic;
          margin: 5px 10px 0 0;
          position: absolute;
          right: 0;
          bottom: -18px;
          position: absolute;
          right: 0;
          bottom: -18px;

          span {
            text-transform: uppercase;
          }
        }
      `}</style>
    </>
  );
};

export default MainImage;
