// Assign links on music tile divs based on tile id
// tile id MUST equal '*'.html filename
document.querySelectorAll('.music-tile').forEach(tile => {
    tile.addEventListener('click', event => {
        console.log(event)
        var link = '/music/' + tile.id
        window.location.href = link
    });
});