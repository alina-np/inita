// Слайдеры
const tabName = ["Clients", "Website", "Appointments", "Actions", "Socials"],
  line = document.querySelector(".line"),
  hand = document.querySelector(".hand"),
  cardBg = document.querySelector(".website__cards");

const swiper = new Swiper(".swiperMain", {
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
  on: {
    // init: startAnimationClients(),
  },
});

swiper.on("slideChange", function (e) {
  // if (swiper.realIndex === 1) starWebsiteSlider();
  // if (swiper.realIndex === 2) startAnimationAppointments();
  // if (swiper.realIndex === 3) startAnimationActions();
  changeStyleSwiper(swiper.realIndex);
});

function starWebsiteSlider() {
  const swiper2 = new Swiper(".swiperWebsite", {
    pagination: {
      el: ".website__pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        cardBg.classList.remove("website__cards-bg");
      },
    },
  });
  swiper2.on("slideChange", function (e) {
    if (swiper2.realIndex !== 0) cardBg.classList.add("website__cards-bg");
    else cardBg.classList.remove("website__cards-bg");
  });
}

// Изменения цвета вокруг телефона и движение селектора под кнопками
function changeStyleSwiper(num) {
  line.classList = "line";
  line.classList.add(`line-${num + 1}`);
  hand.classList = "hand";
  hand.classList.add(`hand-${num + 1}`);
}

// Анимация в слайдере
function startAnimationAppointments() {
  const tlAppointments = gsap.timeline({ repeat: 0 });
  tlAppointments
    .fromTo(
      ".appointments__icons div",
      {
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      }
    )
    .fromTo(
      ".appointments__cliensList",
      {
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
    .to(".appointments__infografika-border", {
      opacity: 1,
      delay: -0.2,
    })
    .to(".appointments__infografika svg", {
      opacity: 1,
      delay: -0.2,
    })
    .fromTo(
      ".appointments__infografika-big",
      {
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        delay: -0.2,
      }
    )
    .fromTo(
      ".appointments__infografika-small",
      {
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        delay: -0.2,
      }
    )
    .fromTo(
      ".appointments__bookings",
      {
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        delay: -0.2,
      }
    );
}

function startAnimationActions() {
  const tlAction = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
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
  const tlClients = gsap.timeline({ repeat: -1, repeatDelay: 4 });
  tlClients
    .fromTo(
      ".clients__oneMess",
      {
        y: 320,
      },
      {
        y: 305,
        opacity: 1,
        delay: 0.5,
      }
    )
    .to(".clients__oneMess", {
      y: 120,
      delay: 1,
    })
    .fromTo(
      ".clients__twoMess",
      {
        y: 125,
      },
      {
        y: 120,
        opacity: 1,
      }
    )
    .to(".clients__oneMess", {
      y: 20,
      delay: 1,
    })
    .to(".clients__twoMess p", {
      y: -115,
      background: "white",
      delay: -0.5,
    })
    .fromTo(
      ".clients__threeMess",
      {
        y: -40,
      },
      {
        y: -35,
        opacity: 1,
      }
    )
    .to(".clients__oneMess", {
      y: 320,
      opacity: 0,
      delay: 1,
    })
    .to(".clients__threeMess", {
      y: 100,
      opacity: 0,
      delay: -0.5,
    })
    .to(".clients__twoMess p", {
      y: -5,
      opacity: 0,
      delay: -0.5,
    })
    .fromTo(
      ".clients__fourMess",
      {
        y: -257,
      },
      {
        y: -257,
        opacity: 1,
      }
    )
    .to(".clients__fourMess", {
      y: -350,
      background: "white",
      delay: 1,
    })
    .fromTo(
      ".clients__fiveMess",
      {
        y: -350,
      },
      {
        y: -345,
        opacity: 1,
      }
    )
    .to(".clients__fourMess", {
      y: -480,
      delay: 1,
    })
    .to(".clients__fiveMess", {
      y: -480,
      delay: -0.5,
    })
    .to(".clients__ai", {
      y: -140,
      delay: -0.5,
    })
    .fromTo(
      ".clients__lastMess",
      {
        y: -455,
      },
      {
        y: -450,
        opacity: 1,
      }
    );
}

// Перетаскивание кнопок
if (innerWidth < 768) changePositionBtns();

function changePositionBtns() {
  const pagBlock = document.querySelector(".swiperMain__pagination");
  let startX = 0;
  let currentX = 0;

  pagBlock.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX - currentX;
  });

  pagBlock.addEventListener("touchmove", function (event) {
    currentX = event.touches[0].clientX - startX;
    if (currentX > 325) currentX = 325;
    if (currentX < -335) currentX = -335;
    pagBlock.style.left = currentX + "px";
  });
}

// Прилипание пагинации
let header = document.querySelector(".swiperMain__pagination");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 260) {
    header.classList.add("swiperMain__pagination-fixed");
    header.style.position = "fixed";
    header.style.top = "-47px";
  } else {
    header.classList.remove("swiperMain__pagination-fixed");
    header.style.position = "absolute";
    header.style.top = "140px";
  }
});
