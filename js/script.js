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

const line = document.querySelector(".line");

swiper.on("slideChange", function (e) {
  line.classList = 'line';
  line.classList.add(`line-${swiper.realIndex + 1}`);
});

