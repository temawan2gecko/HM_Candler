const menuBtn = document.querySelector(".header__nav__btn");
const menuMobile = document.querySelector(".header__menu__list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__open");
});


