// Apply visibility to the content div on load with a fade in transition
window.addEventListener('load', function () {
    var content = document.getElementsByClassName('content')[0];
    content.classList.toggle('fade');
});