export {}

const firstNumDisplay = document.getElementById("firstNumDisplay") as HTMLInputElement
const secondNumDisplay = document.getElementById("secondNumDisplay") as HTMLInputElement
const operatorDisplay = document.getElementById("operatorDisplay") as HTMLInputElement
const resultDisplay = document.getElementById("resultDisplay") as HTMLInputElement

// Number buttons
const numberBtn = document.querySelectorAll(".number")

// Operator buttons
const addBtn = document.getElementById("btn-add") as HTMLButtonElement;
const subtractBtn = document.getElementById("btn-subtract") as HTMLButtonElement;
const multiplyBtn = document.getElementById("btn-multiply") as HTMLButtonElement;
const divideBtn = document.getElementById("btn-divide") as HTMLButtonElement;
const dotBtn = document.getElementById("btn-dot") as HTMLButtonElement;

// Action buttons
const equalsBtn = document.getElementById("btn-equals") as HTMLButtonElement;

type TInputValue = string|number;
type TOperator = "+" | "-" | "*" | "/" | "=";

let firstNum : number = 0;
let secondNum : number = 0;
let inputOperator: TOperator | undefined;
let result: TInputValue = 0;


const addValue = () => {
  numberBtn.forEach((btn,index)=>{
    btn.addEventListener("click", ()=>{
      if (!operatorDisplay.value){
        firstNumDisplay.value += 9-index;
      }else{
        secondNumDisplay.value += 9-index;
      }
    })
  })
    dotBtn.addEventListener("click",()=>{
      if (!operatorDisplay.value) {
        if (!firstNumDisplay.value.includes(".")) {
          firstNumDisplay.value += ".";
        }
      } else {
        if (!secondNumDisplay.value.includes(".")) {
          secondNumDisplay.value += ".";
        }
      }
  })
}




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


  equalsBtn.addEventListener("click", () =>{
    firstNum = Number(firstNumDisplay.value);
    secondNum = Number(secondNumDisplay.value);
    calculate (firstNum,secondNum,operatorDisplay.value)
    resultDisplay.value = result as string;
    return 0;
  })
};


const calculate = (firstNum: number, secondNum: number, operator: string) => {
  switch (operator){
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
      if (secondNum === 0){
        result = "Error"
        break;
      }
      result = firstNum / secondNum;
      break;
  }
}


const coreLogic = async() => {
  addOperator();
  addValue()
}
coreLogic()


