"use strict";

//notice
const noticeEl = document.querySelector(".notice");
//stepper
const stepperEl = document.querySelector(".stepper");
const stepperEls = document.querySelectorAll(".stepper");
//burger
const burgerEl = document.querySelector(".burger");
//transfer elements
const headerListEl = document.querySelector(".header__list");
//filter button
const filtersBtnEl = document.querySelector(".catalog__mobile-btn");

//notice
if (noticeEl) {
  const noticeCloseEl = noticeEl.querySelector(".notice__close");
  noticeCloseEl.addEventListener("click", () => {
    noticeEl.classList.add("notice--hidden");
  });
}

//stepper
if (stepperEls) {
  stepperEls.forEach((stepperEl) => {
    const stepperInputEl = stepperEl.querySelector(".stepper__input");
    const stepperBtnMinusEl = stepperEl.querySelector(".stepper__btn--decrease");
    const stepperBtnPlusEl = stepperEl.querySelector(".stepper__btn--increase");

    const stepperMin = Number(stepperInputEl.getAttribute("min"));
    const stepperMax = Number(stepperInputEl.getAttribute("max"));

    let count = Number(stepperInputEl.value);

    stepperInputEl.addEventListener("change", () => {
      stepperBtnMinusEl.disabled = false;
      stepperBtnPlusEl.disabled = false;

      if (stepperInputEl.value < stepperMin) {
        stepperInputEl.value = stepperMin;
        stepperBtnPlusEl.disabled = true;
      }

      if (stepperInputEl.value > stepperMax) {
        stepperInputEl.value = stepperMax;
        stepperBtnPlusEl.disabled = true;
      }
    });

    stepperBtnPlusEl.addEventListener("click", () => {
      count = Number(stepperInputEl.value);

      stepperBtnMinusEl.disabled = false;
      stepperBtnPlusEl.disabled = false;

      if (count < stepperMax) {
        count++;
        stepperInputEl.value = count;
      }

      if (count === stepperMax) {
        stepperBtnPlusEl.disabled = true;
      }
    });

    stepperBtnMinusEl.addEventListener("click", () => {
      count = Number(stepperInputEl.value);

      stepperBtnMinusEl.disabled = false;
      stepperBtnPlusEl.disabled = false;

      if (count > stepperMin) {
        count--;
        stepperInputEl.value = count;
      }

      if (count === stepperMin) {
        stepperBtnMinusEl.disabled = true;
      }
    });
  });
}

//burger
if (burgerEl) {
  const body = document.body;
  const menuEl = document.querySelector(".header__bottom");
  burgerEl.addEventListener("click", () => {
    burgerEl.classList.toggle("burger--active");
    menuEl.classList.toggle("header__bottom--active");
    body.classList.toggle("stop-scroll");
  });
}

//transfer elements
if (headerListEl) {
  new TransferElements({
    sourceElement: headerListEl,
    breakpoints: {
      767.98: {
        targetElement: document.querySelector(".header__bottom"),
        targetPosition: 1,
      },
    },
  });
}

//filters
if (filtersBtnEl) {
  const filtersEl = document.querySelector(".filters");
  filtersBtnEl.addEventListener("click", () => {
    filtersBtnEl.classList.toggle("catalog__mobile-btn--active");
    filtersEl.classList.toggle("filters--active");
  });
}
