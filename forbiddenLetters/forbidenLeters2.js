document.querySelector("input").addEventListener("keydown", validate);

function isLetter(keyCode) {
  return (
    (keyCode >= 65 && keyCode <= 90) ||
    (keyCode >= 97 && keyCode <= 122) ||
    keyCode == 8
  );
}

let curentColor = document.querySelector(".range");

function changeColor() {
  curentColor.classList.replace("range", "red");
}

function validate(e) {
  keyCode = e.keyCode;
  if (isLetter(e.keyCode)) {
    if (e.keyCode === 65 || e.keyCode === 83) {
      e.preventDefault();
      changeColor();
    } else {
      console.log("you on the right track");
    }
  } else {
    e.preventDefault();
  }
}
