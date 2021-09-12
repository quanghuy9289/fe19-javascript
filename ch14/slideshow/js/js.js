"use strict";
var $ = function(id) { return document.getElementById(id); };

var slideshow = createSlideShow();

window.onload = function() {
    var slides = [
        { href: "1.jpg", title: "Image 1" },
        { href: "2.jpg", title: "Image 2" },
        { href: "3.jpg", title: "Image 3" }
    ];

    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

    $("play_pause").onclick = slideshow.createToggleHandler();
};