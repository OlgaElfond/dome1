function initVisa() {
  let txtNumber = document.querySelectorAll(".txtNumber");
  txtNumber.forEach((element) => {
    element.addEventListener("keydown", validateEvent2);
    element.addEventListener("blur", validateLenght);
  });
  console.log(txtNumber);
  focusNextElement();
}
const maxTextLenght = 4;

function focusNextElement(element) {
  if (!element) {
    document.querySelector(".step1").focus();
  } else {
    let curentStepNumber = parseInt(element.slice(-1)) + 1;
    let nextStep = `.step${curentStepNumber}`;
    document.querySelector(nextStep).focus();
    console.log(curentStepNumber);
  }
}

function isValidLenght(inputValue) {
  return inputValue.length === maxTextLenght;
}

function validateEvent2(ev) {
  if (isLetter(ev.keyCode)) {
    console.error("not a number");
    ev.preventDefault();
  } else {
    if (ev.srcElement.className !== "txtNumber step4") {
      if (isValidLenght(ev.target.value)) {
        console.log(ev.srcElement.className);
        focusNextElement(ev.srcElement.className);
      }
    } else {
      console.log(ev.target.value.length);
      if (ev.target.value.length > maxTextLenght - 1) {
        console.error(ev.target.value.length);
        ev.preventDefault();
      }
    }
  }
}

function validateLenght(ev) {
  console.log("jjj", ev);
  if (ev.target.value.length < maxTextLenght) {
    console.log("osdkvfkbm");
    ev.target.classList.add("red");
  } else {
    ev.target.classList.remove("red");
  }
}

// function validateEvent2(ev) {
//   if (isLetter(ev.keyCode)) {
//     console.error("not a number");
//     ev.preventDefault();
//   } else {
//     if (isValidLenght(ev.target.value)) {
//       if (ev.srcElement.className !== ".txtNumber step4") {
//         console.log(ev.srcElement.className);
//         focusNextElement(ev.srcElement.className);
//       }
//     } else {
//       console.log(ev.target.value.length);
//       if (ev.target.value.length > textLastLenght) {
//         console.error(ev.target.value.length);
//         ev.preventDefault();
//       }
//     }
//   }
// }

// function validateEvent2(ev) {
//   console.log(ev.srcElement.className);
//   if (isLetter(ev.keyCode)) {
//     console.error("not a number");
//     ev.preventDefault();
//   } else {
//     if (isValidLenght(ev.target.value))
//       if (ev.srcElement.className !== ".txtNumber step4") {
//         focusNextElement(ev.srcElement.className);
//       }
//   }
// }

function isLetter(keyCode) {
  return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122);
}
initVisa();
