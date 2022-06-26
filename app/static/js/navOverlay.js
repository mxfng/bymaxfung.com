// Toggle Icon
function toggleNavIcon(icon) {
    icon.classList.toggle("x-lg");
}

$(function() {
  
    $('#navbarMenu')
        .on('shown.bs.collapse', function() {
            $('#toggler-hamburger').addClass('hidden');
            $('#toggler-close').removeClass('hidden');    
        })
        .on('hidden.bs.collapse', function() {
            $('#toggler-hamburger').removeClass('hidden');
            $('#toggler-close').addClass('hidden');        
    });   
});