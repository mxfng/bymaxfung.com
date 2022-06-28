// Flips disc art to reveal image on other side
var discArt = document.getElementById('disc-art');
var discArtImg = document.getElementsByClassName('disc-art-front')[0];

// Flip disc art on click
discArt.addEventListener('click', function() {
    console.log('Disc art flipped.');
    discArt.classList.toggle('is-flipped');
});

// Adjust disc art size by window
function scaleDiscArt() {
    if (window.innerWidth < 1200) {
        var discArtImg = document.getElementsByClassName('disc-art-front')[0];
        discArt.style.height = discArtImg.clientHeight.toString() + "px";
    }
}

window.addEventListener('resize', function () {
    scaleDiscArt();
});

discArtImg.addEventListener('load', scaleDiscArt);
window.addEventListener('DOMContentLoaded', scaleDiscArt);
