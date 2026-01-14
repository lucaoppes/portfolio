function flip(e) {
  e.currentTarget.classList.toggle("click");
}

VANTA.TRUNK({
  el: "html",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  backgroundColor: 0x2d2e3e,
  color: 0xf74972,
  scale: 1,
  scaleMobile: 1,
  spacing: 5,
  chaos: 1.5,
});
