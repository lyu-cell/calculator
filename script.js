function add(num, num2) {
    return num+num2;
};
function subtract(num, num2) {
    return num+num2;
}
function multiply(num, num2) {
    return num*num2;
}
function divide(num, num2) {
    return num/num2;
}

let number1 = 0;
let number2 = 0;
let operator = "";


function operate(number1, number2, operator) {
    
    if(operator === "+") return add(number1, number2);
    if(operator === '-') return subtract(number1, number2);
    if(operator === '*') return multiply(number1, number2);
    if(operator === '/') return divide(number1, number2);
}

const screen = document.querySelector(".screen")

// Query selectors for all of the keys
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8")
const num9 = document.querySelector(".num9");
const numDivision = document.querySelector(".numDivide")
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5")
const num6 = document.querySelector(".num6");
const numMultiply = document.querySelector("numMultiply")
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2")
const num3 = document.querySelector(".num3")
const numSubtract = document.querySelector(".numSubtract")
const numDot = document.querySelector(".numDot");
const num0 = document.querySelector(".num0")
const numEqual = document.querySelector(".numEqual");
const numPlus = document.querySelector(".numPlus")
const clear = document.querySelector(".clear");
const erase = document.querySelector(".delete")


let displayNumber = [];


clear.addEventListener("click", () => {
    screen.textContent += clear.textContent
    displayNumber += clear.textContent
})

erase.addEventListener("click", () => {
    screen.textContent += erase.textContent
    displayNumber += erase.textContent
})

num1.addEventListener("click", () => {
    screen.textContent += num1.textContent
    displayNumber += num1.textContent
})

num2.addEventListener("click", () => {
    screen.textContent += num2.textContent
    displayNumber += num2.textContent
})

num3.addEventListener("click", () => {
    screen.textContent += num3.textContent
    displayNumber += num3.textContent
})

num4.addEventListener("click", () => {
    screen.textContent += num4.textContent
    displayNumber += num4.textContent
})

num5.addEventListener("click", () => {
    screen.textContent += num5.textContent
    displayNumber += num5.textContent
})

num6.addEventListener("click", () => {
    screen.textContent += num6.textContent
    displayNumber += num6.textContent
})

num7.addEventListener("click", () => {
    screen.textContent += num7.textContent
    displayNumber += num7.textContent
})

num8.addEventListener("click", () => {
    screen.textContent += num8.textContent
    displayNumber += num8.textContent
})

num9.addEventListener("click", () => {
    screen.textContent += num9.textContent
    displayNumber += num9.textContent
})

num0.addEventListener("click", () => {
    screen.textContent += num0.textContent
    displayNumber += num0.textContent
})

numDot.addEventListener("click", () => {
    screen.textContent += numDot.textContent
    displayNumber += numDot.textContent
})

numMultiply.addEventListener("click", () => {
    screen.textContent += numMultiply.textContent
    displayNumber += numMultiply.textContent
})

numDivision.addEventListener("click", () => {
    screen.textContent += numDivision.textContent
    displayNumber += numDivision.textContent
})

numSubtract.addEventListener("click", () => {
    screen.textContent += numSubtract.textContent
    displayNumber += numSubtract.textContent
})

numPlus.addEventListener("click", () => {
    screen.textContent += numPlus.textContent
    displayNumber += numPlus.textContent
})
/*

Goal:

1. Create the functions that populate the display 
   when you click the number buttons.



*/