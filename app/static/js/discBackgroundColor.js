// Transitions page color for disc view
function discBackgroundColor(color) {
    backgroundColor = color;
    var headerSection = document.getElementsByClassName('header-section')[0];
    document.body.classList.add('disc-background-fade');
    headerSection.classList.add('disc-background-fade');
    document.body.style.background = backgroundColor;
    headerSection.style.background = backgroundColor;
};