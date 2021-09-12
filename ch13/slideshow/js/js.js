"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var slides = [
        { href: "images/1.jpg", title: "Image 1" },
        { href: "images/2.jpg", title: "Image 2" },
        { href: "images/3.jpg", title: "Image 3" }
    ];

    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

    evt.attach($("play_pause"), "click", slideshow.togglePlay);
    evt.attach($("change_speed"), "click", slideshow.changeSpeed);
    evt.attach($("change_speed"), "click", evt.preventDefault);
};