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