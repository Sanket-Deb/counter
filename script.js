let currentCount = 0;
const count = document.getElementById("counterLabel");

const decrement = () => { //function to decrement count
    if(currentCount> 0)
    currentCount = currentCount -1 ;
    count.innerHTML = currentCount;
}

const increment = () => {  //function to increment count
    currentCount = currentCount +1 ;
    count.innerHTML = currentCount;
}

const reset = () => {  //function to reset count
    currentCount = 0 ;
    count.innerHTML = currentCount;
}
