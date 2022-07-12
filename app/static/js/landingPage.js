var logo = document.getElementById("logo");

var a_l = document.getElementById("left-link");
var left_half = document.getElementById("left-half");
var left_link = document.getElementById("left-link");

var a_r = document.getElementById("right-link");
var right_half = document.getElementById("right-half");
var right_link = document.getElementById("right-link");

function slideLeftFromCenter() {
    logo.classList.toggle("left");
    left_half.classList.toggle("animateTo");
    right_half.classList.toggle("animateSquish");
    right_link.classList.toggle("invisible");
    left_link.classList.toggle("invisible");
}

function slideRightFromCenter() {
    logo.classList.toggle("right");
    right_half.classList.toggle("animateTo");
    left_half.classList.toggle("animateSquish");
    right_link.classList.toggle("invisible");
    left_link.classList.toggle("invisible");
}

window.onload = function() {

    a_l.onclick = function() {
        slideLeftFromCenter();
        setTimeout(() => {
            window.location.href = "/music";
        }, 700);
        return false;
    }

    a_r.onclick = function() {
        slideRightFromCenter();
        setTimeout(() => {
            window.location.href = "/software";
        }, 700);
        return false;
    }
}

window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted;
    if ( historyTraversal ) {
      window.location.reload();
    }
});
