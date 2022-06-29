// Disc Art animation, prompt, and positioning

var discArt = document.getElementById('disc-art');
var discArtImg = document.getElementsByClassName('disc-art-front')[0];
var discArtScene = document.getElementById('disc-art-scene');
var discArtPrompt = document.getElementById('flip-prompt');

// Reveal prompt to flip disk art

var isMouseHover = false;
discArtScene.addEventListener('mouseover', function() { console.log('isMouseHover true'); isMouseHover = true; });
discArtScene.addEventListener('mouseout', function() { console.log('isMouseHover false'); isMouseHover = false; });

// Peek (front)
function togglePeek() {
    discArt.classList.toggle('is-peeking');
    discArtPrompt.classList.toggle('show-prompt');
}

// Peek (back)
function togglePeekWhileFlipped() {
    discArt.classList.toggle('is-peeking-while-flipped');
    discArtPrompt.classList.toggle('show-prompt');
}

function resetPeek() {
    if (discArt.classList.contains('is-peeking')) {
        discArt.classList.toggle('is-peeking');
        discArtPrompt.classList.toggle('show-prompt');
    } else if (discArt.classList.contains('is-peeking-while-flipped')) {
        discArt.classList.toggle('is-peeking-while-flipped');
        discArtPrompt.classList.toggle('show-prompt');
    }
}

function enablePeek() {
    discArt.onmouseover = togglePeek;
    discArt.onmouseleave = resetPeek;
    if (isMouseHover) {
        togglePeek();
    }
}

function enablePeekWhileFlipped() {
    discArt.onmouseover = togglePeekWhileFlipped;
    discArt.onmouseleave = resetPeek;
    if (isMouseHover) {
        togglePeekWhileFlipped();
    }
}

function disablePeek() {
    discArt.onmouseover = null;
}

enablePeek();

// Peek (back)

function enablePeekWhileFlipped() {
    discArt.onmouseover = togglePeekWhileFlipped;
    discArt.onmouseleave = resetPeek;
}

// Flip disc art on click
discArt.addEventListener('click', function() {
    resetPeek();
    disablePeek();

    discArt.classList.toggle('is-flipped');

    if (!discArt.classList.contains('is-flipped')) {
        setTimeout(enablePeek, 1000);
    } else {
        setTimeout(enablePeekWhileFlipped, 1000);
    }
});

// Adjust disc art size by window
function scaleDiscArt() {
    if (window.innerWidth < 1200) {
        discArt.style.height = discArtImg.clientHeight.toString() + "px";
    }
}

window.addEventListener('resize', function () {
    scaleDiscArt();
});

discArtImg.addEventListener('load', scaleDiscArt);
window.addEventListener('DOMContentLoaded', scaleDiscArt);
