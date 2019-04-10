
const toggleMenu = (e) => {
  menu.classList.add("menu--open");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);


// const toggleMenu = (e) => {
//   if (e.target === menu) {
//     menu.classList.add("menu--open")
//   } else if (!e.target.closest(".menu")) {
//     menu.classList.remove("menu--open")
//   };
// };

