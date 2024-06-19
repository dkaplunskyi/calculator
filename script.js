function addition(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

let num1 = undefined;
let operator = '';
let num2 = undefined;

function operate(x, operator, y) {
  switch (operator) {
    case '+':
      return addition(x, y);
    case '-':
      return subtraction(x, y);
    case '*':
      return multiplication(x, y);
    case '/':
      return division(x, y);
  }
}

const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.symbol');
const equal = document.querySelector('.equal-btn');

let displayValue = undefined;

digits.forEach((digit) => {
  digit.addEventListener('click', (e) => {
    display.textContent += e.target.textContent;
    displayValue = display.textContent;
  });
})

operators.forEach((symbol) => {
  symbol.addEventListener('click', (e) => {
    num1 = parseInt(displayValue);
    operator = e.target.textContent;
    display.textContent = '';
  });
});

equal.addEventListener('click', () => {
  num2 = parseInt(displayValue);
  let result = operate(num1, operator, num2);
  display.textContent = result;
  console.log(result);
})