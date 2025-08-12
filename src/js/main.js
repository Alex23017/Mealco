document.addEventListener("DOMContentLoaded", () => {
  // HEADER SCROLL //
  const headerScroll = document.querySelector(".header-scroll");

  if (headerScroll) {
    window.addEventListener("scroll", () => {
      headerScroll.classList.toggle("show", window.scrollY > 100);
    });
  }

  // SWIPER //
  const brandsSwiper = document.querySelector(".swiper");
  if (brandsSwiper) {
    new Swiper(brandsSwiper, {
      slidesPerView: 3,
      loop: false,
      centeredSlides: true,
      centeredSlidesBounds: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChangeTransitionStart: function () {
          this.slides.forEach((slide) => (slide.style.transform = ""));
          const activeSlide = this.slides[this.activeIndex];
          if (activeSlide) {
            activeSlide.style.transform += " translateY(151px)";
          }
        },
      },
    });
  }

  // BTN BURGER + MODAL + ICON-SWITCH
  const modalMenu = document.querySelector(".modal-menu");
  const btnOpen = document.querySelector(".burger-open");
  const btnClose = document.querySelector(".burger-close");

  function toggleBurgerMenu() {
    modalMenu?.classList.toggle("active");
    btnOpen?.classList.toggle("active");
    btnClose?.classList.toggle("active");
    document.body.classList.toggle("modal-open");
  }

  if (btnOpen) btnOpen.addEventListener("click", toggleBurgerMenu);
  if (btnClose) btnClose.addEventListener("click", toggleBurgerMenu);

  // MODAL WaitList
  const btnWaitlistHome = document.querySelectorAll(".waitlist-home");
  const modalWaitlist = document.querySelector(".modal");
  const btnWaitClose = document.querySelector(".btnClose");

  const modalBodyHidden = document.querySelector(".modal_body");
  const modalBodySucces = document.querySelector(".modal_succes");

  // OPEN FOR BUTTON WAITLIST
  btnWaitlistHome.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (modalWaitlist) {
        modalWaitlist.classList.add("show");
        document.body.classList.add("modal-waitlist");
      }
    });
  });

  // CLOSE

  if (btnWaitClose) {
    btnWaitClose.addEventListener("click", () => {
      if (modalWaitlist) modalWaitlist.classList.remove("show");
      document.body.classList.remove("modal-waitlist");
      if (modalBodyHidden) modalBodyHidden.classList.remove("hidden");
      if (modalBodySucces) modalBodySucces.classList.remove("show");
    });
  }

  // close click overlay
  const overlay = document.querySelector(".overlay");
  if (modalWaitlist && overlay) {
    modalWaitlist.addEventListener("click", (e) => {
      if (e.target === overlay) {
        modalWaitlist.classList.remove("show");
        document.body.classList.remove("modal-waitlist");
        if (modalBodyHidden) modalBodyHidden.classList.remove("hidden");
        if (modalBodySucces) modalBodySucces.classList.remove("show");
      }
    });
  }

  const btnWaitlist = document.getElementById("waitlist");
  if (btnWaitlist && modalWaitlist) {
    btnWaitlist.addEventListener("click", () => {
      modalWaitlist.classList.add("show");
      document.body.classList.add("modal-waitlist");
    });
  }

  // MODAL WAITLIST IN BURGER
  const btnburgerWaitList = document.getElementById("waitlist-burger");
  if (btnburgerWaitList && modalWaitlist) {
    btnburgerWaitList.addEventListener("click", () => {
      modalWaitlist.classList.add("show");
      document.body.classList.add("modal-waitlist");
    });
  }

  // FORM INPUT

  const firstName = document.querySelectorAll(".form_input-button");
  if (firstName) {
    firstName.forEach((value) => value.addEventListener("input", (e) => {}));
  }

  // MODAL SUCCESS
  const btnSucces = document.getElementById("submit-button");

  if (btnSucces) {
    btnSucces.addEventListener("click", (e) => {
      const inputValue = Array.from(firstName).every((input) => input.value.trim().length >= 4);
      const emailValidate = document.getElementById("email");
      if (!inputValue || !emailValidate.value.includes("@")) {
        e.preventDefault();
        alert("Заповніть коректно дані");
      } else {
        if (modalBodyHidden) modalBodyHidden.classList.add("hidden");
        if (modalBodySucces) modalBodySucces.classList.add("show");
      }
    });
  }

  // NAVIGATE
  const currentPath = window.location.pathname;

  if (currentPath.endsWith("/brands.html")) {
    const brandsLink = document.querySelector('a[href*="brands.html"]');
    if (brandsLink) brandsLink.classList.add("active");
  }

  if (currentPath.endsWith("/press.html")) {
    const pressLink = document.querySelector('a[href*="press.html"]');
    if (pressLink) pressLink.classList.add("active");
  }
});

// Cayenne Items menu active

const btnCayenneActive = document.querySelectorAll(".cayenne_menu-item");

btnCayenneActive.forEach((btn) =>
  btn.addEventListener("click", () => {
    btnCayenneActive.forEach((remove) => {
      remove.classList.remove("active");
    });
    btn.classList.add("active");
  }),
);

// FORM JS
