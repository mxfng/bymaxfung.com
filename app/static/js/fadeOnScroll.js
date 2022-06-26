let elementsArray = document.querySelectorAll(".music-tile");
console.log(elementsArray);

window.addEventListener('scroll', fadeOnScrollUp );
window.addEventListener('resize', fadeOnScrollUp ); 

function fadeOnScrollUp() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 250;
        var distOutView = elem.getBoundingClientRect().bottom - 250;
        if (distInView < 0) {
            elem.classList.add("inView");
        }
        if (distOutView < 0 || distInView > 0) {
            elem.classList.remove("inView");
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fadeOnScrollUp();
});