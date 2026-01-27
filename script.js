function flip(e) {
  e.currentTarget.classList.toggle("click");
}

function openProject(e, url) {
  e.stopPropagation();

  window.open(url);
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
    spacing = 6;
    chaos = 1.5;
    break;
  default:
    spacing = 3;
    chaos = 1.25;
}

const settings = {
  el: "html",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  backgroundColor: 0x222426,
  color: 0xdc0d50,
  scale: 2,
  scaleMobile: 1,
  spacing,
  chaos,
};

if (screenDimensions.h > screenDimensions.w) {
  VANTA.TOPOLOGY(settings);
} else {
  VANTA.TRUNK(settings);
}
