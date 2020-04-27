let operator = "";
let num1 = 0;
let num2 = 0;
let decimalSet = true;
let operatorSet = true;
let numberSet = true;
window.onload = function() {
  let $dot = document.getElementById("dot").addEventListener("click", function() {
    if (decimalSet) {
      decimalSet = false;
      numberPress(".");
    }
  });
  let $0 = document.getElementById("zero").addEventListener("click", numberPress);
  let $1 = document.getElementById("$1").addEventListener("click", numberPress);
  let $2 = document.getElementById("$2").addEventListener("click", numberPress);
  let $3 = document.getElementById("$3").addEventListener("click", numberPress);
  let $4 = document.getElementById("$4").addEventListener("click", numberPress);
  let $5 = document.getElementById("$5").addEventListener("click", numberPress);
  let $6 = document.getElementById("$6").addEventListener("click", numberPress);
  let $7 = document.getElementById("$7").addEventListener("click", numberPress);
  let $8 = document.getElementById("$8").addEventListener("click", numberPress);
  let $9 = document.getElementById("$9").addEventListener("click", numberPress);
  let add = document.getElementById("add").addEventListener("click", operatorPress);
  let sub = document.getElementById("sub").addEventListener("click", operatorPress);
  let mul = document.getElementById("mul").addEventListener("click", operatorPress);
  let div = document.getElementById("div").addEventListener("click", operatorPress);
  let input = document.getElementById("input");
  let sign = document.getElementById("sign").addEventListener("click", changeSign);
  let equal = document.getElementById("equal").addEventListener("click", function() {
    result(true);
  });
  let clear = document.getElementById("clear").addEventListener("click", reset);
}
function numberPress(num) {
  if (numberSet) {
    if (num === ".") {
      input.innerHTML += ".";
    } else {
      if (input.innerHTML == 0) {
        input.innerHTML = this.innerHTML;
      } else {
        input.innerHTML += this.innerHTML;
      }
    }
  }
}
function operatorPress() {
  if (operatorSet) {
    operatorSet = false;
    toggleButtons();
    numberSet = true;
    numbersEnable();
    operator = this.innerHTML;
    console.log(operator);
    if (num1 == 0) {
      // console.log(parseInt(input.innerHTML));
      if ((input.innerHTML).indexOf(".") > -1) {
        num1 = parseFloat(input.innerHTML);
      } else {
        num1 = parseInt(input.innerHTML);
      }
      console.log("num1: " + num1);
    }
    clearInput();
  }
}
function changeSign() {
  input.innerHTML = parseInt(input.innerHTML) * -1;
}

function result(equalBtn) {
  operatorSet = true;
  toggleButtons();
  numberSet = false
  numbersDisable();
  if (num2 == 0) {
    // console.log(parseInt(input.innerHTML));
    if ((input.innerHTML).indexOf(".") > -1) {
      num2 = parseFloat(input.innerHTML);
    } else {
      num2 = parseInt(input.innerHTML);
    }
    console.log("num2: " + num2);
    clearInput();
  }
  let resultNum;
  console.log("operator: " + operator);
  switch (operator) {
    case "+":
      resultNum = num1 + num2;
      input.innerHTML = resultNum;
      break;
    case "-":
      resultNum = num1 - num2;
      input.innerHTML = resultNum;
      break;
    case "x":
      resultNum = num1 * num2;
      input.innerHTML = resultNum;
      break;
    case "÷":
      resultNum = num1 / num2;
      input.innerHTML = resultNum;
      break;
    default:
      console.log("error");
  }
  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("result: " + resultNum);
  num1 = resultNum;
  num2 = 0;
}
function reset() {
  // operator = "";
  operatorSet = true;
  decimalSet = true;
  numberSet = true;
  removeDisabled();
  num1 = 0;
  num2 = 0;
  input.innerHTML = 0;
}
function clearInput() {
  // operator = "";
  decimalSet = true;
  input.innerHTML = 0;
}
function toggleButtons() {
  let math = document.getElementsByClassName("math");
  for (let i = 0; i < math.length; i++) {
    math[i].classList.toggle("disabled");
  }
}
function numbersEnable() {
  let numbers = document.getElementsByClassName("number");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove("disabled");
  }
}
function numbersDisable() {
  let numbers = document.getElementsByClassName("number");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.add("disabled");
  }
}
function removeDisabled() {
  let numbers = document.getElementsByClassName("number");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove("disabled");
  }
  let math = document.getElementsByClassName("math");
  for (let i = 0; i < math.length; i++) {
    math[i].classList.remove("disabled");
  }
}
