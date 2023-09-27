document.addEventListener("DOMContentLoaded", init());
const bodyElement = document.querySelector("body");
let mobileOverlay = false;
function init() {
  const overlay = document.getElementById("overlay"); // should this go here?
  handleSubmenuLinks();
  handleSubmenuCloseButtons();
  handleExtendedMenus();
  handleMobileMenu();
}
// START Mobile Hamburger
function handleMobileMenu() {
  const menuToggle = document.querySelector(".nav-toggle");
  const bars = document.querySelectorAll(".bar");
  const mobileMenu = document.querySelector("#primaryMenu");
  function toggleHamburger(e) {
    bars.forEach((bar) => bar.classList.toggle("x"));
  }

  menuToggle.addEventListener("click", toggleHamburger);

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    mobileOverlay = !mobileOverlay;
    bodyElement.classList.toggle("overlay-active");
  });
}
// END Mobile Hamburger

function handleClickOutsideOfMenu(event) {
  const selectedMenu = document.querySelector(".selected-menu");

  // If no selected menu present, remove the event listener and return
  if (!selectedMenu) {
    document.removeEventListener("click", handleClickOutsideOfMenu);
    return
  }
  // Check if the clicked element is outside of the ".selected-menu" element
  if (!selectedMenu.contains(event.target)) {

    // Remove the "selected-menu" class
    selectedMenu.classList.remove("selected-menu");
    if (!mobileOverlay)
    bodyElement.classList.remove("overlay-active");
    document.removeEventListener("click", handleClickOutsideOfMenu);
  }
  event.stopPropagation();
}
function toggleSubmenu() {

  // We want to know if this menu was already selected so we know what to do with it later on
  const isSelected = this.parentElement.classList.contains("selected-menu");

  // Hide any currently displayed submenus so they don't overlap
  const allMenuSelectedElements = document.querySelectorAll(".selected-menu");
  allMenuSelectedElements.forEach(function (menuSelectedElement) {
    menuSelectedElement.classList.remove("selected-menu");
    if (!mobileOverlay)
    bodyElement.classList.remove("overlay-active");
  });

  // if it was already toggled on hide it, otherwise show it
  if (isSelected) {
    this.parentElement.classList.remove("selected-menu");
    if (!mobileOverlay)
    bodyElement.classList.remove("overlay-active");
    document.removeEventListener("click", handleClickOutsideOfMenu);
  } else {
    this.parentElement.classList.add("selected-menu");
    if (!mobileOverlay)
    bodyElement.classList.add("overlay-active");
    document.addEventListener("click", handleClickOutsideOfMenu);
  }
}
function handleSubmenuLinks() {
  const hasSubmenuLinks = document.querySelectorAll(".has-submenu> a");

  hasSubmenuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the anchor tag
      event.preventDefault();
      toggleSubmenu.bind(this)();
    });
  });
}
function handleSubmenuCloseButtons() {
  const closeSubMenuLinks = document.querySelectorAll(".submenu>.close-submenu a");
  closeSubMenuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the anchor tag
      event.preventDefault();

      const parentListItem = link.closest(".has-submenu");
      if (parentListItem) {
        parentListItem.classList.remove("selected-menu");
        if (!mobileOverlay)
        bodyElement.classList.remove("overlay-active");
      }
    });
  });
}

function handleExtendedMenus() {
  // START Expand button behavior
  const subMenuHasMenuLinks = document.querySelectorAll(".has-submenu .sub-submenu a");
  subMenuHasMenuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the anchor tag
      event.preventDefault();

      this.parentElement.classList.add("selected-submenu");
    });
  });

  

  // END Expand button behavior

  // START close button behavior
  const closeSubMenuLinks = document.querySelectorAll(".sub-submenu .close-submenu a");
  closeSubMenuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the anchor tag
      event.preventDefault();

      const parentListItem = link.closest(".sub-submenu");
      if (parentListItem) {
        parentListItem.classList.remove("selected-submenu");
      }
    });
  });
  // END close button behavior
}
