// 

const body = document.querySelector(`body`);
const result = document.getElementById(`result`);
const theTimer = Math.round(Math.random()*5);
console.log(theTimer);
const countdown = setTimeout(gameover,(theTimer*1000));

document.getElementById(`time`).innerText = theTimer;

function gameover(){
    result.innerText = `GAME OVER`;
    body.removeEventListener(`click`,clicky);
}

function clicky (){
    result.innerText = `BIG WINNER`;
    body.removeEventListener(`click`,clicky); 
    clearTimeout(countdown);
}

body.addEventListener(`click`,clicky);