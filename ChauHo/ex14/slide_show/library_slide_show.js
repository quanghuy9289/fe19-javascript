"use strict";
const createSlideshow = function () {
  //private variables and functions
  let timer,
    play = true,
    speed = 2000;
  const nodes = { image: null, caption: null };
  const img = { cache: [], counter: 0 };

  const stopSlideShow = function () {
    clearInterval(timer);
  };
  const displayNextImage = function () {
    img.counter = ++img.counter % img.cache.length;
    const image = img.cache[img.counter];
    nodes.image.src = image.src;
    nodes.caption.firstChild.nodeValue = image.title;
  };
  const setPlayText = function (btn) {
    btn.value = play ? "Resume" : "Pause";
  };
  //public methods that have access to private variables and functions
  return {
    loadImages: function (slides) {
      let image;
      for (let i = 0; i < slides.length; i++) {
        image = new Image();
        image.src = "images/" + slides[i].href;
        image.title = slides[i].title;
        img.cache.push(image);
      }
      return this;
    },
    startSlideShow: function () {
      if (arguments.length === 2) {
        nodes.image = arguments[0];
        nodes.caption = arguments[1];
      }
      timer = setInterval(displayNextImage, speed);
      return this;
    },
    createToggleHandler: function () {
      const that = this;
      // closure to be used as the click event handler
      return function () {
        // 'this' is the clicked button; 'me' is the object literal
        if (play) {
          stopSlideShow();
        } else {
          that.startSlideShow();
        }
        setPlayText(this);
        play = !play; //toggle play flag
      };
    },
    getSpeed: function (newSpeed) {
      console.log(this);

      if (!isNaN(newSpeed) && newSpeed >= 200) {
        stopSlideShow();
        speed = newSpeed;

        // this.startSlideShow();
      }

      return this;
    },
  };
};
