const container = document.querySelector("body");
const bCounter = [];

function clicky(event) {
  if (event.target.style.backgroundColor === "green") {
    event.target.style.backgroundColor = "red";
    clicked = true;
  } else {
    event.target.style.backgroundColor = "green";
  }
  return clicked;
}

function removelisteners() {
  bCounter.forEach(function (button) {
    button.removeEventListener("mousedown", clicky);
  });
}

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = "btn" + i;
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.addEventListener("mousedown", clicky);
  container.appendChild(button);
  bCounter.push(button);
}

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "styles.css";
document.head.appendChild(stylesheet);
