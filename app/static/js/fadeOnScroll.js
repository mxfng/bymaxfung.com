// Fades off-screen elements while scrolling
let elementsArray = document.querySelectorAll(".music-tile");
console.log(elementsArray);

window.addEventListener('scroll', fadeOnScroll );
window.addEventListener('resize', fadeOnScroll );
document.addEventListener('DOMContentLoaded', fadeOnScroll );

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