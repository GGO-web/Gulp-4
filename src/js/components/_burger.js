const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__nav");

function openBurgerMenu() {
   burger.classList.add("active");
   burger.setAttribute("aria-expanded", "false");

   headerMenu.classList.add("is-active");
   document.body.classList.add("hide-scroll");
}

function closeBurgerMenu() {
   burger.classList.remove("active");
   burger.setAttribute("aria-expanded", "true");

   headerMenu.classList.remove("is-active");
   document.body.classList.remove("hide-scroll");
}

burger.addEventListener("click", function () {
   if (headerMenu.classList.contains("is-active")) {
      closeBurgerMenu();
   } else {
      openBurgerMenu();
   }
});

window.addEventListener("orientationchange", () => {
   closeBurgerMenu();
});
