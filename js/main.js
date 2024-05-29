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
const stepperEls = document.querySelectorAll(".stepper");

if (stepperEls) {
  stepperEls.forEach((stepperEl) => {
    const stepperInputEl = stepperEl.querySelector(".stepper__input");
    const stepperBtnMinusEl = stepperEl.querySelector(".stepper__btn--decrease");
    const stepperBtnPlusEl = stepperEl.querySelector(".stepper__btn--increase");

    const stepperMin = Number(stepperInputEl.getAttribute("min"));
    const stepperMax = Number(stepperInputEl.getAttribute("max"));

    let count = Number(stepperInputEl.value);

    stepperInputEl.addEventListener("change", () => {
      stepperBtnPlusEl.disabled = false;
      stepperBtnMinusEl.disabled = false;

      //stepperBtnPlusEl.classList.remove("stepper__btn--disabled");
      //stepperBtnMinusEl.classList.remove("stepper__btn--disabled");

      if (stepperInputEl.value < stepperMin) {
        stepperInputEl.value = stepperMin;
        stepperBtnPlusEl.disabled = true;
        //stepperBtnPlusEl.classList.add("stepper__btn--disabled");
      }

      if (stepperInputEl.value > stepperMax) {
        stepperInputEl.value = stepperMax;
        stepperBtnPlusEl.disabled = true;
        //stepperBtnPlusEl.classList.add("stepper__btn--disabled");
      }
    });

    stepperBtnPlusEl.addEventListener("click", () => {
      count = Number(stepperInputEl.value);

      stepperBtnPlusEl.disabled = false;
      stepperBtnMinusEl.disabled = false;

      //stepperBtnPlusEl.classList.remove("stepper__btn--disabled");
      //stepperBtnMinusEl.classList.remove("stepper__btn--disabled");

      if (count < stepperMax) {
        count++;
        stepperInputEl.value = count;
      }

      if (count === stepperMax) {
        stepperBtnPlusEl.disabled = true;

        //stepperBtnPlusEl.classList.add("stepper__btn--disabled");
      }
    });

    stepperBtnMinusEl.addEventListener("click", () => {
      count = Number(stepperInputEl.value);

      stepperBtnPlusEl.disabled = false;
      stepperBtnMinusEl.disabled = false;
      //stepperBtnMinusEl.classList.remove("stepper__btn--disabled");
      //stepperBtnPlusEl.classList.remove("stepper__btn--disabled");

      if (count > stepperMin) {
        count--;
        stepperInputEl.value = count;
      }

      if (count === stepperMin) {
        stepperBtnMinusEl.disabled = true;

        //stepperBtnMinusEl.classList.add("stepper__btn--disabled");
      }
    });
  });
}
