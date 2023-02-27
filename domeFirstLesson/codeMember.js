let now = new Date();
now.toDateString;
console.log(now);
let pageTitle = document.querySelector("h1");
console.log(pageTitle.textContent);

pageTitle.textContent += pageTitle + now.toDateString();

// copy event
pageTitle.addEventListener("copy", (event) => {
  console.log("copy action initiated");
});

pageTitle.addEventListener("click", (eventInfo) => {
  console.log(eventInfo);
});

function redText(eventInfo) {
  console.log(eventInfo);
  eventInfo.target.style.color = "red";
  let x = eventInfo.x;
  console.log(x);
}

pageTitle.addEventListener("click", redText);
document.addEventListener("copy", popUp);

function popUp(event) {
  alert("copy action initiated");
}

let link = document.querySelector("a");
