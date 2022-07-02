// Fades off-screen disc tiles while scrolling

function fadeOnScroll() {
    if (!window.AnimationEvent) { return } // IE

    for (var i = 0; i < musicTiles.length; i++) {
        var elem = musicTiles[i];
        var scrollThreshold = 350;
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

// Assign links on music tile divs based on tile id
// tile id MUST equal '*'.html filename
function assignLinks() {
    musicTiles.forEach(tile => {
        tile.addEventListener('click', event => {
            var link = '/music/' + tile.id;
            window.location.href = link;
        });
    });
}

// Must select elements before window loads
let musicTiles = document.querySelectorAll('.music-tile');

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('resize', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

assignLinks();
