import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useNavigationColors } from "../hooks/useNavigationColors";
import { usePhoto, Photo } from "../hooks/usePhoto";

export default function Home() {
  const navigationColors = useNavigationColors();

  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const [photo, setPhoto] = useState<Photo | null>(null);

  const getRandomPhoto = usePhoto();

  const getRandomPhotoRef = useRef<() => Promise<Photo>>();

  /**
   * We really want to only run getRandomPhoto once hence useRef.
   * Lint would ask getRandomPhoto to be in the list of dependencies
   * which actually we do not need (even if getRandomPhoto instance changes).
   */
  useEffect(() => {
    getRandomPhotoRef.current = getRandomPhoto;
  });

  useEffect(() => {
    const loadPhoto = async () => {
      const result = await getRandomPhotoRef.current!();

      setIsPhotoLoaded(false);
      setPhoto(result);
    };

    loadPhoto();
  }, []);

  if (!navigationColors) return <></>;

  return (
    <>
      <Head>
        <title>: Gonçalo Costa</title>
        <meta name="description" content="Gonçalo Costa : gallery" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="fN_MpKv7865Tw0sNWRxzcL1U8oAG_fnFnZW1M2W0Zqs"
        />
      </Head>

      {/* TODO encapsulate cache in a component */}
      <div style={{ visibility: "hidden", height: 0 }}>
        <div className="mCSB_buttonLeft"></div>
        <div id="navigation_menu" style={{ margin: 0 }}>
          <a href="#" id="back" />
        </div>
      </div>

      <div id="content">
        <div className="wrapper">
          <div className="cell">
            <div className="linksWrapper">
              <a className={navigationColors.goncalocosta}>gonçalo costa</a>
              <a className="spacer">&nbsp;</a>
              <a className={navigationColors.gallery}>gallery</a>
              <Link href="/reminiscencia">
                <a className={navigationColors.reminiscencia}>reminiscencia</a>
              </Link>
              <Link href="/alba">
                <a className={navigationColors.alba}>alba</a>
              </Link>
              <Link href="/when">
                <a id="when" className={navigationColors.when}>
                  when was the last time someone wrote you a love letter?
                </a>
              </Link>
              <Link href="/paperbag">
                <a id="paperbag" className={navigationColors.paperbag}>
                  it's a paper bag to scream, it's a bag of affections
                </a>
              </Link>
              <a className={navigationColors.archive}>archive</a>
              <Link href="/oulu">
                <a className={navigationColors.oulu}>oulu</a>
              </Link>
              <Link href="/sopra">
                <a className={navigationColors.sopra}>sopra</a>
              </Link>
              <Link href="/fado">
                <a className={navigationColors.fado}>fado</a>
              </Link>
              <a className="spacer">&nbsp;</a>
              <a id="email" className={navigationColors.email}>
                goncacosta at gmail dot com
              </a>
            </div>
          </div>
          <div className="cell">
            <div
              id="main_img_wrapper"
              style={
                isPhotoLoaded ? { visibility: "visible", opacity: "1" } : {}
              }
            >
              {photo && (
                <Link href={photo.metadata.path as string}>
                  <a style={{ float: "right" }}>
                    <div
                      style={{
                        position: "relative",
                        maxWidth: "600px",
                      }}
                    >
                      <Image
                        alt="&nbsp"
                        src={photo.src}
                        priority={true}
                        quality={100}
                        onLoadingComplete={() => setIsPhotoLoaded(true)}
                      />
                    </div>

                    <p id="main_img_desc">
                      in&nbsp;
                      <span id="main_img_project">
                        {photo.metadata.title as string}
                      </span>
                    </p>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        div {
          color: #444;
          font-size: 11pt;
          font-family: "Dosis", sans-serif;
          letter-spacing: 0.05em;
          line-height: 1.1em;
          font-variant: small-caps;
        }

        /* Chrome hack (affects Safari) */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          div {
            font-size: 12.5pt;
            letter-spacing: 0.06em;
            line-height: 1em;
          }
        }

        .wrapper > div:first-child {
          vertical-align: middle;
        }

        .wrapper {
          width: 100%;
        }
      `}</style>
    </>
  );
}
