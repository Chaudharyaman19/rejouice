// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform
//     ? "transform"
//     : "fixed",
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

function cursoreffect() {
  var page1content = document.querySelector(".page1-contant");
  var page1 = document.querySelector(".page2");
  var page2 = document.querySelector(".page3");
  var cursor = document.querySelector(".cursor");
  page1content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page2.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
  page1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
  page2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursoreffect();

function page2() {
  gsap.from(".elem", {
    y: 120, // Move the element from 120px down
    opacity: 0, // Start with an opacity of 0
    stagger: 0.2, // Stagger the animations for each element
    duration: 1, // Duration of each animation
    ease: "power2.inOut", // Use ease-in-out effect
    scrollTrigger: {
      trigger: ".page2", // Element that triggers the animation
      start: "top 40%", // Start when the top of .page2 is at 40% of the viewport
      end: "top 40%", // End when the top of .page2 is at 400% of the viewport
      scrub: 1, // Smooth scrubbing
    },
  });
}
function info() {
  gsap.fromTo(
    ".an",
    { y: 120, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".info",
        start: "top 40%",
        end: "top 40%",
        scrub: 1,
      },
    }
  );
}
info();
function page4() {
  gsap.fromTo(
    ".ele",
    { y: 120, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".page4",
        start: "top 40%",
        end: "top 60%", // Adjust as necessary
        scrub: 1,
      },
    }
  );
}
page4();
page2();
function loader() {
  var tl = gsap.timeline();
  tl.from(".loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  tl.to(".loader h3", {
    opacity: 0,
    x: -40,
    duration: 1,
    stagger: 0.1,
  });
  tl.to(".loader", {
    opacity: 0,
  });
  tl.to(".loader", {
    display: "none",
  });
}
loader();

function infoo() {
  gsap.fromTo(
    ".an",
    { y: 120, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".infoo",
        start: "top 40%",
        end: "top 60%", // Adjust as necessary
        scrub: 1,
      },
    }
  );
}
infoo();
function info2() {
  gsap.fromTo(
    ".ann",
    { y: 120, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".info2",
        start: "top 40%",
        end: "top 60%", // Adjust as necessary
        scrub: 1,
      },
    }
  );
}
info2();

function name4() {
  gsap.fromTo(
    ".elm",
    { y: -120, opacity: 0 }, // Starting scale for transition effect
    {
      y: 0,
      opacity: 1,
      scale: 1, // Scaling up as it animates
      stagger: 0.2,
      duration: 1.5,

      ease: "power1.out",
      scrollTrigger: {
        trigger: ".rejouice",
        start: "top 40%",
        end: "top 60%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    }
  );
}

name4();

// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector(".main").style.transform
//     ? "transform"
//     : "fixed",
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// function cursoreffect() {
//   const page1content = document.querySelector(".page1-contant");
//   const page1 = document.querySelector(".page2");
//   const page2 = document.querySelector(".page3");
//   const cursor = document.querySelector(".cursor");

//   [page1content, page1, page2].forEach((element) => {
//     element?.addEventListener("mousemove", (dets) => {
//       gsap.to(cursor, { x: dets.x, y: dets.y });
//     });
//     element?.addEventListener("mouseenter", () => {
//       gsap.to(cursor, { scale: 1, opacity: 1 });
//     });
//     element?.addEventListener("mouseleave", () => {
//       gsap.to(cursor, { scale: 0, opacity: 0 });
//     });
//   });
// }
// cursoreffect();

// function page2() {
//   gsap.from(".elem", {
//     y: 120,
//     opacity: 0,
//     stagger: 0.2,
//     duration: 1,
//     ease: "power2.inOut",
//     scrollTrigger: {
//       trigger: ".page2",
//       start: "top 40%",
//       end: "top 60%",
//       scrub: 1,
//       scroller: ".main",
//     },
//   });
// }

// function info() {
//   gsap.fromTo(
//     ".an",
//     { y: 120, opacity: 0 },
//     {
//       y: 0,
//       opacity: 1,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: ".info",
//         start: "top 40%",
//         end: "top 40%",
//         scrub: 1,
//         scroller: ".main",
//       },
//     }
//   );
// }
// info();
// function page4() {
//   gsap.fromTo(
//     ".ele",
//     { y: 120, opacity: 0 },
//     {
//       y: 0,
//       opacity: 1,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: ".page4",
//         start: "top 40%",
//         end: "top 60%", // Adjust as necessary
//         scrub: 1,
//         scroller: ".main",
//       },
//     }
//   );
// }
// page4();

// page2();

// // Loader Animation
// function loader() {
//   const tl = gsap.timeline();
//   tl.from(".loader h3", {
//     x: 40,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.1,
//   })
//     .to(".loader h3", {
//       opacity: 0,
//       x: -40,
//       duration: 1,
//       stagger: 0.1,
//     })
//     .to(".loader", { opacity: 0, duration: 0.5 })
//     .to(".loader", { display: "none" });
// }
// loader();
