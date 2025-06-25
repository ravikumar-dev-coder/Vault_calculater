let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        let result = eval(display.innerText);
        if (isFinite(result)) {
            display.innerText = result;
        } else {
            display.innerText = 'Error';
            setTimeout(clearDisplay, 1000);
        }
    } catch {
        display.innerText = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}
