// Fades off-screen elements while scrolling
let elementsArray = document.querySelectorAll(".music-tile");

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('resize', fadeOnScroll);

function fadeOnScroll() {
    if (!window.AnimationEvent) { return; } // IE

    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var scrollThreshold = 350
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + scrollThreshold;
        var distOutView = elem.getBoundingClientRect().bottom - scrollThreshold;
        if (distInView < 0) {
            elem.classList.add("inView");
        }
        if (distOutView < 0 || distInView > 0) {
            elem.classList.remove("inView");
        }
    }
}

document.addEventListener('DOMContentLoaded', fadeOnScroll() );

// Hide second element on Mobile page load
var next_elem = elementsArray[1];
if (window.innerWidth < 768 && window.innerHeight < 914) {
    next_elem.classList.remove("inView");
}