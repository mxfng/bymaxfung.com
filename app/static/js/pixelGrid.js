// Fades pixels based on mouse position
function colorizePixel() {
    if (this.classList.contains('clicked')) {
        this.style.background = 'white';
    } else {
        this.style.background = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }
    this.classList.toggle('clicked');
}

var pixels = document.getElementsByClassName('pixel');
for (var i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', colorizePixel);
}
