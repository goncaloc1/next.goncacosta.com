import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhotoMetadata } from "../lib/randomPhoto";

type MainImageProps = {
  photoMetadata: PhotoMetadata;
};

const MainImage = ({ photoMetadata }: MainImageProps) => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  return (
    <>
      <div
        id="main-img-wrapper"
        style={isPhotoLoaded ? { visibility: "visible", opacity: "1" } : {}}
      >
        <Link legacyBehavior href={photoMetadata.path as string}>
          <a style={{ float: "right" }}>
            <Image
              alt="&nbsp"
              src={photoMetadata.source}
              priority={true}
              onLoad={() => setIsPhotoLoaded(true)}
              width={photoMetadata.source.width * photoMetadata.proportion!}
              height={photoMetadata.source.height * photoMetadata.proportion!}
            />
            <p id="main-img-desc">
              in&nbsp;
              <span id="main-img-project">{photoMetadata.title as string}</span>
            </p>
          </a>
        </Link>
      </div>
      <style jsx>{`
        #main-img-wrapper {
          margin: 0 0 0 150px;
        }

        #main-img-wrapper {
          margin: 0 5% 0 0;
          text-align: right;
          visibility: hidden;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          -moz-transition: opacity 1s ease-in-out;
          -webkit-transition: opacity 1s ease-in-out;
        }

        @media (max-width: 820px) {
          #main-img-wrapper {
            display: none;
          }
        }

        #main-img-desc {
          font-variant: normal;
          font-style: italic;
          margin: 5px 10px 0 0;
        }

        #main-img-project {
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};

export default MainImage;
