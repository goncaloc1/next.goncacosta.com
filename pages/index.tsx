import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useRandomPhoto } from "../hooks/useRandomPhoto";

export default function Home() {
  const { pageInfo, mainImage } = useRandomPhoto();

  return (
    <>
      <Head>
        <title>TODO Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="content">
        <div className="wrapper">
          <div className="cell">
            <div className="linksWrapper">
              <a id="goncalocosta">gonçalo costa</a>
              <a className="spacer">&nbsp;</a>
              <a id="gallery">gallery</a>
              <Link href="/reminiscencia">
                <a id="reminiscencia">reminiscencia</a>
              </Link>
              <Link href="/alba">
                <a id="alba">alba</a>
              </Link>
              <Link href="/when">
                <a id="when">
                  when was the last time someone wrote you a love letter?
                </a>
              </Link>
              <Link href="/paperbag">
                <a id="paperbag">
                  it's a paper bag to scream, it's a bag of affections
                </a>
              </Link>
              <a id="archive">archive</a>
              <Link href="/oulu">
                <a id="oulu">oulu</a>
              </Link>
              <Link href="/sopra">
                <a id="sopra">sopra</a>
              </Link>
              <Link href="/fado">
                <a id="fado">fado</a>
              </Link>
              <a className="spacer">&nbsp;</a>
              <a id="email">goncacosta at gmail dot com</a>
            </div>
          </div>
          <div className="cell">
            <div
              id="main_img_wrapper"
              style={
                pageInfo && mainImage
                  ? { visibility: "visible", opacity: "1" }
                  : {}
              }
            >
              {pageInfo && mainImage && (
                <Link href={pageInfo.relativePath as string}>
                  <a>
                    <img
                      src={`${pageInfo.imagesRootPath}${pageInfo.relativePath}${mainImage.name}${pageInfo.imagesExtension}`}
                      alt="&nbsp"
                      id="main_img"
                    />
                    <p id="main_img_desc">
                      in&nbsp;
                      <span id="main_img_project">
                        {pageInfo.title as string}
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

      <Script>{`new HomePage().setup();`}</Script>
    </>
  );
}
