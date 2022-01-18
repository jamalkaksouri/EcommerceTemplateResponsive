const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const scrollup = document.querySelector(".scroll-up");
const closeButton = document.querySelector(".close-button");
const appMenu = document.querySelector(".app");
const scup = document.querySelector(".scroll-up");
const closeApp = document.querySelector(".close");

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

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function scrollHandler() {
  if (window.scrollY >= 500) {
    scrollup.style.visibility = "visible";
    scrollup.style.opacity = 1;
  } else {
    scrollup.style.visibility = "hidden";
    scrollup.style.opacity = 0;
  }
}

const scrollToHandler = () => {
  window.scrollTo(0, 0);
};

if (scrollup) {
  window.addEventListener("scroll", scrollHandler);
  scrollup.addEventListener("click", scrollToHandler);
}

function doOnOrientationChange() {
  switch (window.orientation) {
    case -90:
    case 90:
      document.querySelector("#lock-orientation").style.display = "table";
      break;
    default:
      document.querySelector("#lock-orientation").style.display = "none";
      break;
  }
}

window.addEventListener("orientationchange", doOnOrientationChange);
window.onload = doOnOrientationChange;

const closeAppHandler = () => {
  appMenu.classList.add("hidden-app-menu");
  scup.classList.add("scrollMargin");
};
closeApp.addEventListener("click", closeAppHandler);
