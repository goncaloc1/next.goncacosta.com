import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";

const reminiscencia = {
  title: "reminiscencia",
  imagesRootPath: "images/",
  relativePath: "reminiscencia/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "a", mainpage: true },
    { name: "b", mainpage: true },
    { name: "c", mainpage: true },
    { name: "d", mainpage: true },
    { name: "e", mainpage: true },
    { name: "f", mainpage: false },
    { name: "g", mainpage: false },
    { name: "h", mainpage: false },
    { name: "i", mainpage: false },
    { name: "j", mainpage: false },
    { name: "k", mainpage: true },
    { name: "l", mainpage: true },
    { name: "m", mainpage: true },
    { name: "n", mainpage: false },
    { name: "o", mainpage: true },
    { name: "p", mainpage: true },
    { name: "q", mainpage: true },
    { name: "r", mainpage: true },
    { name: "s", mainpage: true },
    { name: "t", mainpage: true },
    { name: "u", mainpage: true },
  ],
};

const alba = {
  title: "alba",
  imagesRootPath: "images/",
  relativePath: "alba/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "a", mainpage: true },
    { name: "b", mainpage: true },
    { name: "c", mainpage: false },
    { name: "d", mainpage: true },
    { name: "e", mainpage: true },
    { name: "f", mainpage: false },
    { name: "g", mainpage: false },
    { name: "h", mainpage: true },
    { name: "i", mainpage: false },
    { name: "j", mainpage: false },
    { name: "k", mainpage: true },
    { name: "l", mainpage: true },
    { name: "m", mainpage: true },
    { name: "n", mainpage: true },
    { name: "o", mainpage: true },
    { name: "p", mainpage: true },
    { name: "q", mainpage: true },
    { name: "r", mainpage: true },
    { name: "s", mainpage: false },
    { name: "t", mainpage: false },
    { name: "u", mainpage: false },
    { name: "v", mainpage: true },
    { name: "w", mainpage: true },
    { name: "x", mainpage: false },
    { name: "y", mainpage: false },
  ],
};

const when = {
  title: "when was the last time someone wrote you a love letter?",
  imagesRootPath: "images/",
  relativePath: "when/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "a", mainpage: true },
    { name: "b", mainpage: true },
    { name: "c", mainpage: true },
    { name: "d", mainpage: true },
    { name: "e", mainpage: true },
    { name: "f", mainpage: true },
    { name: "g", mainpage: false },
    { name: "g1", mainpage: false },
    { name: "g2", mainpage: false },
    { name: "h", mainpage: false },
    { name: "i", mainpage: true },
    { name: "j", mainpage: false },
    { name: "k", mainpage: true },
    { name: "l", mainpage: true },
    { name: "m", mainpage: false },
    { name: "n", mainpage: true },
    { name: "o", mainpage: true },
    { name: "p", mainpage: false },
    { name: "q", mainpage: false },
    { name: "z", mainpage: true },
  ],
};

const paperbag = {
  title: "it's a paper bag to scream, it's a bag of affections",
  imagesRootPath: "images/",
  relativePath: "paperbag/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "1", mainpage: true },
    { name: "5", mainpage: true },
    { name: "7", mainpage: true },
    { name: "f", mainpage: false },
    { name: "g", mainpage: false },
    { name: "h", mainpage: false },
    { name: "6", mainpage: true },
    { name: "e", mainpage: false },
    { name: "a", mainpage: false },
    { name: "i", mainpage: true },
  ],
};

const oulu = {
  title: "oulu",
  imagesRootPath: "images/",
  relativePath: "oulu/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "4", mainpage: false },
    { name: "20", mainpage: false },
    { name: "30", mainpage: false },
    { name: "31", mainpage: false },
    { name: "q", mainpage: true },
    { name: "g", mainpage: false },
    { name: "18", mainpage: false },
    { name: "99", mainpage: true },
    { name: "j", mainpage: false },
    { name: "98", mainpage: false },
    { name: "28", mainpage: false },
    { name: "f", mainpage: false },
    { name: "i", mainpage: false },
    { name: "k", mainpage: false },
  ],
};

const sopra = {
  title: "sopra",
  imagesRootPath: "images/",
  relativePath: "sopra/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "7", mainpage: false },
    { name: "6", mainpage: false },
    { name: "26", mainpage: false },
    { name: "2", mainpage: false },
    { name: "4", mainpage: false },
    { name: "15", mainpage: false },
    { name: "10 (1)", mainpage: false },
    { name: "prove0004", mainpage: false },
    { name: "8", mainpage: false },
    { name: "10", mainpage: false },
    { name: "14", mainpage: false },
    { name: "11", mainpage: false },
    { name: "16", mainpage: false },
    { name: "8 (1)", mainpage: false },
    { name: "5", mainpage: false },
    { name: "35", mainpage: false },
    { name: "34", mainpage: false },
    { name: "prov0005", mainpage: false },
    { name: "20", mainpage: false },
    { name: "prove0005", mainpage: false },
    { name: "30", mainpage: false },
    { name: "6 (1)", mainpage: false },
    { name: "6 (2)", mainpage: false },
    { name: "7 (1)", mainpage: false },
    { name: "31", mainpage: false },
    { name: "33", mainpage: false },
    { name: "provenc0006", mainpage: false },
  ],
};

const fado = {
  title: "fado",
  imagesRootPath: "images/",
  relativePath: "fado/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "proven0004", mainpage: true },
    { name: "pro0018", mainpage: true },
    { name: "prov0002", mainpage: false },
    { name: "prov0012", mainpage: true },
    { name: "21", mainpage: false },
    { name: "9", mainpage: false },
    { name: "7", mainpage: false },
    { name: "35(2)", mainpage: true },
    { name: "16", mainpage: false },
    { name: "2", mainpage: false },
    { name: "provence0019", mainpage: false },
    { name: "33", mainpage: false },
    { name: "10", mainpage: false },
  ],
};

function randomFromInterval(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function pickOne(list: any[]) {
  var idx = randomFromInterval(0, list.length - 1);
  return { obj: list[idx], idx: idx };
}

function loadRandomPhoto() {
  var pageInfo,
    mainImage,
    pages = [reminiscencia, alba, when, paperbag, oulu, sopra, fado];

  while (mainImage === undefined) {
    var pagesInfo = [],
      mainPageImages: any[] = [],
      res,
      mainPageImagesAux,
      lastIndex = -1;

    // get all mainpage images into an array and save respective pageInfo
    for (var i = 0; i < pages.length; ++i) {
      pagesInfo.push(pages[i]);

      mainPageImagesAux = pagesInfo[i].imagesInfo.filter(function (element) {
        return element.mainpage;
      });

      mainPageImages = mainPageImages.concat(mainPageImagesAux);

      lastIndex += mainPageImagesAux.length;
      (pagesInfo[i] as any).lastIndex = lastIndex;
    }

    // pick one random image and get the respective pageInfo
    if (mainPageImages.length != 0) {
      res = pickOne(mainPageImages);

      for (var j = 0; j < pagesInfo.length; ++j) {
        if ((pagesInfo[j] as any).lastIndex >= res.idx) {
          pageInfo = pagesInfo[j];
          mainImage = res.obj;
          return { pageInfo, mainImage };
        }
      }
    } else return null;
  }
}

export default function Home() {
  const [pageInfo, setPageInfo] = useState<Record<string, unknown> | null>(
    null
  );
  const [mainImage, setMainImage] = useState<Record<string, unknown> | null>(
    null
  );

  useEffect(() => {
    if (mainImage) return;

    const random = loadRandomPhoto();
    if (!random) return;

    setPageInfo(random.pageInfo);
    setMainImage(random.mainImage);
  }, []);

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
