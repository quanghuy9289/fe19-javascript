"use strict";
var $ = function(id) { return document.getElementById(id); };

// var changeSpeed = function(e) {
//     // code to change the slide show speed goes here;
//   var currentSpeed = slideshow.speed;
//   var milliseconds = prompt("Current speed is " + currentSpeed + "\nPlease enter a new speed in milliseconds");
//   slideshow.speed = milliseconds;
//   if (isNaN(milliseconds) || milliseconds == null) {
//     alert("Please enter a valid number")
//   }
//   slideshow.stopSlideShow().startSlideShow();
//   evt.preventDefault(e);
// };

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