const menuImage = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar-nav");
const navMenuDiv = document.querySelector(".navbar div");
const listItem = document.querySelectorAll(".list-item");

menuImage.addEventListener("click", () => {
  if (navbarNav.style.display === "" || navbarNav.style.display === "none") {
    navbarNav.style.display = "flex";
    menuImage.src = "./assets/images/icon-menu-close.svg";
    navbarNav.classList.add("activeMenu");
  } else {
    menuImage.src = "./assets/images/icon-menu.svg";
    navbarNav.style.display = "none";
  }
});
