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

function operate(x, operator, y) {
  let result = '';
  switch (operator) {
    case '+':
      result = addition(x, y);
      break;
    case '-':
      result = subtraction(x, y);
      break;
    case '*':
      result = multiplication(x, y);
      break;
    case '/':
      result = division(x, y);
      break;
  }
  return result;
}

const display = document.querySelector('.display');
const clear = document.querySelector('.all-clear');

clear.addEventListener('click', () => {
  display.textContent = '';
  num1 = '';
  operator = '';
  num2 = '';
});

let num1 = '';
let operator = '';
let num2 = '';

function populateDisplay(content) {
  display.textContent += content;
}

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
  digit.addEventListener('click', (e) => {
    const digitContent = e.target.textContent;
    populateDisplay(digitContent);
    if (operator === '') {
      num1 += digitContent;
    } else {
      num2 += digitContent;
    }
  });
});

const operators = document.querySelectorAll('.symbol');
operators.forEach(symbol => {
  symbol.addEventListener('click', (e) => {
    if (num1 !== '' && num2 !== '') {
      // Evaluate the current expression
      const result = operate(parseFloat(num1), operator, parseFloat(num2));
      display.textContent = result + ' ' + e.target.textContent + ' ';
      num1 = result.toString();
      num2 = '';
      operator = e.target.textContent;
    } else if (num1 !== '') {
      operator = e.target.textContent;
      populateDisplay(` ${operator} `);
    }
  });
});

const resultBtn = document.querySelector('.equal-btn');
resultBtn.addEventListener('click', () => {
  if (num1 !== '' && operator !== '' && num2 !== '') {
    const result = operate(parseFloat(num1), operator, parseFloat(num2));
    display.textContent = result;
    num1 = result.toString();
    operator = '';
    num2 = '';
  }
});
