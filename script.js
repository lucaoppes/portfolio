function flip(e) {
  e.currentTarget.classList.toggle("click");
}

const screenDimensions = {
  w: window.innerWidth,
  h: window.innerHeight,
};

console.log(screenDimensions);

let spacing, chaos;

switch (true) {
  case screenDimensions.h > screenDimensions.w:
    spacing = 30;
    chaos = 2;
    break;
  case screenDimensions.h > 1200:
    spacing = 5;
    chaos = 1.5;
    break;
  default:
    spacing = 3;
    chaos = 1;
}

const settings = {
  el: "html",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  backgroundColor: 0x2d2e3e,
  color: 0xf74972,
  scale: 2,
  scaleMobile: 1,
  spacing,
  chaos,
};

VANTA.TRUNK(settings);
