// Animates the nav toggle icon and freezes body scrolling
var icon = document.getElementById('navbar-icon');
var content = document.getElementsByClassName('content')[0];
icon.addEventListener('click', function() {
	document.body.classList.toggle('noscroll');
	content.classList.toggle('hidden');
	this.classList.toggle('open');
});
