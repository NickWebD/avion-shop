"use strict";

//notice
const noticeEl = document.querySelector(".notice");

if (noticeEl) {
  const noticeCloseEl = noticeEl.querySelector(".notice__close");
  noticeCloseEl.addEventListener("click", () => {
    noticeEl.classList.add("notice--hidden");
  });
}

//stepper
const stepperEl = document.querySelector(".stepper");

if (stepperEl) {
  const stepperInputEl = stepperEl.querySelector(".stepper__input");
  const stepperBtnDecrEl = stepperEl.querySelector(".stepper__btn--decrease");
  const stepperBtnIncrEl = stepperEl.querySelector(".stepper__btn--increase");

  let count = Number(stepperInputEl.value);
}
