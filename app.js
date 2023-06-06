const topDisplay = document.getElementById("prevNumber");
const bottomDisplay = document.getElementById("display");
const numButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".operatorBtn");
const equalsButton = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");

topDisplay.innerHTML = "";
bottomDisplay.innerHTML = "";
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

function divide(a, b) {
  return a / b;
}

// clear calculator
function clear() {
  bottomDisplay.innerHTML = "";
  topDisplay.innerHTML = "";
  firstNum = "";
  operator = "";
  secondNum = "";
}

// function operate(firstNum, operator, secondNum) {

// }

// number button press{}}}
Array.from(numButtons).forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      topDisplay.innerHTML = " ";
      firstNum += button.value;
      // console.log(firstNum)
      bottomDisplay.innerHTML += button.value;
    } else {
      secondNum += button.value;
      // console.log(secondNum)
      // prevDisplay.innerHTML += operator
      bottomDisplay.innerHTML += button.value;
    }
  });
});

// operator button press
operatorButtons.forEach((op) => {
  op.addEventListener("click", () => {
    operator = op.innerHTML;
    if (!(topDisplay.innerHTML.includes('='))) {
      topDisplay.innerHTML += firstNum + operator;
      // console.log(op.innerHTML)
    } else {
      topDisplay.innerHTML = firstNum + operator;
    }
    bottomDisplay.innerHTML = "";
  });
});

// equals button press
equalsButton.addEventListener("click", () => {
  if (secondNum !== "") {
    switch (operator) {
      case "+":
        topDisplay.innerHTML += secondNum + "=";
        bottomDisplay.innerHTML = add(parseInt(firstNum), parseInt(secondNum));
        firstNum = add(parseInt(firstNum), parseInt(secondNum));
        secondNum = "";
        break;
      case "-":
        topDisplay.innerHTML += secondNum + "=";
        bottomDisplay.innerHTML = subtract(
          parseInt(firstNum),
          parseInt(secondNum)
        );
        firstNum = subtract(parseInt(firstNum), parseInt(secondNum));
        secondNum = "";
        break;
      case "÷":
        topDisplay.innerHTML += secondNum + "=";
        bottomDisplay.innerHTML = divide(
          parseInt(firstNum),
          parseInt(secondNum)
        );
        firstNum = divide(parseInt(firstNum), parseInt(secondNum));
        secondNum = "";
        break;
      case "x":
        topDisplay.innerHTML += secondNum + "=";
        bottomDisplay.innerHTML = multiply(
          parseInt(firstNum),
          parseInt(secondNum)
        );
        firstNum = multiply(parseInt(firstNum), parseInt(secondNum));
        secondNum = "";
        break;
      default:
        console.log(firstNum);
        break;
    }
  }
});

// clear button press
clearBtn.addEventListener("click", () => {
  clear();
  // console.log(firstNum)
  // console.log(secondNum)
  // console.log(operator)
});

// console.log({firstNum})
// console.log({secondNum})
// console.log({operator})
// console.table({
//     firstNum,
//     secondNum,
//     operator
// })
