const menuImage = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar-nav");
const navMenuDiv = document.querySelector(".navbar div");
const listItem = document.querySelectorAll(".list-item");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

menuImage.addEventListener("click", () => {
  if (navbarNav.style.display === "" || navbarNav.style.display === "none") {
    navbarNav.style.display = "flex";
    menuImage.src = "./assets/images/icon-menu-close.svg";
    navbarNav.classList.add("activeMenu");
    overlay.style.display = "block";
  } else {
    menuImage.src = "./assets/images/icon-menu.svg";
    navbarNav.style.display = "none";
    overlay.style.display = "none";
  }
});

// function windowSize(){
//   let windowWidth =
// }

addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    navbarNav.classList.remove("activeMenu");
    overlay.style.display = "none";
  }
});
