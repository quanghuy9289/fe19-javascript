"use strict";
var $ = function(id) { return document.getElementById(id); };

// create the slideshow object 
var slideshow = createSlideshow();

var changeSpeed = function() {
    var msg = "Current speed is " + slideshow.getSpeed() + " " + "milliseconds.\nPlease enter new slide show speed (200 min).";
    var milliseconds = parseInt(prompt(msg, "2000"));
    if (isNaN(milliseconds) || milliseconds < 2000) {
        alert("The Speed must be a number greater than or equal 2000");
    } else {
        slideshow.setSpeed(milliseconds).startSlideShow();
    }
    // call slideshow object methods here
};

window.onload = function() {
    var slides = [
        { href: "gear.jpg", title: "Fishing Gear" },
        { href: "plane.jpg", title: "Bush Plane" },
        { href: "release.jpg", title: "Catch and Release" },
        { href: "lunch.jpg", title: "Streamside Lunch" },
        { href: "dusk.jpg", title: "Day's End" }
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

    $("play_pause").onclick = slideshow.createToggleHandler();
    $("change_speed").onclick = changeSpeed;
};