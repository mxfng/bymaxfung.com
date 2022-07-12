// Handles all JavaScript needed for Disc View pages
function setupDiscView(backgroundColor, textColor) {
    discViewColors(backgroundColor, textColor);
    setupDiscAnimations();
}

// Transitions page colors for disc view
function discViewColors(backgroundColor, textColor) {
    // Elements
    var headerSection = document.getElementsByClassName('header-section')[0];
    var discContent = document.getElementById('disc-content');
    var mobileNavSection = document.getElementsByClassName('navbar-collapse')[0];
    var backButton = document.getElementById('back-button');

    function addTransition(elements) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('disc-color-transition');
        }
    }

    addTransition([document.body, headerSection, discContent, mobileNavSection, backButton]);

    // Background Color
    document.body.style.background = backgroundColor;
    backButton.style.background = textColor;

    // Text Color
    document.body.style.color = textColor;
    backButton.style.color = backgroundColor;
};

// Disc Art animation, prompt, and positioning
function setupDiscAnimations() {
    var discArt = document.getElementById('disc-art');
    var discArtImg = document.getElementsByClassName('disc-art-front')[0];
    var discArtScene = document.getElementById('disc-art-scene');
    var discArtPrompt = document.getElementById('flip-prompt');
    
    // Monitor mouse hovering state to show prompt after disc flip
    var isMouseHover = false;
    discArtScene.addEventListener('mouseover', function() { isMouseHover = true; });
    discArtScene.addEventListener('mouseout', function() { isMouseHover = false; });
    
    // Peek (front)
    function togglePeek() {
        discArt.classList.toggle('is-peeking');
        discArtPrompt.classList.toggle('show-prompt');
    }
    
    // Peek (back)
    function togglePeekWhileFlipped() {
        discArt.classList.toggle('is-peeking-while-flipped');
        discArtPrompt.classList.toggle('show-prompt');
    }
    
    function resetPeek() {
        if (window.innerWidth < 992) { return }
    
        if (discArt.classList.contains('is-peeking')) {
            discArt.classList.toggle('is-peeking');
            discArtPrompt.classList.toggle('show-prompt');
        } else if (discArt.classList.contains('is-peeking-while-flipped')) {
            discArt.classList.toggle('is-peeking-while-flipped');
            discArtPrompt.classList.toggle('show-prompt');
        }
    }
    
    function enablePeek() {
        if (window.innerWidth < 992) { return }
    
        discArt.onmouseover = togglePeek;
        discArt.onmouseleave = resetPeek;
    
        if (isMouseHover) {
            togglePeek();
        }
    }
    
    function enablePeekWhileFlipped() {
        if (window.innerWidth < 992) { return }
    
        discArt.onmouseover = togglePeekWhileFlipped;
        discArt.onmouseleave = resetPeek;

        if (isMouseHover) {
            togglePeekWhileFlipped();
        }
    }
    
    function disablePeek() {
        discArt.onmouseover = null;
        discArt.onmouseleave = null;
    }
    
    // Flip disc art on click
    function enableClick() {
        discArtScene.addEventListener('click', function() {
            resetPeek();
            disablePeek();
        
            discArt.classList.toggle('is-flipped');
        
            if (!discArt.classList.contains('is-flipped')) {
                setTimeout(enablePeek, 800);
            } else {
                setTimeout(enablePeekWhileFlipped, 800);
            }
        });    
    }
    
    // A "peek" animatino to suggest to the user to flip the disc
    function suggestPeek() {
        disablePeek();
        setTimeout(togglePeek, 1200);
        setTimeout(togglePeek, 2400);
        setTimeout(function() {
            if (window.innerWidth >= 992) {
                enablePeek()    // Disabled on mobile
            }
            enableClick()     
        }, 2400);
    }
    
    // Hack: adjust disc art div size by window
    // Caused by absolute positioning of the div to allow flip animation
    function handleWindowSizing() {
        if (window.innerWidth < 1200) {
            discArt.style.height = discArtImg.clientHeight.toString() + "px";
        }
    }
    
    window.addEventListener('resize', handleWindowSizing);
    window.addEventListener('load', handleWindowSizing);
    window.addEventListener('load', suggestPeek);
}
