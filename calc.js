

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
    prev: document.querySelector("#previous"),
    del: document.querySelector("#del"),
    exp: document.querySelector("#exp"),
    open: document.querySelector("#open"),
    close: document.querySelector("#close"),
}

let previous = ""
let expression = ""

function displayResult (res) {
    elements.prev.textContent = previous;
    previous = String(res)
    elements.output.textContent = res
}

function displayExpression(exp) {
    if (exp === "") {exp = "0"}
    elements.output.textContent = exp
}

function handleResult(input) {
    if (typeof input === "number" || input === ".") {
        expression += input;
        if (expression.length > 1 && expression[0] == "0" && 
            !(["+", "-", "x", "÷",".","^"].includes(expression[1]))) 
            {expression = expression.slice(1)}
    } else if (["+", "-", "x", "÷", "^"].includes(input)) {
        if (input === "(" || input === ")" || !["+", "-", "x", "÷", "^"].includes(expression.slice(-1))) {
            expression += input;
        }
        else {expression = expression.slice(0, -1) + input}
    } else if (input === "=") {
        try {
            const cleanExpression = expression.replace(/x/g, "*").replace(/÷/g, "/").replace(/\^/g, "**");
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
        if (expression == "Infinity" || expression == "NaN") {expression = "0"}
        else {expression.length > 1 ? expression = expression.slice(0, -1) : expression = "0"}
    } else if (input === "PREV") {
        expression = elements.prev.textContent
    } else if (input === "(" || input === ")") {
        expression === "0" ? expression = input : expression += input
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
elements.prev.addEventListener("click", () => handleResult("PREV"));
elements.exp.addEventListener("click", () => handleResult("^"));
elements.open.addEventListener("click", () => handleResult("("));
elements.close.addEventListener("click", () => handleResult(")"));

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key)) {
        handleResult(Number(key));
        if (key === "1") {
            elements.one.classList.add("hl");
            setTimeout(() => elements.one.classList.remove("hl"), 150);
            } else if (key === "2") {
                elements.two.classList.add("hl");
                setTimeout(() => elements.two.classList.remove("hl"), 150);
            } else if (key === "3") {
                elements.three.classList.add("hl");
                setTimeout(() => elements.three.classList.remove("hl"), 150);
            } else if (key === "4") {
                elements.four.classList.add("hl");
                setTimeout(() => elements.four.classList.remove("hl"), 150);
            } else if (key === "5") {
                elements.five.classList.add("hl");
                setTimeout(() => elements.five.classList.remove("hl"), 150);
            } else if (key === "6") {
                elements.six.classList.add("hl");
                setTimeout(() => elements.six.classList.remove("hl"), 150);
            } else if (key === "7") {
                elements.seven.classList.add("hl");
                setTimeout(() => elements.seven.classList.remove("hl"), 150);
            } else if (key === "8") {
                elements.eight.classList.add("hl");
                setTimeout(() => elements.eight.classList.remove("hl"), 150);
            } else if (key === "9") {
                elements.nine.classList.add("hl");
                setTimeout(() => elements.nine.classList.remove("hl"), 150);
            } else if (key === "0") {
                elements.zero.classList.add("hl");
                setTimeout(() => elements.zero.classList.remove("hl"), 150);
        }
    } else if (key === "+") {
        handleResult("+");
        elements.plus.classList.add("hl");
        setTimeout(() => elements.plus.classList.remove("hl"), 150);
    } else if (key === "-") {
        handleResult("-");
        elements.minus.classList.add("hl");
        setTimeout(() => elements.minus.classList.remove("hl"), 150);
    } else if (key === "*") {
        handleResult("x");
        elements.multiply.classList.add("hl");
        setTimeout(() => elements.multiply.classList.remove("hl"), 150);
    } else if (key === "/") {
        handleResult("÷");
        elements.div.classList.add("hl");
        setTimeout(() => elements.div.classList.remove("hl"), 150);
    } else if (key === "^") {
        handleResult("^");
        elements.exp.classList.add("hl");
        setTimeout(() => elements.exp.classList.remove("hl"), 150);
    } else if (key === "(") {
        handleResult("(");
        elements.open.classList.add("hl");
        setTimeout(() => elements.open.classList.remove("hl"), 150);
    } else if (key === ")") {
        handleResult(")");
        elements.close.classList.add("hl");
        setTimeout(() => elements.close.classList.remove("hl"), 150);
    } else if (key === ".") {
        handleResult(".");
        elements.dot.classList.add("hl");
        setTimeout(() => elements.dot.classList.remove("hl"), 150);
    } else if (key === "Enter" || key === "=") {
        handleResult("=");
        elements.equal.classList.add("hl");
        setTimeout(() => elements.equal.classList.remove("hl"), 150);
    } else if (key === "Backspace") {
        handleResult("DEL");
        elements.del.classList.add("hl");
        setTimeout(() => elements.del.classList.remove("hl"), 150);
    } else if (key === "Escape" || key === "c") {
        handleResult("CLS");
        elements.clear.classList.add("hl");
        setTimeout(() => elements.clear.classList.remove("hl"), 150);
    }
});

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.blur();
    });
});
