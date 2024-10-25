const MAIN_COLORS = [
  "main_color1",
  "main_color2",
  "main_color3",
  "main_color4",
  "main_color5",
  "main_color6",
  "main_color7",
  "main_color8",
  "main_color9",
] as const;

const SECONDARY_COLORS = [
  "secondary_color1",
  "secondary_color2",
  "secondary_color3",
  "secondary_color4",
  "secondary_color5",
  "secondary_color11",
  "secondary_color12",
  "secondary_color13",
  "secondary_color14",
] as const;

const maxIdxMC = MAIN_COLORS.length - 1;
const maxIdxSC = SECONDARY_COLORS.length - 1;

type MainColors = (typeof MAIN_COLORS)[number];

type SecondaryColors = (typeof SECONDARY_COLORS)[number];

const random = (from: number, to: number): number => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

export type NavigationColors = {
  goncalocosta: SecondaryColors;
  email: SecondaryColors;
  gallery: SecondaryColors;
  archive: SecondaryColors;
  reminiscencia: MainColors | SecondaryColors;
  alba: MainColors | SecondaryColors;
  when: MainColors | SecondaryColors;
  paperbag: MainColors | SecondaryColors;
  sopra: SecondaryColors;
  oulu: SecondaryColors;
  fado: SecondaryColors;
};

export const getNavigationColors = (): NavigationColors => {
  const navigationColors: NavigationColors = {
    goncalocosta: SECONDARY_COLORS[random(maxIdxSC - 3, maxIdxSC)],
    email: SECONDARY_COLORS[random(maxIdxSC - 3, maxIdxSC)],
    gallery: SECONDARY_COLORS[random(maxIdxSC - 3, maxIdxSC)],
    archive: SECONDARY_COLORS[random(maxIdxSC - 3, maxIdxSC)],
    reminiscencia: "secondary_color1",
    alba: "secondary_color1",
    when: "secondary_color1",
    paperbag: "secondary_color1",
    sopra: SECONDARY_COLORS[random(0, maxIdxSC - 4)],
    oulu: SECONDARY_COLORS[random(0, maxIdxSC - 4)],
    fado: SECONDARY_COLORS[random(0, maxIdxSC - 4)],
  };

  // Only one of the following buttons will have a main color
  const mainColorButtons = [
    "reminiscencia",
    "alba",
    "when",
    "paperbag",
  ] as const;

  const mainColorButtonIdx = random(0, mainColorButtons.length - 1);

  mainColorButtons.forEach((button, idx) => {
    navigationColors[button] =
      idx === mainColorButtonIdx
        ? MAIN_COLORS[random(0, maxIdxMC)]
        : SECONDARY_COLORS[random(0, maxIdxSC - 4)];
  });

  return navigationColors;
};
