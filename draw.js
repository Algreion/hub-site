const elements = {
    draw: document.querySelector("#draw"),
    gen: document.querySelector("#new"),
    clear: document.querySelector("#clear"),
    current: document.querySelector("#current"),
    red: document.querySelector("#r"),
    green: document.querySelector("#g"),
    blue: document.querySelector("#b"),
    yellow: document.querySelector("#y"),
    black: document.querySelector("#bl"),
    white: document.querySelector("#w"),
    pink: document.querySelector("#p"),
    cyan: document.querySelector("#c"),
    orange: document.querySelector("#o"),
    violet: document.querySelector("#v"),
    board: document.querySelector(".board"),
    nInput: document.querySelector("#numberInput"),
}

let curr = "black"
let drawing = true
let cells = 16

function generate (n) {
    elements.board.replaceChildren()
    elements.board.style.setProperty("--grid-size", n)
    for (let i = 0; i < n**2; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        elements.board.appendChild(cell);
        cell.addEventListener("mouseenter", () => {if (drawing) {cell.style.backgroundColor = curr}})
        cell.addEventListener("click", () => {if (drawing) {cell.style.backgroundColor = curr}})
    }
};

function paint () {
    const all = document.querySelectorAll(".board .cell")
    all.forEach(div => {
        div.style.backgroundColor = curr;
    })
}

function wipe () {
    let prev = curr;
    curr = "white";
    paint();
    curr = prev;
}

elements.red.addEventListener("click", () => {
    curr = "red";
    elements.current.style.backgroundColor = "red";
})
elements.green.addEventListener("click", () => {
    curr = "lime";
    elements.current.style.backgroundColor = "lime";
})
elements.blue.addEventListener("click", () => {
    curr = "blue";
    elements.current.style.backgroundColor = "blue";
})
elements.yellow.addEventListener("click", () => {
    curr = "yellow";
    elements.current.style.backgroundColor = "yellow";
})
elements.black.addEventListener("click", () => {
    curr = "black";
    elements.current.style.backgroundColor = "black";
})
elements.white.addEventListener("click", () => {
    curr = "white";
    elements.current.style.backgroundColor = "white";
})
elements.cyan.addEventListener("click", () => {
    curr = "cyan";
    elements.current.style.backgroundColor = "cyan";
})
elements.pink.addEventListener("click", () => {
    curr = "fuchsia";
    elements.current.style.backgroundColor = "fuchsia";
})
elements.orange.addEventListener("click", () => {
    curr = "orange";
    elements.current.style.backgroundColor = "orange";
})
elements.violet.addEventListener("click", () => {
    curr = "blueviolet";
    elements.current.style.backgroundColor = "blueviolet";
})


elements.current.addEventListener("click", () => {
    paint();
})

elements.clear.addEventListener("click", () => {
    wipe();
})

elements.draw.addEventListener("click", () => {
    drawing = !drawing;
})

elements.gen.addEventListener("click", () => {
    cells = Number(elements.nInput.value);
    generate(cells);
})

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "d") {
        drawing = !drawing
        elements.draw.classList.add("hl");
        setTimeout(() => elements.draw.classList.remove("hl"), 150);
    } else if (key === "n") {
        cells = Number(elements.nInput.value);
        isNaN(cells) ? cells = 16 : cells > 100 ? cells = 100 : cells = cells
        generate(cells);
        elements.gen.classList.add("hl");
        setTimeout(() => elements.gen.classList.remove("hl"), 150);
    } else if (key === "c") {
        wipe();
        elements.clear.classList.add("hl");
        setTimeout(() => elements.clear.classList.remove("hl"), 150);
    }})

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.blur();
    });
});

generate(cells)
