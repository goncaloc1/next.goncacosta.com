import { useEffect, useState } from "react";

const reminiscencia = {
  title: "reminiscencia",
  imagesRootPath: "images/",
  relativePath: "reminiscencia/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" },
    { name: "e" },
    { name: "k" },
    { name: "l" },
    { name: "m" },
    { name: "o" },
    { name: "p" },
    { name: "q" },
    { name: "r" },
    { name: "s" },
    { name: "t" },
    { name: "u" },
  ],
};

const alba = {
  title: "alba",
  imagesRootPath: "images/",
  relativePath: "alba/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "a" },
    { name: "b" },
    { name: "d" },
    { name: "e" },
    { name: "h" },
    { name: "k" },
    { name: "l" },
    { name: "m" },
    { name: "n" },
    { name: "o" },
    { name: "p" },
    { name: "q" },
    { name: "r" },
    { name: "v" },
    { name: "w" },
  ],
};

const when = {
  title: "when was the last time someone wrote you a love letter?",
  imagesRootPath: "images/",
  relativePath: "when/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" },
    { name: "e" },
    { name: "f" },
    { name: "i" },
    { name: "k" },
    { name: "l" },
    { name: "n" },
    { name: "o" },
    { name: "z" },
  ],
};

const paperbag = {
  title: "it's a paper bag to scream, it's a bag of affections",
  imagesRootPath: "images/",
  relativePath: "paperbag/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "1" },
    { name: "5" },
    { name: "7" },
    { name: "6" },
    { name: "i" },
  ],
};

const oulu = {
  title: "oulu",
  imagesRootPath: "images/",
  relativePath: "oulu/",
  imagesExtension: ".jpg",
  imagesInfo: [{ name: "q" }, { name: "99" }],
};

const fado = {
  title: "fado",
  imagesRootPath: "images/",
  relativePath: "fado/",
  imagesExtension: ".jpg",
  imagesInfo: [
    { name: "proven0004" },
    { name: "pro0018" },
    { name: "prov0012" },
    { name: "35(2)" },
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
    pages = [reminiscencia, alba, when, paperbag, oulu, fado];

  while (mainImage === undefined) {
    var pagesInfo = [],
      images: any[] = [],
      res,
      lastIndex = -1;

    // get all mainpage images into an array and save respective pageInfo
    for (var i = 0; i < pages.length; ++i) {
      pagesInfo.push(pages[i]);

      images = images.concat(pagesInfo[i].imagesInfo);

      lastIndex += pagesInfo[i].imagesInfo.length;
      (pagesInfo[i] as any).lastIndex = lastIndex;
    }

    // pick one random image and get the respective pageInfo
    res = pickOne(images);

    for (var j = 0; j < pagesInfo.length; ++j) {
      if ((pagesInfo[j] as any).lastIndex >= res.idx) {
        pageInfo = pagesInfo[j];
        mainImage = res.obj;
        return { pageInfo, mainImage };
      }
    }
  }
}

export const useRandomPhoto = () => {
  const [pageInfo, setPageInfo] = useState<Record<string, unknown> | null>(
    null
  );
  const [mainImage, setMainImage] = useState<Record<string, unknown> | null>(
    null
  );

  useEffect(() => {
    if (mainImage) return;

    const random = loadRandomPhoto();
    if (random) {
      setPageInfo(random.pageInfo);
      setMainImage(random.mainImage);
    }
  }, []);

  return { pageInfo, mainImage };
};
