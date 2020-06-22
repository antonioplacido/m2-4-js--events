const container = document.querySelector("body");
const bCounter = [];

let clicked = false;

function clicky(event) {
  console.log(clicked);
  if (clicked === false) {
    event.target.style.backgroundColor = "red";
    clicked = true;
    console.log(clicked);
  } else {
    event.target.style.backgroundColor = "green";
    clicked = false;
    console.log(clicked);
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


const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);