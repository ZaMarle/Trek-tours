//on start
textAnimation();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// change the slider

console.clear();

var slideDuration = 9000;
var easeSlideDuration = 0.5;
var easeTextDuration = 2;
var slides = document.querySelectorAll(".slide");
var numSlides = slides.length;
var i = 1;

// infinite loop through the slides
// delay between slides = slideDuration
setInterval(function() {
  changeSlide(i);

  if (i < 3) {
    i++;
  } else {
    i = 0;
  }
}, slideDuration);

//Checks where in the cycle the slide is to determine what slide to show next
function changeSlide(i) {
  //0;
  // if i == 0 then / deactivate slide 3 / activate slide 0
  if (i == 0) {
    activateSlide(i);
    deactivateSlide(3);
  }

  // if i == 1,2,3 then / deactivate i-1 / activate i
  if (i > 0) {
    activateSlide(i);
    deactivateSlide(i - 1);
  }
}

//functions-----------------------------------------------------------------
function activateSlide(i) {
  slides[i].className = ("class", "slide ease-in");
  easeIn();
  textAnimation();
}

function deactivateSlide(i) {
  //ease out for y seconds
  slides[i].className = ("class", "slide ease-out");
  easeOut();

  //wait y seconds from this funtion being called then hide
  setTimeout(function() {
    slides[i].className = ("class", "slide reset");
    resetSlide();
    slides[i].className = ("class", "slide hidden");
  }, easeSlideDuration * 1000);
}

//Animations----------------------------------------------------------------
function textAnimation() {
  var tl = gsap.timeline();

  tl.to(".box-1-card", { duration: easeSlideDuration + 0.5 });
  tl.fromTo(
    ".box-1-card",
    {
      y: "40%",
      opacity: 0
    },
    { duration: 1, ease: "expo", y: 0, opacity: 1 }
  );
  tl.to(".box-1-card", { duration: 6.2 });
  tl.to(".box-1-card", {
    opacity: 0
  });
}

// moves the slide into the window
function easeIn() {
  gsap.fromTo(
    ".ease-in",
    { x: "100%" },
    { duration: easeSlideDuration, ease: "none", x: 0 }
  );
}

// moves the slide out of the window
function easeOut() {
  gsap.fromTo(
    ".ease-out",
    { x: 0 },
    { duration: easeSlideDuration, ease: "none", x: "-100%" }
  );
}

// Resets the slides position after it has faded out.
function resetSlide() {
  gsap.to(".reset", { duration: 1, x: "100%" });
}

//Scroll animation--------------------------------------------------------------
// Scroll Magic for the nav bar
var controller1 = new ScrollMagic.Controller();
var t1 = new TimelineMax();

t1.to(".nav", {
  y: -50,
  height: 100
}).to(
  ".nav-icon",
  {
    scale: 0.3,
    x: -90
  },
  0
);

t1.to(
  ".nav-menu-item a",
  {
    color: "#000"
  },
  2
);
t1.to(
  ".nav-menu-item i",
  {
    color: "#000"
  },
  2
);

t1.to(
  ".nav",
  {
    "background-color": "#fff"
  },
  2
);

var scene = new ScrollMagic.Scene({
  triggerElement: ".Box-1",
  duration: 100,
  triggerHook: 0.25
})
  .setTween(t1)
  .addTo(controller1);

// Scroll Magic for the photo gallery
var controller2 = new ScrollMagic.Controller();
var t2 = new TimelineMax();
t2.staggerFrom(".img-card", 1.25, {
  scale: 0,
  ease: Elastic.easeOut,
  stagger: {
    from: "center",
    amount: 0.25
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".box-5",
  triggerHook: 0.5,
  offset: -100
})
  .setTween(t2)
  .addTo(controller2);

//TODO
