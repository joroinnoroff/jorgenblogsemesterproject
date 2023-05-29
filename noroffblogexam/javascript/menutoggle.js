const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && menu.classList.contains("active")) {
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});
