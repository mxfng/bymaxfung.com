// Transitions page colors for disc view
function discViewColors(backgroundColor, textColor) {
    // Elements
    var headerSection = document.getElementsByClassName('header-section')[0];
    var discContent = document.getElementById('disc-content');
    var mobileNavSection = document.getElementsByClassName('navbar-collapse')[0];
    var backButton = document.getElementById('back-button');
    var footerSection = document.getElementsByClassName('footer')[0];

    addTransition([document.body, headerSection, discContent, mobileNavSection, backButton, footerSection]);

    // Background Color
    document.body.style.background = backgroundColor;
    headerSection.style.background = backgroundColor;
    backButton.style.background = textColor;

    // Text Color
    document.body.style.color = textColor;
    backButton.style.color = backgroundColor;

    // Header and Footer Opacity for Color Matching
    headerSection.style.opacity = 0.6;
    footerSection.style.opacity = 0.6;
    
    // Special case for `navbar-collapse`
    setTimeout(function() {
        mobileNavSection.style.background = backgroundColor; // Delays nav coloration
    }, 1000)

    function addTransition(elements) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('disc-color-transition');
        }
    }
};