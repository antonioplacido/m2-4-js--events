// // so need to make 20 buttons, loop em till 20, and i guess make a CSS?

// const BIGBOX = document.querySelector(`body`);
// const button = document.createElement(`button`)

// for (let i=1; i<21; i++){
//     button.innerText = i;
//     button.classList =i;
//     button.style.backgroundColor = 'red';
//     button.style.color = 'white';
    
    
//     function clicky(){button.style.backgroundcolor = `green`;
//     }

//     BIGBOX.appendChild(button);
// }



// // const stylesheet = document.createElement('link');
// // stylesheet.rel = 'stylesheet';
// // stylesheet.href = 'styles.css';
// // document.head.appendChild(stylesheet);


const BIGBOX = document.querySelector("body");
const button = document.createElement("button");

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.classList = i;
  button.style.backgroundColor = "red";
  button.style.color = "white";
  function clicky() {
    button.style.backgroundColor = "green";
  }
  button.addEventListener("mousedown", clicky);
  BIGBOX.appendChild(button);
}
button.style.backgroundColor = "rgb(134,38,51)";

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);