window.onload = function onloadfunction() {
  document.querySelector(".step1").focus();
  document.querySelector("input").addEventListener("keydown", validate);

  let elementsInputs = document.querySelectorAll("input");

  elementsInputs.forEach((element) => {
    element.addEventListener("keyup", autoCode);
  });
};

function isLetter(keyCode) {
  return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122);
}

function validate(e) {
  keyCode = e.keyCode;
  if (isLetter(keyCode)) {
    console.error("not a number");
    e.preventDefault();
  }
  console.log(e.keyCode);
}

function autoCode(ev) {
  let inputLenht = ev.target.value;
  if (ev.target.value.length === 4) {
    const nextId = Number(ev.target.id) + 1;
    const nextInput = document.getElementById(nextId);
    // const nextInput = ev.target.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }
}
