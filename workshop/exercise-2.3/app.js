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

// - You can use `position: absolute`, `top`, and `left` to control where the buttons are located.
// - You can use inline styles (eg. `node.style.position = 'absolute'`)

for (i = 1; i <= 20; i++) {
  randomY = Math.round(Math.random() * 1000);
  randomX = Math.round(Math.random() * 1000);
  const button = document.createElement("button");
  button.innerText = i;
  button.id = "btn" + i;
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.position = `absolute`;
  button.style.top = randomY + "px";
  button.style.left = randomX + "px";
  button.addEventListener("mousedown", clicky);
  container.appendChild(button);
  bCounter.push(button);
}

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "styles.css";
document.head.appendChild(stylesheet);
