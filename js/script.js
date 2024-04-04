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
  }
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
    .to(".card-1", {
      transformOrigin: "center",
      x: -300,
      y: 30,
      rotate: -10,
      duration: 0.2,
      delay: 4,
    })
    .to(".card-1 .card-bg", {
      opacity: 1,
      duration: 0.4,
    })
    .fromTo(
      ".card-2",
      { scale: 0.85, y: -45, delay: 3 },
      {
        scale: 1,
        y: 0,
        duration: 0.1,
      }
    )
    .to(".card-2 .card-bg", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
    })
    .to(".card-2", {
      transformOrigin: "center",
      x: 300,
      y: 30,
      rotate: 10,
      duration: 0.2,
      delay: 4,
    })
    .fromTo(
      ".card-3",
      { scale: 0.85, y: -45 },
      {
        scale: 1,
        y: 0,
        duration: 0.1,
        delay: 0.5,
      }
    )
    .to(".card-3 .card-bg", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
    })
    .to(".card-3", {
      transformOrigin: "center",
      x: 300,
      y: 30,
      rotate: 10,
      duration: 0.2,
      delay: 4,
    })
    .fromTo(
      ".card-4",
      { scale: 0.85, y: -45, delay: 3 },
      {
        scale: 1,
        y: 0,
        duration: 0.1,
        delay: 0.5,
      }
    )
    .to(".card-4 .card-bg", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
    })
    .to(".card-4", {
      transformOrigin: "center",
      x: 300,
      y: 30,
      rotate: 10,
      duration: 0.2,
      delay: 4,
    })
    .to(".card-5", {
      scale: 1,
      y: 0,
    });
}

function startAnimationClients() {
  const tlClients = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });

}
