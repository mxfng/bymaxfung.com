// Toggle Fade Out
$(window).on("load", function(){
    // The overlay is initially visible, we need to hide it!
    $("#loaderOverlay").addClass("hide"); // CSS3 will animate it nicely
 });

// Toggle Fade In
$(document).on("click", "a", function(evt) {
    evt.preventDefault();
    var href = $(this).attr("href");
    $("#loaderOverlay").removeClass("hide");
    setTimeout(function() {
       window.location = href;
    }, 2100);
  });