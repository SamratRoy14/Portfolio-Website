/* To Add Smooth Scroll Feature */

// Fetching all the anchor tags under navigation
var NavAnchorTags = document.querySelectorAll('.nav-menu a');

// Adding Event listeners to all the anchor tags on click
for (var i = 0; i < NavAnchorTags.length; i++) {
    NavAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault(); // Preventing the default behaviour

        // fetching the id of the clicked section
        var targetSectionId = this.textContent.trim().toLowerCase();
        // fetching the clicked section
        var targetSection = document.getElementById(targetSectionId);

        var interval = setInterval(function () {
            // Finding the coordinates of the target section
            var targetPos = targetSection.getBoundingClientRect();
            if (targetPos.top <= 0) {
                // Stop scrolling when reached the target
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

/*

// Another way to add smooth scroll feature 

// Fetching all the anchor tags under navigation
var NavAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
// Adding Event listeners to all the anchor tags on click
for (var i = 0; i < NavAnchorTags.length; i++) 
{
    NavAnchorTags[i].addEventListener('click', function (event) 
    {
        event.preventDefault(); // Preventing the default behaviour

        // fetching the id of the clicked section
        var targetSectionId = this.textContent.trim().toLowerCase();
        // fetching the clicked section
        var targetSection = document.getElementById(targetSectionId);

        // There are two ways to call a function with argument in setInterval function

        // interval = setInterval(setVerticalScroll, 20, targetSection); // 1st way

        // 2nd way
        interval = setInterval(function() {
            setVerticalScroll(targetSection);
        }, 20);

    });
}

function setVerticalScroll(targetSection) 
{
    // Finding the coordinates of the target section
    var targetPos = targetSection.getBoundingClientRect();
    if (targetPos.top <= 0) 
    {
        // Stop scrolling when reached the target
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}
*/


/* To add CSS skill bar animation */

var skillContainer = document.getElementById('skill-container');
// Fetching all The progress bars
var progressBar = document.querySelectorAll('.skill-display > div');
var animationDone = false; 

// On every scroll checking if the skill section is visible or not
window.addEventListener('scroll', ifVisible); 

// Initialise the progress bar with 0% width
function initialiseBar() {
    for (let bar of progressBar) {
        bar.style.width = '0%';
    }
}
initialiseBar();

// Fill the bar with animation
function fillBars() {
    for(let bar of progressBar) {
        var currentWidth = 0;
        var targetWidth = bar.getAttribute('data-bar-width'); // fetching the progress width using data value 
        var interval = setInterval(function() {
            // When reached desired width stop the interval
            if(currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },30);
    }
}

// If The Skill container is visible or not
function ifVisible() {

    var coordinates = skillContainer.getBoundingClientRect();
    // If the skill section is visible triggering the animation only once
    if(!animationDone && coordinates.top < window.innerHeight) {
        animationDone = true;
        fillBars();
    }
    // If we go to the top of the page then again initialising the bars
    else if(coordinates.top >= window.innerHeight) {
        animationDone =false;
        initialiseBar();
    }
}