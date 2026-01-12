function changeVisibility(event) {
  console.log("ul-" + event);
  document.getElementById("ul-" + event).classList.toggle("hidden");
}

function flip(e) {
  e.currentTarget.classList.toggle("flip");
}

document.querySelectorAll(".project").forEach((el) => {
  el.addEventListener("click", flip);
});
