// function init() {
//   let checkInputArr = document.getElementsByClassName("txtLetters");
//   console.log(checkInputArr);
//   checkInputArr[0].addEventListener("keydown", validateEvent);
// }
// init();
function init1() {
  let checkInput = document.querySelector(".txtLetters");
  checkInput.addEventListener("keydown", validateEvent);
  let checkInput1 = document.querySelector(".numNum");
  checkInput1.addEventListener("keydown", validateEvent2);
}

function validateEvent2(ev) {
  if (isLetter(ev.keyCode)) {
    console.error("not a number");
    ev.preventDefault();
    errorLetter();
  }
}
function validateEvent(e) {
  let changeColor = document.querySelector("#changeColor");
  if (isForbidenLetters(e.key) || !isLetter(e.keyCode)) {
    console.error("not validate latter");
    e.preventDefault();
    changeColor.classList.remove("green");
    changeColor.classList.add("red");
    errorLetter();
  } else {
    changeColor.classList.remove("red");
    changeColor.classList.add("green");
  }
}

function isForbidenLetters(letter) {
  let forbidenLetters = ["a", "s"];
  return forbidenLetters.includes(letter);
}

let counterror = 0;
function errorLetter() {
  counterror++;
  document.querySelector(".errors").innerHTML = `Your ${counterror} error`;
}

function isLetter(keyCode) {
  return (
    (keyCode >= 65 && keyCode <= 90) ||
    (keyCode >= 97 && keyCode <= 122) ||
    keyCode == 8
  );
}

init1();
