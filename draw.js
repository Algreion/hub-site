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
    board: document.querySelector(".board"),
    nInput: document.querySelector("#numberInput"),
    rainbow: document.querySelector("#rainbow"),
}

let curr = "black"
let drawing = true
let rand = false
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

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

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

function handleColor (color) {
    rand = false;
    curr = color;
    elements.current.style.backgroundColor = curr;
}

elements.red.addEventListener("click", () => {
    handleColor("red");
})
elements.green.addEventListener("click", () => {
    handleColor("lime");
})
elements.blue.addEventListener("click", () => {
    handleColor("blue");
})
elements.yellow.addEventListener("click", () => {
    handleColor("yellow");
})
elements.black.addEventListener("click", () => {
    handleColor("black");
})
elements.white.addEventListener("click", () => {
    handleColor("white");
})
elements.cyan.addEventListener("click", () => {
    handleColor("cyan");
})
elements.pink.addEventListener("click", () => {
    handleColor("fuchsia");
})
elements.orange.addEventListener("click", () => {
    handleColor("orange");
})
elements.rainbow.addEventListener("click", () => {
    handleColor(getRandomColor());
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
    if (isNaN(cells) || cells < 1) {cells = 16};
    cells > 64 ? cells = 64 : cells = cells;
    generate(cells);
})

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "d") {
        drawing = !drawing
        elements.draw.classList.add("hl");
        setTimeout(() => elements.draw.classList.remove("hl"), 200);
    } else if (key === "n") {
        cells = Number(elements.nInput.value);
        if (isNaN(cells) || cells < 1) {cells = 16}
        cells > 64 ? cells = 64 : cells = cells;
        generate(cells);
        elements.gen.classList.add("hl");
        setTimeout(() => elements.gen.classList.remove("hl"), 200);
    } else if (key === "c") {
        wipe();
        elements.clear.classList.add("hl");
        setTimeout(() => elements.clear.classList.remove("hl"), 200);
    } else if (!isNaN(key)) {
        if (key == 1) {
            handleColor("red")
            elements.red.classList.add("hl");
            setTimeout(() => elements.red.classList.remove("hl"), 200);
        } else if (key == 2) {
            handleColor("orange")
            elements.orange.classList.add("hl");
            setTimeout(() => elements.orange.classList.remove("hl"), 200);
        } else if (key == 3) {
            handleColor("yellow")
            elements.yellow.classList.add("hl");
            setTimeout(() => elements.yellow.classList.remove("hl"), 200);
        } else if (key == 4) {
            handleColor("lime")
            elements.green.classList.add("hl");
            setTimeout(() => elements.green.classList.remove("hl"), 200);
        } else if (key == 5) {
            handleColor("cyan")
            elements.cyan.classList.add("hl");
            setTimeout(() => elements.cyan.classList.remove("hl"), 200);
        } else if (key == 6) {
            handleColor("blue")
            elements.blue.classList.add("hl");
            setTimeout(() => elements.blue.classList.remove("hl"), 200);
        } else if (key == 7) {
            handleColor("fuchsia")
            elements.pink.classList.add("hl");
            setTimeout(() => elements.pink.classList.remove("hl"), 200);
        } else if (key == 8) {
            handleColor("black")
            elements.black.classList.add("hl");
            setTimeout(() => elements.black.classList.remove("hl"), 200);
        } else if (key == 9) {
            handleColor("white")
            elements.white.classList.add("hl");
            setTimeout(() => elements.white.classList.remove("hl"), 200);
        } else if (key == 0) {
            handleColor(getRandomColor())
            elements.rainbow.classList.add("hl");
            setTimeout(() => elements.rainbow.classList.remove("hl"), 200);
        }
    }
})

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.blur();
    });
});

generate(cells)
