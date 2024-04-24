// Слайдеры
const tabName = ["Clients", "Website", "Appointments", "Actions", "Socials"],
  line = document.querySelector(".line"),
  hand = document.querySelector(".hand"),
  cardBg = document.querySelector(".website__cards"),
  btnPag = document.querySelectorAll(
    ".website__pagination .swiper-pagination-bullet"
  ),
  btnPrev = document.querySelector(".swiperWebsite-button-prev"),
  btnNext = document.querySelector(".swiperWebsite-button-next"),
  tlClientsList = gsap.timeline({}),
  tlClientsTimeline = gsap.timeline({}),
  tlClientsChat = gsap.timeline({}),
  tlAction = gsap.timeline({ repeat: -1, repeatDelay: 0.2 }),
  tlSocials = gsap.timeline({ repeat: -1, repeatDelay: 2 });

// Инициализация и настройка слайдеров
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
  allowTouchMove: false,
  on: {
    init: startAnimationClients(),
  },
});

swiper.on("slideChange", function (e) {
  if (swiper.realIndex !== 0) {
    tlClientsList.pause();
    tlClientsTimeline.pause();
    tlClientsChat.pause();
  }
  if (swiper.realIndex === 0) {
    tlClientsList.play();
    tlClientsTimeline.play();
    tlClientsChat.play();
  }
  swiper.realIndex === 1 ? swiper2.autoplay.start() : swiper2.autoplay.pause();
  swiper.realIndex === 2 && startAnimationAppointments();
  swiper.realIndex === 3 ? tlAction.play() : tlAction.pause();
  swiper.realIndex === 4 ? tlSocials.play() : tlSocials.pause();
  changeStyleSwiper(swiper.realIndex);
});

const swiper2 = new Swiper(".swiperWebsite", {
  pagination: {
    el: ".website__pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    // disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiperWebsite-button-next",
    prevEl: ".swiperWebsite-button-prev",
  },
  on: {
    init: function () {
      cardBg.classList.remove("website__cards-bg");
    },
  },
  touchStartPreventDefault: false,
});

swiper2.autoplay.pause();

swiper2.on("slideChange", function (e) {
  swiper2.realIndex !== 0
    ? cardBg.classList.add("website__cards-bg")
    : cardBg.classList.remove("website__cards-bg");
});

btnPag.forEach((item) => item.addEventListener("click", stopAutoplay));
btnPrev.addEventListener("click", stopAutoplay);
btnNext.addEventListener("click", stopAutoplay);

function stopAutoplay() {
  swiper2.autoplay.stop();
  setTimeout(() => swiper2.autoplay.start(), 10000);
}

// Изменения цвета вокруг телефона и движение селектора под кнопками
function changeStyleSwiper(num) {
  line.classList = "line";
  line.classList.add(`line-${num + 1}`);
  hand.classList = "hand";
  hand.classList.add(`hand-${num + 1}`);
}

// Блок Clients
showTab();
function showTab() {
  let tabNav = document.querySelectorAll(".clientsTab__head > div");
  let tabContent = document.querySelectorAll(".clientsTab__content > div");
  let tabName;

  tabNav.forEach((item) => item.addEventListener("click", selectTabNav));

  function selectTabNav() {
    tabNav.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    tabName = this.dataset.name;
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
    if (document.querySelector(".timeline.active")) {
      tlClientsChat.pause();
      tlClientsTimeline.play();
    }
    if (document.querySelector(".chat.active")) {
      tlClientsTimeline.pause();
      tlClientsChat.play();
    }
  }
}

function startAnimationClients() {
  startAnimationClientsList();
  startAnimationClientsTimeline();
  startAnimationClientsChat();

  function startAnimationClientsList() {
    tlClientsList
      .to(".clientsList__peoples div:not(.clientsList__peoples__km)", {
        opacity: 0.3,
        delay: 1,
      })
      .to(".clientsList", {
        y: 500,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
      });
  }

  function startAnimationClientsTimeline() {
    tlClientsTimeline
      .to(".timeline", {
        opacity: 1,
        y: -45,
        delay: 4,
      })
      .to(".timeline", {
        opacity: 1,
        y: -93,
        delay: 0.7,
      })
      .to(".timeline", {
        opacity: 1,
        y: -130,
        delay: 0.7,
      })
      .to(".timeline", {
        opacity: 1,
        y: -192,
        delay: 0.7,
      })
      .to(".timeline", {
        opacity: 1,
        y: -280,
        delay: 0.7,
      })
      .to(".timeline", {
        opacity: 1,
        y: -325,
        delay: 0.7,
      })
      .to(".clientsTimelineHistory-one", {
        height: "auto",
        opacity: 1,
        y: 0,
        delay: -0.5,
      })
      .to(".timeline", {
        opacity: 1,
        y: -371,
        delay: 0.7,
      })
      .to(".clientsTimelineHistory-two", {
        height: "auto",
        opacity: 1,
        y: 0,
        delay: -0.5,
      })
      .to(".timeline", {
        opacity: 1,
        y: -415,
        delay: 0.7,
      })
      .to(".clientsTimelineHistory-three", {
        height: "auto",
        opacity: 1,
        y: 0,
        delay: -0.5,
      })
      .to(".timeline", {
        opacity: 1,
        y: -515,
        delay: 0.7,
      })
      .to(".timeline", {
        opacity: 1,
        y: -550,
        delay: 0.7,
      })
      .to(".timeline", {
        opacity: 1,
        y: -640,
        delay: 0.7,
      })
      .to(".timeline", {
        opacity: 1,
        y: -670,
        delay: 0.7,
      });
  }

  function startAnimationClientsChat() {
    tlClientsChat.pause();
    tlClientsChat
      .to(".clientsChat", {
        opacity: 1,
        y: -40,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -198,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -390,
        delay: 0.7,
      })
      .to(".clients__twomess .clients__mess-anim", {
        y: -10,
        marginTop: 0,
        height: "auto",
        opacity: 1,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -525,
        delay: 0.7,
      })
      .to(".clients__threemess .clients__mess-anim", {
        y: -10,
        marginTop: 0,
        height: "auto",
        opacity: 1,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -655,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -695,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -925,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -1030,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -1175,
        delay: 0.7,
      })
      .to(".clients__sevenmess .clients__mess-anim", {
        y: -10,
        marginTop: 0,
        marginBottom: 5,
        height: "auto",
        opacity: 1,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -1325,
        delay: 0.7,
      })
      .to(".clients__eightmess .clients__mess-anim", {
        y: -10,
        marginTop: 5,
        height: "auto",
        opacity: 1,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -1645,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -1785,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -1899,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -1990,
        delay: 0.7,
      })
      .to(".clients__twelvemess .clients__mess-anim", {
        y: -10,
        marginTop: 5,
        height: "auto",
        opacity: 1,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -2040,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -2355,
        delay: 0.7,
      })
      .to(".clientsChat", {
        opacity: 1,
        y: -2505,
        delay: 0.7,
      });
  }
}

// Блок Appointments
function startAnimationAppointments() {
  const tlAppointments = gsap.timeline({ repeat: 0 });
  tlAppointments
    .fromTo(
      ".appointments__icons div",
      {
        y: 30,
        opacity: 0,
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
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
    .fromTo(
      ".appointments__infografika-border",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: -0.2,
      }
    )
    .fromTo(
      ".appointments__infografika svg",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: -0.2,
      }
    )
    .fromTo(
      ".appointments__infografika-big",
      {
        opacity: 0,
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
        opacity: 0,
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
        opacity: 0,
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

// Блок Action
tlAction.pause();
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
  .to(".actioncard-1 .activemess .actioncard__borderText__container", {
    background: "transparent",
    transformOrigin: "-10px",
  })
  .to(".actioncard-1 .activemess-bg", {
    scaleX: 1,
    transformOrigin: "-10px",
    delay: -0.1,
  })
  .to(".actioncard-1 .activemess", {
    border: "2px solid transparent",
    delay: -0.1,
  })
  .to(".actioncard-1 .activemess .actioncard__borderText__container", {
    color: "#fff",
    delay: -0.7,
    transformOrigin: "-10px",
  })
  .to(".actioncard-1 .activemess path", {
    fill: "#fff",
    delay: -0.7,
  })
  .to(".actioncard-1", {
    opacity: 0,
    transformOrigin: "center",
    x: -1300,
    y: 30,
    rotate: -40,
    duration: 0.3,
    delay: 1.5,
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
  .to(".actioncard-2 .activemess .actioncard__borderText__container", {
    background: "transparent",
    transformOrigin: "-10px",
  })
  .to(".actioncard-2 .activemess-bg", {
    scaleX: 1,
    transformOrigin: "-10px",
    delay: -0.1,
  })
  .to(".actioncard-2 .activemess", {
    border: "2px solid transparent",
    delay: -0.1,
  })
  .to(".actioncard-2 .activemess .actioncard__borderText__container", {
    color: "#fff",
    delay: -0.7,
    transformOrigin: "-10px",
  })
  .to(".actioncard-2 .activemess path", {
    fill: "#fff",
    delay: -0.7,
  })
  .to(".actioncard-2", {
    opacity: 0,
    transformOrigin: "center",
    x: 1300,
    y: 30,
    rotate: 40,
    duration: 0.3,
    delay: 1.5,
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
  .to(".actioncard-3 .activemess .actioncard__borderText__container", {
    background: "transparent",
    transformOrigin: "-10px",
  })
  .to(".actioncard-3 .activemess-bg", {
    scaleX: 1,
    transformOrigin: "-10px",
    delay: -0.1,
  })
  .to(".actioncard-3 .activemess", {
    border: "2px solid transparent",
    delay: -0.1,
  })
  .to(".actioncard-3 .activemess .actioncard__borderText__container", {
    color: "#fff",
    delay: -0.7,
    transformOrigin: "-10px",
  })
  .to(".actioncard-3 .activemess path", {
    fill: "#fff",
    delay: -0.7,
  })
  .to(".actioncard-3", {
    opacity: 0,
    transformOrigin: "center",
    x: 1300,
    y: 30,
    rotate: 40,
    duration: 0.3,
    delay: 1.5,
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
  .to(".actioncard-4 .activemess .actioncard__borderText__container", {
    background: "transparent",
    transformOrigin: "-10px",
  })
  .to(".actioncard-4 .activemess-bg", {
    scaleX: 1,
    transformOrigin: "-10px",
    delay: -0.1,
  })
  .to(".actioncard-4 .activemess", {
    border: "2px solid transparent",
    delay: -0.1,
  })
  .to(".actioncard-4 .activemess .actioncard__borderText__container", {
    color: "#fff",
    delay: -0.7,
    transformOrigin: "-10px",
  })
  .to(".actioncard-4 .activemess path", {
    fill: "#fff",
    delay: -0.7,
  })
  .to(".actioncard-4", {
    opacity: 0,
    transformOrigin: "center",
    x: 1300,
    y: 30,
    rotate: 40,
    duration: 0.3,
    delay: 1.5,
  })
  .to(".actioncard-4", {
    scale: 0.85,
    y: -45,
    x: 0,
    rotate: 0,
    zIndex: -13,
  });

// Блок Socials
tlSocials.pause();
tlSocials
  .from(".socials__about", {
    opacity: 0,
    stagger: 0.3,
  })
  .to(".socials__about-bg", {
    x: 0,
  })
  .to(".socials__about-bg", {
    x: 10,
    opacity: 0,
  })
  .from(".socials__about:not(:nth-of-type(3))", {
    opacity: 0,
    delay: -0.1,
    duration: 0.5,
  })
  .to(".socials__about:nth-of-type(3)", {
    y: -120,
  })
  .to(".socials__create", {
    opacity: 0,
    y: -300,
    delay: 0.5,
  })
  .to(".socials__about:nth-of-type(3)", {
    opacity: 0,
    y: -300,
    delay: -0.5,
  })
  .to(".socials__icon-plus", {
    opacity: 0,
    delay: -0.1,
  })
  .to(".socials__icon-back", {
    opacity: 1,
    delay: -0.1,
  })
  .to(".socials__list", {
    opacity: 0,
  })
  .to(".post > * ", {
    opacity: 0,
    delay: -0.1,
  })
  .fromTo(
    ".post",
    {
      y: -600,
      opacity: 0,
      delay: -0.5,
    },
    {
      y: -600,
      opacity: 1,
    }
  )
  .to(".post > * ", {
    opacity: 1,
    stagger: 0.7,
    delay: -0.8,
  })
  .to(".post > * ", {
    opacity: 0,
    delay: 0.7,
    duration: 1,
  });

// Движение контента в телефоне
changePosition(".appointmentsMain", -360);
changePosition(".websitecard-2", -190);
changePosition(".websitecard-3", -980);
changePosition(".websitecard-4", -70);

function changePosition(block, value) {
  const pagBlock = document.querySelector(block);
  let startY = 0,
    currentY = 0;

  pagBlock.addEventListener("mousedown", function (e) {
    startY = e.clientY - currentY;
    document.addEventListener("mousemove", dragBlock);
    document.addEventListener("mouseup", stopDragBlock);
  });

  function dragBlock(e) {
    currentY = e.clientY - startY;
    if (currentY < value) currentY = value;
    if (currentY > 0) currentY = 0;

    pagBlock.style.transform = `translateY(${currentY}px)`;
  }

  function stopDragBlock() {
    document.removeEventListener("mousemove", dragBlock);
    document.removeEventListener("mouseup", stopDragBlock);
  }
}

// Перетаскивание кнопок
if (innerWidth < 768) {
  stickyPag();
  changePositionBtns();
}

function changePositionBtns() {
  const pagBlock = document.querySelector(".swiperMain__pagination"),
    btns = document.querySelectorAll(".swiper-pagination-bullet");
  let startX = 0,
    currentX = 0;

  pagBlock.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX - currentX;
  });

  pagBlock.addEventListener("touchmove", function (e) {
    currentX = e.touches[0].clientX - startX;
    if (currentX > 325) currentX = 325;
    if (currentX < -325) currentX = -325;
    pagBlock.style.left = currentX + "px";
  });
  pagBlock.addEventListener("click", function (e) {
    let btn = e.target.closest("button");
    if (btn == btns[0]) currentX = 325;
    if (btn == btns[1]) currentX = 165;
    if (btn == btns[2]) currentX = 0;
    if (btn == btns[3]) currentX = -165;
    if (btn == btns[4]) currentX = -325;
    pagBlock.style.left = currentX + "px";
  });
}

// Прилипание пагинации
function stickyPag() {
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
}
