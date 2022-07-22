// юзер вводить математичну дію
// 2 + 2
// нам треба її порахувати та вивести результат в консоль

// шукаємо перший пробіл
// беремо символи від 0 до пробілу та перетворюємо в цирфу
// аналогічно дальше
// а потім через switch обробляємо


let result = prompt('Введіть вираз в наступному форматі 2 + 3');
let num = '';
let operator;


for (let i = 0; i < result.length; i++) {

  if (result[i] !== ' ') {
  
    if (Number.isNaN(Number(result[i]))) {
     operator = result[i];
    }
 
  }

}
let indexOfOperator = result.indexOf(operator);

let a = +result.slice(0,indexOfOperator - 1);
let b =  +result.slice(indexOfOperator + 2);
let expresionResult;
switch(operator){
case '/':
expresionResult = a / b;
break;

case '*':
expresionResult = a * b;
break;

case '+':
expresionResult = a + b;
break;

case '-':
expresionResult = a - b;
break;
}

alert(expresionResult);




// юзер вводить математичну дію
// 2 + 2
// нам треба її порахувати та вивести результат в консоль

// шукаємо перший пробіл
// беремо символи від 0 до пробілу та перетворюємо в цирфу
// аналогічно дальше
// а потім через switch обробляємо

// 2 + 2
// 2+ 2

const input = prompt("Введіть приклад");
const firstSpace = input.indexOf(" ");
const a = +input.slice(0, firstSpace);
const newInput = input.slice(0, firstSpace) + input.slice(firstSpace + 1);
const secondSpace = newInput.indexOf(" ");
const b = +newInput.slice(secondSpace + 1);
const operator = newInput[firstSpace];

console.log(a, operator, b)

switch (operator) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Invalid");
}
