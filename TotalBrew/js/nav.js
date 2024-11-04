//variables
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".nav-menu");
//when the hamburger menu is clicked
//toggle the class of active on hamburger & offScreenMenu
hamMenu.addEventListener("click", function () {
  offScreenMenu.classList.toggle("active");
});
/** */
