const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal__close");

const tabs = document.querySelectorAll("[data-target]");
const tabsContents = document.querySelectorAll("[data-content]");

/* -------------------- { FUNCTION FOR OPEN & CLOSE MENU } -------------------- */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/* -------------------- { FUNCTION FOR OPEN & CLOSE MODAL } -------------------- */
let modal = function(mClick) {
  modalViews[mClick].classList.add("active__modal");
}

modalBtns.forEach((mBtn, i) => {
  mBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mClose) => {
  mClose.addEventListener("click", () => {
    modalViews.forEach((mView) => {
      mView.classList.remove("active__modal");
    });
  });
});

/* -------------------- { FUNCTION FOR SHOW QUALIFICATION CONTENT } -------------------- */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabsContents.forEach(tContent => {
      tContent.classList.remove("active__qualification");
    });
    target.classList.add("active__qualification");
    tabs.forEach(tab => {
      tab.classList.remove("active__qualification");
    });
    tab.classList.add("active__qualification");
  });
});

/* -------------------- { FUNCTION FOR PORTFOLIO FILTERS } -------------------- */
var mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 300,
  },
});

/* -------------------- { FUNCTION FOR TESTIMONIALS SWIPER } -------------------- */
const swiper = new Swiper(".testimonials__container", {
  speed: 500,
  loop: true,
  autoplay: true,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  }
});

/* -------------------- { FUNCTION FOR SHOW SCROLL UP } -------------------- */
function scrollUp() {
  const scrollUp = document.querySelector(".scrollup");
  if(window.scrollY >= 560) {
    scrollUp.classList.add("show__scroll");
  } else {
    scrollUp.classList.remove("show__scroll");
  }
}

window.addEventListener("scroll", scrollUp);