// Exercise 1.0
// ------------

// function add(first, second){
//     console.log(first+second);
// }

// add(2,3);
// add(4,5);



// // const body = document.querySelector(`body`);
// // body.addEventListener(`click`, function (){
// //     console.log('exercise-1');
// //     body.removeEventListener('click',function (){
// //         console.log('exercise-1' );
// // });


// /*target the "body" */

// const body = document.querySelector(`body`);
// const msg = document.getElementsByClassName(`msg`);

// function clickyEvent(){
//     msg.innerText = `Exercise 1`;
//     body.removeEventListener(`click`, clicky);
// }

// body.addEventListener(`click`,clickyEvent);
//     // msg.innertext = `Exercise 1`;
//     // body.removeEventListener(`click`);  //**need to call on the whole function  */

//     const body = document.querySelector('body');
//     const result = document.getElementById('result');
    


// // Add the event listener
// body.addEventListener('click', clickEvent);


// Create variables with DOM items
const body = document.querySelector('body');
const showMsg = document.getElementById('main');            

// The 'click' function
function clicky() {
  showMsg.innerText = 'Exercise 1';
  body.removeEventListener('click', clicky);
}

body.addEventListener('click', clicky);

// document.getElementsByClassName(`main`).addEventListener(`click`, showMsg);

// function showMsg(){
//     document.getElementById(`main`).innerText = `exercise 1`
// }