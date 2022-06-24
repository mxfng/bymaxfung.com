// When the user scrolls the page, execute setNavbarSticky
window.onscroll = function() {setNavbarSticky()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function setNavbarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 