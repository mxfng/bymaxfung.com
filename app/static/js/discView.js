// Handles all JavaScript needed for Disc View pages
function setupDiscView(backgroundColor, textColor) {
    var content = document.getElementsByClassName('content')[0];
    content.classList.add('tight');

    discViewColors(backgroundColor, textColor);

    function toggleOverlay() {
        var overlay = document.getElementById("overlay")
        if (overlay.style.display == "block") {
            document.getElementById("overlay").style.display = "none";
        } else {
            overlay.style.display = "block";
        }
    }

    var linkPhotos = document.getElementById("link-photos");
    //linkPhotos.addEventListener("click", toggleOverlay())
}
