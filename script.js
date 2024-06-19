const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const allClearBtn = document.querySelector('.all-clear');

const operators = ['+', '-', '*', '/', '=', '.'];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

allClearBtn.addEventListener('click', () => {
  display.textContent = '0';
});


let getInput = () => parseInt(display.textContent);

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let userInput = e.target.textContent;
    if (operators.includes(userInput)) {
      switch (userInput) {
        case '+':
          // addition();
          console.log('addition func');
          break;
        case '-':
          // subtraction();
          console.log('subtraction func');
          break;
        case '*':
          // multiplication();
          console.log('multiply func');
          break;
        case '/':
          // division();
          console.log('division func');
          break;
        case '=':
          // result();
          console.log('equal func');
          break;
        case '.':
          // subtraction();
          if (!display.textContent.includes('.')) {
            display.textContent += '.';
          }
          console.log('dot func');
          break;

        default:
          break;
      }
    } else if (numbers.includes(userInput)) {
      if (display.textContent !== "0") {
        display.textContent += userInput;
        console.log(userInput);
      } else {
        display.textContent = '';
        display.textContent = userInput;
        console.log(userInput);
      }
    }
  }
  )
})