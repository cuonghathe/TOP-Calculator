const firstNumDisplay = document.getElementById("firstNumDisplay");
const secondNumDisplay = document.getElementById("secondNumDisplay");
const operatorDisplay = document.getElementById("operatorDisplay");
const resultDisplay = document.getElementById("resultDisplay");
// Number buttons
const numberBtn = document.querySelectorAll(".number");
// Operator buttons
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const dotBtn = document.getElementById("btn-dot");
// Action buttons
const equalsBtn = document.getElementById("btn-equals");
let firstNum = 0;
let secondNum = 0;
let inputOperator;
let result = 0;
const addValue = () => {
    numberBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (!operatorDisplay.value) {
                firstNumDisplay.value += 9 - index;
            }
            else {
                secondNumDisplay.value += 9 - index;
            }
        });
    });
    dotBtn.addEventListener("click", () => {
        if (!operatorDisplay.value) {
            if (!firstNumDisplay.value.includes(".")) {
                firstNumDisplay.value += ".";
            }
        }
        else {
            if (!secondNumDisplay.value.includes(".")) {
                secondNumDisplay.value += ".";
            }
        }
    });
};
const addOperator = () => {
    addBtn.addEventListener("click", () => {
        operatorDisplay.value = "+";
    });
    subtractBtn.addEventListener("click", () => {
        operatorDisplay.value = "-";
    });
    multiplyBtn.addEventListener("click", () => {
        operatorDisplay.value = "*";
    });
    divideBtn.addEventListener("click", () => {
        operatorDisplay.value = "/";
    });
    equalsBtn.addEventListener("click", () => {
        firstNum = Number(firstNumDisplay.value);
        secondNum = Number(secondNumDisplay.value);
        calculate(firstNum, secondNum, operatorDisplay.value);
        resultDisplay.value = result;
        return 0;
    });
};
const calculate = (firstNum, secondNum, operator) => {
    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "/":
            if (secondNum === 0) {
                result = "Error";
                break;
            }
            result = firstNum / secondNum;
            break;
    }
};
const coreLogic = async () => {
    addOperator();
    addValue();
};
coreLogic();
export {};
