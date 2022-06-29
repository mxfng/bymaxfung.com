// Fades pixels based on mouse position
var pixels = document.getElementsByClassName('pixel');

function colorizePixel(pixel) {
    pixel.style.background = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    if (pixel.classList.contains('clicked')) {
        pixel.style.background = 'white';
    }
    pixel.classList.toggle('clicked');
}

// Click and drag functionality

var isClicked = false;

window.addEventListener('mousedown', e => {
    isClicked = true;
});

window.addEventListener('mouseup', e => {
    if (isClicked == true) {
        isClicked = false;
    }
});

// Apply to all elements
for (var i = 0; i < pixels.length; i++) {

    // Click to change colors
    pixels[i].addEventListener('click', function() {
        colorizePixel(this);
    });

    // Drag to apply
    pixels[i].addEventListener('mousemove', function() {
        if (isClicked == true) {
            colorizePixel(this);
        }
    });
}
