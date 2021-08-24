import { useEffect, useState } from "react";

function randomFromInterval(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

const mainColors = [
  "mainColor1",
  "mainColor2",
  "mainColor3",
  "mainColor4",
  "mainColor5",
  "mainColor6",
  "mainColor7",
  "mainColor8",
  "mainColor9",
];

const secondaryColors = [
  "secondaryColor1",
  "secondaryColor2",
  "secondaryColor3",
  "secondaryColor4",
  "secondaryColor5",
  "secondaryColor11",
  "secondaryColor12",
  "secondaryColor13",
  "secondaryColor14",
];

function setupMenu() {
  const goncalocosta = document.getElementById("goncalocosta"),
    email = document.getElementById("email"),
    gallery = document.getElementById("gallery"),
    archive = document.getElementById("archive"),
    reminiscencia = document.getElementById("reminiscencia"),
    alba = document.getElementById("alba"),
    when = document.getElementById("when"),
    sopra = document.getElementById("sopra"),
    paperbag = document.getElementById("paperbag"),
    oulu = document.getElementById("oulu"),
    fado = document.getElementById("fado");

  if (
    !goncalocosta ||
    !email ||
    !gallery ||
    !archive ||
    !reminiscencia ||
    !alba ||
    !when ||
    !sopra ||
    !paperbag ||
    !oulu ||
    !fado
  ) {
    return;
  }

  var maxIdxMC = mainColors.length - 1,
    maxIdxSC = secondaryColors.length - 1;

  goncalocosta.className =
    secondaryColors[randomFromInterval(maxIdxSC - 3, maxIdxSC)];
  email.className = secondaryColors[randomFromInterval(maxIdxSC - 3, maxIdxSC)];
  gallery.className = archive.className =
    secondaryColors[randomFromInterval(maxIdxSC - 3, maxIdxSC)];

  var elems = [reminiscencia, alba, when, paperbag],
    mainColorElemIdx = randomFromInterval(0, elems.length - 1);

  for (var i = 0; i < elems.length; i++) {
    if (i == mainColorElemIdx)
      elems[i].className = mainColors[randomFromInterval(0, maxIdxMC)];
    else
      elems[i].className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
  }

  sopra.className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
  oulu.className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
  fado.className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
}

export const useRandomColors = () => {
  useEffect(() => {
    setupMenu();
  }, []);
};
