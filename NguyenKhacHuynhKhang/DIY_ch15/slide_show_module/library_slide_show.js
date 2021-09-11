"use strict";
var myapp = myapp || {};

myapp.slideshow = (function() {
    var timer, play = true;
    var nodes = { image: null, caption: null };
    var img = { cache: [], counter: 0 };
    
    var stopSlideShow = function() { clearInterval( timer ); };
    var displayNextImage = function() {
        img.counter = ++img.counter % img.cache.length;
        var image = img.cache[img.counter];
        nodes.image.src = image.src;
        nodes.caption.firstChild.nodeValue = image.title;
    };
    var setPlayText = function(btn) {
        btn.value = (play)? "Resume": "Pause";
    };
    return {
        speed: 2000, 
        loadImages: function(slides) {
            var image;
            for ( var i = 0; i < slides.length; i++ ) {
                image = new Image();
                image.src = "images/" + slides[i].href;
                image.title = slides[i].title;
                img.cache.push( image );
            }
            return this;
        },
        startSlideShow: function() {
            if (arguments.length === 2) { 
                nodes.image = arguments[0]; 
                nodes.caption = arguments[1];
            }
            stopSlideShow(); 
            timer = setInterval(displayNextImage, this.speed);
            return this;
        },
        createToggleHandler: function() {
            var that = this;
            return function() {
                if ( play ) { stopSlideShow(); } else { that.startSlideShow(); }
                setPlayText(this);
                play = ! play; 
            };
        }
    };
})();