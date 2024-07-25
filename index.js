// console.log(`Hello`);
// console.log(`Love pizza`);

// window.alert(`This is an alert!`);
// window.alert(`I like pizza!`);

//This is a comment

/*
    This is a multiple line 
*/

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counter = document.getElementById("counter");

let count = 0;


increase.onclick = function() {
    count++;
    counter.textContent = count;
}

decrease.onclick = function() {
    count--;
    counter.textContent = count;
}

reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}