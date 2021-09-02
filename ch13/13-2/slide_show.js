"use strict";
var $ = function(id) { return document.getElementById(id); };

/*
var changeSpeed = function(e) {
    // code to change the slide show speed goes here
	// var milliseconds = prompt("Enter new slide show speed", "2000");
    var milliseconds = prompt("Current speed is: " + slideshow.speed + "\nPlease enter new speed of slide show in milliseconds:", slideshow.speed);
        if (milliseconds == null) {
            return;
        }
        milliseconds = parseFloat(milliseconds);
        if (isNaN(milliseconds) || milliseconds < 0) {
            alert("Please enter a number must be greater than or equal to 0");
        } else {
            slideshow.speed = milliseconds;
            slideshow.stopSlideShow().startSlideShow();
        }
        evt.preventDefault(e);
};
*/

window.onload = function() {  
     var slides = [
        {href:"images/gear.jpg", title:"Fishing Gear"}, 
        {href:"images/plane.jpg", title:"Bush Plane"},
        {href:"images/release.jpg", title:"Catch and Release"},
        {href:"images/lunch.jpg", title:"Streamside Lunch"},
        {href:"images/dusk.jpg", title:"Day's End"}
    ];
	
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    
    evt.attach($("play_pause"), "click", slideshow.togglePlay);
    evt.attach($("change_speed"), "click", slideshow.changeSpeed); 
};
