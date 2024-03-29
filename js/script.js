// Слайдер
const tabName = ['Clients', 'Website', 'Appointments', 'Actions', 'Socials']

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => { return `<button class="${className}"><p><span>${tabName[index]}</span></p></button>` }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
