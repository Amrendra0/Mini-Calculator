const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

let expression = "";

// Append numbers and decimal points
function appendNumber(num) {
    expression += num;
    updateDisplay();
}

// Append operators with basic validation
function appendOperator(op) {
    const lastChar = expression.slice(-1);
    if ("+-*/".includes(lastChar)) {
        expression = expression.slice(0, -1) + op;
    } else if (expression !== "") {
        expression += op;
    }
    updateDisplay();
}

// Clear entire expression and result
function clearDisplay() {
    expression = "";
    resultDisplay.textContent = "0";
    updateDisplay();
}

// Delete the last character
function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Perform calculation
function calculate() {
    try {
        const safeExpression = expression.replace(/÷/g, "/").replace(/×/g, "*");
        const result = eval(safeExpression);
        resultDisplay.textContent = result;
    } catch {
        resultDisplay.textContent = "Error";
    }
}

// Update the expression display
function updateDisplay() {
    expressionDisplay.textContent = expression || "0";
}