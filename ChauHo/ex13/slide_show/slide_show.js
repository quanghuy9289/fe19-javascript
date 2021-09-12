"use strict";
const $ = function (id) {
  return document.getElementById(id);
};
// const changeSpeed = function (e) {
//   // code to change the slide show speed goes here
//   const milliseconds = Number(
//     prompt(
//       `Current speed is ${slideshow.speed} millisecond\nEnter new speed in millisecond.`,
//       "2000"
//     )
//   );

//   slideshow.speed = milliseconds;

//   slideshow.stopSlideShow().startSlideShow();
// };

window.onload = function () {
  const slides = [
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
