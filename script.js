'use strict';

var button = document.getElementById('butt');

function modifyText () {

    if (clicks > 5 && clicks < 10) {
        button.firstChild.nodeValue = "Faster!";
    } else if (clicks >= 10 && clicks < 20) {
        button.firstChild.nodeValue = "Oh Yeah!";
    } else if (clicks >= 20 && clicks < 25) {
        button.firstChild.nodeValue = "ALMOST!!";
    } else if (clicks >= 25 && clicks < 30) {
        button.firstChild.nodeValue = "Uuugh!!";
    } else if (clicks >= 30) {
        button.firstChild.nodeValue = "I want a baby by you!";
    } else {
        button.firstChild.nodeValue = "Click Me!";
    }
    console.log('clicked');
}
button.addEventListener('click', modifyText);


var clicks = 0;

var timer = setTimeout(resetClicks, 350);

function onClick() {
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
    clearTimeout(timer);
    timer = setTimeout(resetClicks, 350);


}
function resetClicks () {
    return clicks = 0;
}

