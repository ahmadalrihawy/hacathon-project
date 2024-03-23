

document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline({ delay: 0 });
  tl.to(".col", {
    top: 0,
    duration: 3,
    ease: "power4.inOut",
  });
  tl.to(
    ".c-1 .item", // Corrected class name here
    {
      top: 0,
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut",
    },
    "-=2"
  );
  tl.to(
    ".c-2 .item", // Corrected class name here
    {
      top: 0,
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut",
    },
    "-=4"
  );
  tl.to(
    ".c-3 .item", // Corrected class name here
    {
      top: 0,
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut",
    },
    "-=4"
  );
  tl.to(
    ".c-4 .item", // Corrected class name here
    {
      top: 0,
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut",
    },
    "-=4"
  );
  tl.to(
    ".c-5 .item", // Corrected class name here
    {
      top: 0,
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut",
    },
    "-=4"
  );
  tl.to(
    ".container",
    {
      scale: 5.37,
      duration: 4,
      ease: "power4.inOut",
    },
    "-=2"
  );

  tl.to(".nav-item a, .title-en p, .slide-num p", {
    top: 0,
    stagger: 0.075,
    duration: 1,
    ease: "power3.out",
  });
  tl.to(
    ".title-ar p",
    {
      top: -50,
      stagger: 0.075,
      duration: 1,
      ease: "power3.out",
    },
    "-=1.5"
  );
  tl.to(
    ".thumbnail .item",
    {
      top: 0,
      stagger: 0.075,
      duration: 1,
      ease: "power3.out",
    },
    "-=1.5"
  );
  let container = document.querySelector(".container");
  let carousel = document.querySelector(".carousel");
  let grapper = document.querySelector(".grapper");
  setTimeout(() => {
    container.style.display = "none";                            
    grapper.style.display = "none";                            
    carousel.style.display = "block";
  }, 6500);

  //step 1: get DOM
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");

  let carouselDom = document.querySelector(".carousel");
  let SliderDom = carouselDom.querySelector(".carousel .list");
  let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
  let timeDom = document.querySelector(".carousel .time");
  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let isTransitioning = false; // Variable to track transition state

  nextDom.onclick = function () {
    if (!isTransitioning) {
      showSlider("next");
    }
  };

  prevDom.onclick = function () {
    if (!isTransitioning) {
      showSlider("prev");
    }
  };
  let runTimeOut;

  function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );



    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
      let currentSliderItem = SliderItemsDom[1]; // Assuming the second item is always visible after transition

      // Get the data attributes from the current slider item
      let dataPen = currentSliderItem.getAttribute("data-Pen");
      let dataPar = currentSliderItem.getAttribute("data-Par");
      // Update the text content of the title elements
      document.querySelector(".title-ar p").textContent = dataPar;
      document.querySelector(".title-en p").textContent = dataPen;

      if (dataPen == "SAUDI ARABIA") {
        document.querySelector(".title-en p").style.color = "orange";
        document.querySelector(".title-ar p").style.webkitTextStrokeColor = "orange"
          "orange";
      }
      if (dataPen == "PALESTINE") {
        document.querySelector(".title-en p").style.color = "#ffd588";
        document.querySelector(".title-ar p").style.webkitTextStrokeColor = "#ffd588"
          "#ffd588";
      }
      if (dataPen == "EGYPT") {
        document.querySelector(".title-en p").style.color = "#fdf6e2";
        document.querySelector(".title-ar p").style.webkitTextStrokeColor = "#fdf6e2"
          "#fdf6e2";
      }
      if (dataPen == "UNITED ARAB EMIRATS") {
        document.querySelector(".title-en p").style.color = "#9c2677";
        document.querySelector(".title-ar p").style.webkitTextStrokeColor = "#9c2677"
          "#fdf6e2";
      }
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
      let currentSliderItem = SliderItemsDom[0 - 1]; // Assuming the second item is always visible after transition

      console.log(currentSliderItem);
    }
    isTransitioning = true; // Set transitioning state
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
      isTransitioning = false; // Reset transitioning state
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }
});


// window.onscroll = handleScroll


function handleScroll(status) {
  console.log(window.scrollY)
  var reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.reveal',
    start: '-200% center',
    end: '400% center',
    scrub: true,
    markers: false
  }
});

// Adjusted stagger values to make both animations start at the same time
tl2.from('.reveal', {
  y: 30,
  opacity: 0,
  stagger: {
    amount: 0, // No stagger for the initial animation
    each: 0.075 // Stagger for subsequent elements (if any)
  },
  duration: .5,
  ease: "power3.out",
});

tl2.from('.line', {
  width: 0,
  stagger: {
    amount: 0, // No stagger for the initial animation
    each: 0.075 // Stagger for subsequent elements (if any)
  },
  // duration: 1.5,
  ease: "power3.out",
}, "-=0.5");

const cards = document.querySelectorAll('.card');

function rotateToMouse(e) {
  const bounds = this.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.left;
  const topY = mouseY - bounds.top;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  this.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

  this.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

function startRotation() {
  this.addEventListener('mousemove', rotateToMouse);
}

function stopRotation() {
  this.removeEventListener('mousemove', rotateToMouse);
  this.style.transform = '';
  this.querySelector('.glow').style.backgroundImage = '';
}

cards.forEach(card => {
  card.addEventListener('mouseenter', startRotation);
  card.addEventListener('mouseleave', stopRotation);
});


const lenis = new Lenis()

lenis.on('scroll', (e) =>{
  // console.log(e)
})
function raf(time){
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)