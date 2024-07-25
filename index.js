// LETS WRITE OUR OPERATIONS FOR CALCULATOR

const display = document.getElementById("display");

let result = 0;
let refresh = false;

function appendToDisplay(input) {
    if (input >= '0' && input <= '9' || input == '.') {
        if (!refresh) {
            display.value += input;
        } else {
            display.value = "";
            display.value += input;
            refresh = false;
        }
    } else {
        try {
            console.log("you are here");
            display.value = eval(result);
            refresh = true;
        } catch (error) {
            display.value = "Error";
            console.log(error);
        }
    }
    result += input;
}

function calculate() {
    try {
        display.value = eval(result);
    } catch(eroor) {
        display.value = "Error";
        console.log(error);
    }
}

function clearDisplay() {
    display.value = "";
    result = "";
}