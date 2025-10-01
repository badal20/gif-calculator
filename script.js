function press(key) {
  let display = document.getElementById('display');
  if (display.innerText === '0') {
    display.innerText = key;
  } else {
    display.innerText += key;
  }
}

function calculate() {
  let display = document.getElementById('display');
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').innerText = '0';
}