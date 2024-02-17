const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");
const items = document.querySelectorAll(".navigation li");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
  });
});
