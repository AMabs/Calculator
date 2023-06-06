const prevDisplay = document.getElementById("prevNumber")
const display = document.getElementById("display")
const numButtons = document.querySelectorAll(".numBtn")
const operatorButtons = document.querySelectorAll(".operatorBtn")
const equalsButton = document.getElementById("equalsBtn")
const clearBtn = document.getElementById("clearBtn")

prevDisplay.innerHTML = ""
display.innerHTML = ""
let firstNum = "";
let operator = "";
let secondNum = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a ,b) {
    return a / b;
}

// clear calculator
function clear() {
    display.innerHTML = ""
    prevDisplay.innerHTML = ""
    firstNum = "";
    operator = "";
    secondNum = "";
}

// function operate(firstNum, operator, secondNum) {
    
// }

// number button press
Array.from(numButtons).forEach(button => {
    button.addEventListener("click", () => {
        if (operator === "") {
            prevDisplay.innerHTML = " "
            firstNum += button.value
            // console.log(firstNum)
            display.innerHTML += button.value
        } else {
            secondNum += button.value
            // console.log(secondNum)
            // prevDisplay.innerHTML += operator
            display.innerHTML += button.value
        }
    })
})

// operator button press
operatorButtons.forEach(op => {
    op.addEventListener("click", () => {
        operator += op.innerHTML
        prevDisplay.innerHTML += firstNum + operator 
        // console.log(op.innerHTML)
        display.innerHTML = " "
    })
})

// operatorButtons.forEach(op => {
//     op.addEventListener("click", () => {
//         if (prevDisplay !== " ")
//         operator += op.innerHTML
//         prevDisplay.innerHTML += firstNum + operator 
//         // console.log(op.innerHTML)
//         display.innerHTML = " "
//     })
// })

// equals button press
equalsButton.addEventListener("click", () => {
    switch(operator) {
        case "+":
            prevDisplay.innerHTML += secondNum + "="
            display.innerHTML = add(parseInt(firstNum), parseInt(secondNum))
            // firstNum = add(parseInt(firstNum), parseInt(secondNum))
            break
        case "-":
            prevDisplay.innerHTML += secondNum + "="
            display.innerHTML = subtract(parseInt(firstNum), parseInt(secondNum))
            break
        case "÷":
            prevDisplay.innerHTML += secondNum + "="
            display.innerHTML = divide(parseInt(firstNum), parseInt(secondNum))
            break
        case "x":
            prevDisplay.innerHTML += secondNum + "="
            display.innerHTML = multiply(parseInt(firstNum), parseInt(secondNum))
            break
        default:
            break
    }
})

// clear button press
clearBtn.addEventListener("click", () => {
    clear()
    // console.log(firstNum)
    // console.log(secondNum)
    // console.log(operator)
})




// Array.from(numButtons).forEach(button => {
//     button.addEventListener("click", () => {
//         console.log(button.value)
//         display.innerHTML = button.value
//     })
// })

// numButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const numButtonValue = numButtons.forEach(button => button.value)
//         console.log(numButtonsValue);
//         display.innerHTML = numButtonsValue
//     })
// })