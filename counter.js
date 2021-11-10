
/* increase and decrease buttons */

const incrementButton = document.getElementById("increase-btn");
const decrementButton = document.getElementById("decrease-btn");

/* the counter on the page button */ 
const counterBoard = document.getElementById("counter-board");

/* variable holding the counter value */
let counterValue = 0;

/* function that increases the value by 1 */
const increaseCounter = () =>{
    counterBoard.innerHTML = ++counterValue;
} 

/* function that decreases the value by 1 */
const decreaseCounter = () =>{
    counterBoard.innerHTML = --counterValue;
} 

/* add event listeners to buttons */ 
incrementButton.addEventListener('click', increaseCounter);
decrementButton.addEventListener('click', decreaseCounter); 