const n = document.getElementById("nm").addEventListener("keypress", callback);
const range = document.querySelector(".border");

function color() {
  range.style.color = "red";
}

function callback(event) {
  const ptrn = /^[A-Za-z]+$/;
  const num = /[0-9\/]+/;
  if (event.key.match(ptrn)) {
    console.log("Valid Input");
  }
  if (event.key.match(num)) {
    console.log("Not Valid Input");
    color();
    event.preventDefault();
  }
}
