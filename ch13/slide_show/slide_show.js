"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

// var changeSpeed = function (e) {
//   // code to change the slide show speed goes here
//   evt.preventDefault(e);
//   var str = "Current speed is " + slideshow.speed + " milliseconds.\nPlease enter new slide show speed";
//   var milliseconds = prompt(str, "2000");

//   //If user choose cancel, millisecond = null
//   if (milliseconds == null) {
//     return;
//   }

//   milliseconds = parseFloat(milliseconds);
//   if (isNaN(milliseconds) || milliseconds < 0) {
//     alert("The Speed must be a number greater than or equal 0");
//   } else {
//     slideshow.speed = milliseconds;
//     slideshow.stopSlideShow().startSlideShow();
//   }
// };

window.onload = function () {
  var slides = [
    { href: "images/gear.jpg", title: "Fishing Gear" },
    { href: "images/plane.jpg", title: "Bush Plane" },
    { href: "images/release.jpg", title: "Catch and Release" },
    { href: "images/lunch.jpg", title: "Streamside Lunch" },
    { href: "images/dusk.jpg", title: "Day's End" },
  ];

  slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

  evt.attach($("play_pause"), "click", slideshow.togglePlay);
  evt.attach($("change_speed"), "click", slideshow.changeSpeed);
};