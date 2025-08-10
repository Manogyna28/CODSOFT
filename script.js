let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === "") return;
    let lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) return;
    currentInput += operator;
    display.value = currentInput;
}

function calculateResult() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}
