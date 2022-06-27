// Animates the nav toggle icon and freezes body scrolling
var icon = document.getElementById('navbar-icon');
var content = document.getElementsByClassName('content')[0];
icon.addEventListener('click', function() {
	document.body.classList.toggle('noscroll');	// Lock scrolling
	content.classList.toggle('hidden');			// Hide page content
	this.classList.toggle('open');				// Animate the toggler icon
});

// Handle resize
window.addEventListener('resize', function() {
	if (window.innerWidth >= 992 && window.getComputedStyle(content).visibility == 'hidden') {
		icon.click() // Close out the mobile navbar & associated locks
	}
});