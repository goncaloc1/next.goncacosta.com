// Image paths to mock
const IMAGE_MOCKS = [
  // Reminiscencia
  "reminiscencia/a",
  "reminiscencia/b",
  "reminiscencia/c",
  "reminiscencia/d",
  "reminiscencia/e",
  "reminiscencia/k",
  "reminiscencia/l",
  "reminiscencia/m",
  "reminiscencia/o",
  "reminiscencia/p",
  "reminiscencia/q",
  "reminiscencia/r",
  "reminiscencia/s",
  "reminiscencia/t",
  "reminiscencia/u",
  // Alba
  "alba/b",
  "alba/c",
  "alba/d",
  "alba/e",
  "alba/j",
  "alba/k",
  "alba/l",
  "alba/m",
  "alba/n",
  "alba/o",
  "alba/p",
  "alba/q",
  "alba/r",
  "alba/v",
  "alba/w",
  // When
  "when/a",
  "when/b",
  "when/c",
  "when/d",
  "when/e",
  "when/f",
  "when/i",
  "when/k",
  "when/l",
  "when/n",
  "when/o",
  "when/z",
  // Paperbag
  "paperbag/7",
  "paperbag/6",
  "paperbag/high-res/t",
  "paperbag/high-res/x",
  // Oulu
  "oulu/high-res/2",
  "oulu/high-res/6",
  "oulu/high-res/12",
];

// Generate mocks for all images
IMAGE_MOCKS.forEach((imagePath) => {
  jest.mock(`./public/images/${imagePath}.jpg`, () => ({
    src: `/images/${imagePath}.jpg`,
    height: 1,
    width: 1,
  }));
});
