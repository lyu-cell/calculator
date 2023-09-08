function add(num, num2) {
    return num+num2;
};
function subtract(num, num2) {
    return num-num2;
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
    
    if(operator === "+") return add(number1, number2)
    if(operator === '-') return subtract(number1, number2);
    if(operator === '×') return multiply(number1, number2);
    if(operator === '÷') return divide(number1, number2);
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
const numMultiply = document.querySelector(".numMultiply")
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


let displayNumber = "";

num1.addEventListener("click", () => {
    screen.textContent += 1
    displayNumber += 1
})

num2.addEventListener("click", () => {
    screen.textContent += 2
    displayNumber += 2
})

num3.addEventListener("click", () => {
    screen.textContent += num3.textContent
    displayNumber += 3
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
    displayNumber += numDot.textContent;
})

function fullOp() {
    let arrNumber = Array.from(displayNumber)
    let numArr = Array.from((arrNumber.slice(0, arrNumber.indexOf(operator))))
    number1 = Number(numArr.join().replaceAll(",", ""))
    let indexOp = arrNumber.indexOf(operator) + 1
    numArr2 = arrNumber.slice(indexOp)
    number2 = Number(numArr2.join().replaceAll(",", ""))
    return screen.textContent = operate(number1, number2, operator), number1 = operate(number1, number2, operator),
    number2 = "", displayNumber = `${number1}`;
}

function fullOpV2() {
    let arrNumber = Array.from(displayNumber)
    let numArr = Array.from((arrNumber.slice(0, arrNumber.indexOf(operator))))
    number1 = Number(numArr.join().replaceAll(",", ""))
    let indexOp = arrNumber.indexOf(operator) + 1
    let numArr2 = arrNumber.slice(indexOp)
    number2 = Number(numArr2.join().replaceAll(",", ""))
    number1 = operate(number1, number2, operator)
    number2 = 0
    displayNumber = ""
    displayNumber += number1;
    return screen.textContent = number1;
}


// function numberX() {
//     let arrNumber = Array.from(displayNumber)
//     let numArr = []
//     if(arrNumber.length > 1) {
//         numArr = Array.from((arrNumber.slice(0, arrNumber.indexOf(operator))))
//         return numArr;
//     } 
//     if (arrNumber.length === 1) {
//         numArr = Array.from((arrNumber.slice(0)))
//         return numArr;
//     }
// 
//     number1 = Number(numArr.join().replaceAll(",", ""))
//     return number1
// }

function numberY() {
    let arrNumber = Array.from(displayNumber)
    let indexOp = arrNumber.indexOf(operator) + 1
    let numArr2 = arrNumber.slice(indexOp)
    return Number(numArr2.join().replaceAll(",", ""))
}


numMultiply.addEventListener("click", () => {
    screen.textContent += "×"
    if( numberY() !== 0 && operator !== "") {
        screen.textContent = "";
        return fullOpV2(), operator = "×", displayNumber += operator,
        screen.textContent += operator
    }
    displayNumber += "×"
    operator = "×"
})

numDivision.addEventListener("click", () => {
    screen.textContent += "÷"
    if( numberY() !== 0 && operator !== "") {
        screen.textContent = "";
        return fullOpV2(), operator = "÷", displayNumber += operator,
        screen.textContent += operator
    }
    displayNumber += "÷"
    operator = "÷"
})

numSubtract.addEventListener("click", () => {
    screen.textContent += "-"
    if( numberY() !== 0 && operator !== "") {
        screen.textContent = "";
        return fullOpV2(), operator = "-", displayNumber += operator,
        screen.textContent += operator
    }
    displayNumber += "-"
    operator = "-"
})

numPlus.addEventListener("click", () => {
    screen.textContent += "+"
    if( numberY() !== 0 && operator !== "") {
        screen.textContent = "";
        return fullOpV2(), operator = "+", displayNumber += operator,
        screen.textContent += operator
    }
    displayNumber += "+"
    operator = "+"
})

numEqual.addEventListener("click", () => {
    fullOp()
})

clear.addEventListener("click", () => {
    number1 = 0;
    number2 = 0; 
    operator = "";
    displayNumber = ""
    screen.textContent = "";
})




/*

when the operator button of the calculator is clicked check if variable number2 has any value - yes?

then run the opVr2 function which will then take those three variable containing the two values, operator and then run needed formula.

and pass the value to number1 variable and append it to the calculator screen 

then assign the new clicked operator to the variable operator for further calculations.
*/
