// Exercise 1.1
// ------------
// console.log('exercise 1.1');

// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.

// If they click within the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:

// - Target the `<body>`
// - `setTimout` is your friend.
// - You'll need a flag (variable containing a boolean) 
// to keep track of whether the user has won or lost.

//Im just copy pasting the HTML for the index //


const body = document.querySelector(`body`);
const showMsg = document.getElementById(`main`);

const countdown = setTimeout(gameover, 1000);

function gameover(){
    showMsg.innerText = `GAME OVER`;
    clearTimeout
    body.removeEventListener(`click`,clicky);
}

function clicky() {
    showMsg.innerText = `BIG WINNER!`;
    body.removeEventListener(`click`,clicky);
    clearTimeout(countdown);
}

body.addEventListener(`click`,clicky);

// function gameover(){
//     showMsg.innerText = `GAME OVER`;
// }


