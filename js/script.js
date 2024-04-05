// Слайдер
const tabName = ["Clients", "Website", "Appointments", "Actions", "Socials"],
  line = document.querySelector(".line"),
  hand = document.querySelector(".hand");

// Слайдер
const swiper = new Swiper(".swiper", {
  effect: "creative",
  grabCursor: false,
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
  breakpoints: {
    768: {
      navigation: false,
    },
  },
});

swiper.on("slideChange", function (e) {
  if (swiper.realIndex === 0) startAnimationClients();
  if (swiper.realIndex === 3) startAnimationActions();
  changeStyleSwiper(swiper.realIndex);
});

// Изменения цвета вокруг телефона и движение селектора под кнопками
function changeStyleSwiper(num) {
  line.classList = "line";
  line.classList.add(`line-${num + 1}`);
  hand.classList = "hand";
  hand.classList.add(`hand-${num + 1}`);
}

// Анимация в слайдере
function startAnimationActions() {
  const tlAction = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });
  tlAction
    .fromTo(
      ".actioncard-1",
      { scale: 0.85, y: -45 },
      {
        scale: 1,
        y: 0,
        duration: 0.1,
      }
    )
    .to(".actioncard-1 .actioncard-bg", {
      opacity: 1,
      duration: 0.4,
      delay: 0.5,
    })
    .to(".actioncard-1", {
      opacity: 0,
      transformOrigin: "center",
      x: -1300,
      y: 30,
      rotate: -40,
      duration: 0.3,
      delay: 3,
    })
    .to(".actioncard-1", {
      scale: 0.85,
      y: -45,
      x: 0,
      rotate: 0,
      zIndex: -13,
    })
    .fromTo(
      ".actioncard-2",
      { scale: 0.85, y: -45 },
      {
        scale: 1,
        y: 0,
        duration: 0.1,
      }
    )
    .to(".actioncard-2 .actioncard-bg", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
    })
    .to(".actioncard-2", {
      opacity: 0,
      transformOrigin: "center",
      x: 1300,
      y: 30,
      rotate: 40,
      duration: 0.3,
      delay: 3,
    })
    .to(".actioncard-2", {
      scale: 0.85,
      y: -45,
      x: 0,
      rotate: 0,
      zIndex: -13,
    })
    .fromTo(
      ".actioncard-3",
      { scale: 0.85, y: -45 },
      {
        scale: 1,
        y: 0,
        duration: 0.1,
      }
    )
    .to(".actioncard-3 .actioncard-bg", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
    })
    .to(".actioncard-3", {
      opacity: 0,
      transformOrigin: "center",
      x: 1300,
      y: 30,
      rotate: 40,
      duration: 0.3,
      delay: 3,
    })
    .to(".actioncard-3", {
      scale: 0.85,
      y: -45,
      x: 0,
      rotate: 0,
      zIndex: -13,
    })
    .fromTo(
      ".actioncard-4",
      { scale: 0.85, y: -45 },
      {
        scale: 1,
        y: 0,
        duration: 0.1,
      }
    )
    .to(".actioncard-4 .actioncard-bg", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
    })
    .to(".actioncard-4", {
      opacity: 0,
      transformOrigin: "center",
      x: 1300,
      y: 30,
      rotate: 40,
      duration: 0.3,
      delay: 3,
    })
    .to(".actioncard-4", {
      scale: 0.85,
      y: -45,
      x: 0,
      rotate: 0,
      zIndex: -13,
    });
}

function startAnimationClients() {
  const tlClients = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });
}
