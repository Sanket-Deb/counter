let currentCount = 0;
const count = document.getElementById("counterLabel");
const decrementButton= document.getElementById("decrementButton");
const resetButton= document.getElementById("resetButton");
const incrementButton= document.getElementById("incrementButton");

const decrement = () => { //function to decrement count
    if(currentCount> 0)
    currentCount = currentCount -1 ;
    count.innerHTML = currentCount;
}
decrementButton.addEventListener("click", decrement);

const increment = () => {  //function to increment count
    currentCount = currentCount +1 ;
    count.innerHTML = currentCount;
}
incrementButton.addEventListener("click", increment);

const reset = () => {  //function to reset count
    currentCount = 0 ;
    count.innerHTML = currentCount;
}
resetButton.addEventListener("click", reset);
