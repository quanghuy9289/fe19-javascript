"use strict";
const slideshow = {
  timer: null,
  nodes: { image: null, caption: null },
  img: { cache: [], counter: 0 },
  play: true,
  speed: 2000,
  loadImages: function (slides) {
    let image;
    for (const i in slides) {
      // Preload image, copy title properties, and save in array
      image = new Image();
      image.src = slides[i].href;
      image.title = slides[i].title;
      this.img.cache.push(image);
    }
    return this;
  },
  startSlideShow: function () {
    if (arguments.length === 2) {
      this.nodes.image = arguments[0];
      this.nodes.caption = arguments[1];
    }
    this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
    return this;
  },
  stopSlideShow: function () {
    clearInterval(this.timer);
    return this;
  },
  displayNextImage: function () {
    this.img.counter = ++this.img.counter % this.img.cache.length;
    var image = this.img.cache[this.img.counter];
    this.nodes.image.src = image.src;
    this.nodes.caption.firstChild.nodeValue = image.title;
  },
  setPlayText: function (a) {
    a.text = this.play ? "Resume" : "Pause";
    return this;
  },
  togglePlay: function (e) {
    if (slideshow.play) {
      slideshow.stopSlideShow().setPlayText(this);
    } else {
      slideshow.startSlideShow().setPlayText(this);
    }
    slideshow.play = !slideshow.play; //toggle play flag
    evt.preventDefault(e);
  },

  changeSpeed: function (e) {
    // code to change the slide show speed goes here
    const milliseconds = Number(
      prompt(
        `Current speed is ${slideshow.speed} millisecond\nEnter new speed in millisecond.`,
        "2000"
      )
    );

    slideshow.speed = milliseconds;

    slideshow.stopSlideShow().startSlideShow();
  },
};
