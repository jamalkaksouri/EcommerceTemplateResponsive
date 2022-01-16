const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");
const overlay = document.querySelector(".overlay");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.remove("overlay-hidden");
    document.body.style.overflowY = "hidden";
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.add("overlay-hidden");
    document.body.style.overflowY = "visible";
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.add("overlay-hidden");
    document.body.style.overflowY = "visible";
  });
}
