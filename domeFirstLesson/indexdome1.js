console.log("hello");

document.querySelector("h1").textContent;

let pageTitle = document.querySelector("h1");
console.log(pageTitle.textContent);

let pageTitle1 = document.querySelector("h1").textContent;
console.log(pageTitle1);

let now = new Date();
now.toDateString;
console.log(now);

console.log(pageTitle1 + now);

document.querySelector("h1").textContent += now;

function onClick(eventInfo) {
  console.log(eventInfo);
}
function clcikPink(eventInfo) {
  document.querySelector("h1").style.color = "red";
  let x = eventInfo.x;
  let y = eventInfo.y;
  console.log("x: ", x, "y:", y);
  //   eventInfo.target.style.color = "red";
}

pageTitle.addEventListener("click", onClick);
pageTitle.addEventListener("click", clcikPink);

let link = document.querySelector("a");

function turnPink(eventInfo) {
  eventInfo.preventDefault();
  eventInfo.target.style.color = "red";
}

pageTitle.addEventListener("click", clcikPink);
link.addEventListener("click", turnPink);
