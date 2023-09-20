document.addEventListener('DOMContentLoaded', function () {
// START Mobile Menu
    const menuToggle = document.querySelector('.nav-toggle');
    const bars = document.querySelectorAll('.bar')
    const mobileMenu = document.querySelector('#primaryMenu');
    function toggleHamburger(e) {
        bars.forEach(bar => bar.classList.toggle('x'))
    }

    menuToggle.addEventListener('click', toggleHamburger)

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
// END Mobile Menu




    const hasSubmenuLinks = document.querySelectorAll(".has-submenu>a");

    hasSubmenuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {

            // prevents hyperlink from going anywhere
            event.preventDefault();

            // Find the parent li element
            const activeMenu = this.parentElement;

            const allMenuSelectedElements = document.querySelectorAll('.selected-menu');
            allMenuSelectedElements.forEach(function(menuSelectedElement) {
                menuSelectedElement.classList.remove('selected-menu');
            });
    



            if (activeMenu) {
                // Toggle the "menu-added" class on the submenu
                activeMenu.classList.toggle("selected-menu");
            }



            // START: Closing menu if anything outside the menu is selected
            const selectedMenu = document.querySelector(".selected-menu");
            const selectedMenuUL = document.querySelector(".selected-menu>ul");
            if (selectedMenu) {
                // Add a click event listener to the document
                document.addEventListener("click", function (event) {
                    // Check if the clicked element is outside of the ".selected-menu" element
                    if (!selectedMenu.contains(event.target)) {
                        // Remove the "selected-menu" class
                        selectedMenu.classList.remove("selected-menu");
                    }
                });

                // Add a click event listener to toggle the class when the menu is clicked
                selectedMenuUL.addEventListener("click", function (event) {
                    selectedMenu.classList.toggle("selected-menu");
                });
            }
            // END: Closing menu if anything outside the menu is selected

            // Prevent the click event from propagating further
            event.stopPropagation();
            // END: Closing menu if anything outside the menu is selected

        });
    });



    // const hasCloseLinks = document.querySelectorAll(".close-submenu>a");

    // hasCloseLinks.forEach((link) => {
    //     link.addEventListener("click", function (event) {
    //         event.preventDefault();
    //         alert("close clicked");
    //         const closestMenu = document.querySelectorAll(".selected-menu");
    //         elements.forEach(function (element) {
    //           element.classList.remove(".selected-menu");
    //         });
    //         event.stopPropagation();
    //     });
    // });

    // Get all elements with the class "close-submenu a"
    var closeSubMenuLinks = document.querySelectorAll('.close-submenu a');

    // Loop through each closeSubMenuLink and add a click event listener
    // closeSubMenuLinks.forEach(function(link) {
    //   link.addEventListener('click', function(e) {
    //     e.preventDefault(); // Prevent the default behavior of the anchor tag
    //     var parentListItem = link.closest('.has-submenu');
    //     if (parentListItem) {
    //       parentListItem.classList.remove('selected-submenu');
    //     }
    //   });
    // });

    // Get the parent <ul> element that contains the menu items
    let menuContainer = document.getElementById('primaryMenu');
    // Add a click event listener to the parent container
    menuContainer.addEventListener('click', function (event) {
        // Check if the clicked element is a .close-submenu a
        if (event.target.matches(".has-menu.selected-menu .close-submenu a")) {
            // Prevent the default link behavior if needed.
            event.preventDefault();
            // Remove the 'selected-menu' class from the parent element.
            const parentElement = event.target.closest(".has-menu.selected-menu");
            if (parentElement) {
                parentElement.classList.remove("selected-menu");
            }
        }    
    });

    // // Get the parent <ul> element that contains the menu items
    // let menuContainer = document.getElementById('primaryMenu');
    // // Add a click event listener to the parent container
    // menuContainer.addEventListener('click', function (event) {
    //     if (event.target.matches(".close-submenu a")) {
    //         event.preventDefault();
    //         alert("is this triggered?")
    //         // Find all elements with class 'selected-menu'.
    //         const selectedMenus = document.querySelectorAll(".selected-menu");
    
    //         // Loop through and remove the class from each element.
    //         selectedMenus.forEach(function(selectedMenu) {
    //             selectedMenu.classList.remove("selected-menu");
    //         });
    //     }
    
    // });



});
