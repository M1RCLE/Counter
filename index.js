// LETS WRITE OUR OPERATIONS FOR CALCULATOR

const display = document.getElementById("display");

let result = 0;

function appendToDisplay(input) {
    display.value += input
    result += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(eroor) {
        display.value = "Error";
        console.log(error);
    }
}

function clearDisplay() {
    display.value = "";
}