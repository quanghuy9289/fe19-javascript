"use strict";
const $ = function (id) {
  return document.getElementById(id);
};

// create the slideshow object
const slideshow = createSlideshow();

const changeSpeed = function () {
  const msg = "Please enter a new speed in milliseconds (200 min).";
  const milliseconds = parseInt(prompt(msg, "2000"));
  // call slideshow object methods here
  slideshow.getSpeed(milliseconds).startSlideShow();
};

window.onload = function () {
  const slides = [
    { href: "gear.jpg", title: "Fishing Gear" },
    { href: "plane.jpg", title: "Bush Plane" },
    { href: "release.jpg", title: "Catch and Release" },
    { href: "lunch.jpg", title: "Streamside Lunch" },
    { href: "dusk.jpg", title: "Day's End" },
  ];
  slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

  $("play_pause").onclick = slideshow.createToggleHandler();
  $("change_speed").onclick = changeSpeed;
};
