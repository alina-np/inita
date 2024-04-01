// Слайдер
const tabName = ["Clients", "Website", "Appointments", "Actions", "Socials"];

const swiper = new Swiper(".swiper", {
  effect: "creative",
  creativeEffect: {
    prev: {
      opacity: 0,
    },
    next: {
      opacity: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `<button class="${className}"><p><span>${tabName[index]}</span></p></button>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const line = document.querySelector(".line"),
  hand = document.querySelector(".hand");

swiper.on("slideChange", function (e) {
  line.classList = "line";
  line.classList.add(`line-${swiper.realIndex + 1}`);
  hand.classList = "hand";
  hand.classList.add(`hand-${swiper.realIndex + 1}`);
});


// swiper.on("slideChange", function (e) {
// gsap.from(".clients .slideHead", {
//   opacity: 0,
//   y: -150,
//   duration: 0.3,
//   ease: "power1.inOut",
// });

// gsap.from(".website .slideHead", {
//   y: 150,
//   duration: 0.3,
//   ease: "power1.inOut",
// });

// gsap.from(".appointments .slideHead", {
//   opacity: 0,
//   scale: 1.5,
//   duration: 0.3,
//   ease: "power1.inOut",
// });

// gsap.from(".actions .slideHead", {
//   scale: 0,
//   duration: 0.3,
//   ease: "power1.inOut",
// });

// gsap.from(".socials .slideHead", {
//   opacity: 0,
//   duration: 0.3,
//   ease: "power1.inOut",
// });
// })