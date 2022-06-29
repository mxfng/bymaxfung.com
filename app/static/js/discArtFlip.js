// Disc Art animation, prompt, and positioning

var discArt = document.getElementById('disc-art');
var discArtImg = document.getElementsByClassName('disc-art-front')[0];
var discArtScene = document.getElementById('disc-art-scene');
var discArtPrompt = document.getElementById('flip-prompt');

// Reveal prompt to flip disk art

var isMouseHover = false;
discArtScene.addEventListener('mouseover', function() { isMouseHover = true; });
discArtScene.addEventListener('mouseout', function() { isMouseHover = false; });

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
    if (window.innerWidth < 992) { return }

    if (discArt.classList.contains('is-peeking')) {
        discArt.classList.toggle('is-peeking');
        discArtPrompt.classList.toggle('show-prompt');
    } else if (discArt.classList.contains('is-peeking-while-flipped')) {
        discArt.classList.toggle('is-peeking-while-flipped');
        discArtPrompt.classList.toggle('show-prompt');
    }
}

function enablePeek() {
    if (window.innerWidth < 992) { return }

    discArt.onmouseover = togglePeek;
    discArt.onmouseleave = resetPeek;

    if (isMouseHover) {
        togglePeek();
    }
}

function enablePeekWhileFlipped() {
    if (window.innerWidth < 992) { return }

    discArt.onmouseover = togglePeekWhileFlipped;
    discArt.onmouseleave = resetPeek;
    if (isMouseHover) {
        togglePeekWhileFlipped();
    }
}

function disablePeek() {
    discArt.onmouseover = null;
    discArt.onmouseleave = null;
}

enablePeek();

// Peek (back)

function enablePeekWhileFlipped() {
    if (window.innerWidth < 992) { return }

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

// Hint to flip on mobile
function suggestPeekMobile() {
    if (window.innerWidth < 992) {
        disablePeek();
        setTimeout(togglePeek, 1200);
        setTimeout(togglePeek, 2800);
    }
}

window.addEventListener('DOMContentLoaded', suggestPeekMobile);

// Adjust disc art size by window
function handleWindowSizing() {
    if (window.innerWidth < 1200) {
        discArt.style.height = discArtImg.clientHeight.toString() + "px";
    }
}

window.addEventListener('resize', function () {
    handleWindowSizing();
});

window.addEventListener('load', handleWindowSizing);
