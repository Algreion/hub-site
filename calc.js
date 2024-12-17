const elements = {
    output: document.querySelector(".header"),
    clear: document.querySelector("#CLS"),
    seven: document.querySelector("#seven"),
    eight: document.querySelector("#eight"),
    nine: document.querySelector("#nine"),
    div: document.querySelector("#div"),
    four: document.querySelector("#four"),
    five: document.querySelector("#five"),
    six: document.querySelector("#six"),
    multiply: document.querySelector("#x"),
    one: document.querySelector("#one"),
    two: document.querySelector("#two"),
    three: document.querySelector("#three"),
    minus: document.querySelector("#minus"),
    dot: document.querySelector("#dot"),
    zero: document.querySelector("#zero"),
    plus: document.querySelector("#plus"),
    equal: document.querySelector("#equal"),
    previous: document.querySelector("#previous"),
    del: document.querySelector("#del"),
    exp: document.querySelector("#exponent"),
}

let previous = ""
let expression = ""

function displayResult (res) {
    elements.previous.textContent = previous;
    previous = res
    elements.output.textContent = res
}

function displayExpression(exp) {
    elements.output.textContent = exp
}

function handleResult(input) {
    if (typeof input === "number" || input === ".") {
        expression += input;
        if (expression.length>1 && expression[0] == "0") {expression = expression.slice(1)}
    } else if (["+", "-", "x", "÷"].includes(input)) {
        if (!["+", "-", "x", "÷"].includes(expression.slice(-1))) {
            expression += input;
        }
        else {expression = expression.slice(0, -1) + input}
    } else if (input === "=") {
        try {
            const cleanExpression = expression.replace(/x/g, "*").replace(/÷/g, "/");
            const evalResult = eval(cleanExpression);
            displayResult(evalResult);
            expression = String(evalResult);
        } catch (error) {
            displayResult("Error");
            expression = "";
        }
        return;
    } else if (input === "CLS") {
        expression = "";
        displayResult(0);
        return;
    } else if (input === "DEL") {
        expression.length > 1 ? expression = expression.slice(0, -1) : expression = "0";
    }
    displayExpression(expression);
}


elements.clear.addEventListener("click", () => handleResult("CLS"));
elements.seven.addEventListener("click", () => handleResult(7));
elements.eight.addEventListener("click", () => handleResult(8));
elements.nine.addEventListener("click", () => handleResult(9));
elements.div.addEventListener("click", () => handleResult("÷"));
elements.four.addEventListener("click", () => handleResult(4));
elements.five.addEventListener("click", () => handleResult(5));
elements.six.addEventListener("click", () => handleResult(6));
elements.multiply.addEventListener("click", () => handleResult("x"));
elements.one.addEventListener("click", () => handleResult(1));
elements.two.addEventListener("click", () => handleResult(2));
elements.three.addEventListener("click", () => handleResult(3));
elements.minus.addEventListener("click", () => handleResult("-"));
elements.dot.addEventListener("click", () => handleResult("."));
elements.zero.addEventListener("click", () => handleResult(0));
elements.plus.addEventListener("click", () => handleResult("+"));
elements.equal.addEventListener("click", () => handleResult("="));
elements.del.addEventListener("click", () => handleResult("DEL"));

elements.previous.addEventListener("click", () => {
    if (result !== 0) {
        expression += result;
        displayExpression(expression);
    }
});
