const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let memory = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const action = button.getAttribute('data-action');

    if (action) {
      handleAction(action);
    } else if (value) {
      handleInput(value);
    }
  });
});

function handleInput(value) {
  if (display.value === '0' || display.value === 'Error') {
    display.value = '';
  }
  display.value += value;
}

function handleAction(action) {
  switch (action) {
    case 'clear':
      display.value = '';
      break;
    case 'equal':
      calculate();
      break;
    case 'mc':
      memory = 0;
      break;
    case 'mr':
      display.value += memory;
      break;
    case 'ms':
      memory = parseFloat(display.value) || 0;
      break;
    case 'mplus':
      memory += parseFloat(display.value) || 0;
      break;
  }
}

function calculate() {
  try {
    let expr = display.value;
    
    expr = expr.replace(/×/g, '*').replace(/÷/g, '/');
    
    if (/^[0-9+\-*/().\s]+$/.test(expr)) {
      const result = new Function(`return ${expr}`)();
      
      if (result === Infinity || result === -Infinity) {
        display.value = 'Error';
      } else {
        display.value = Math.round(result * 100000000) / 100000000;
      }
    } else {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}