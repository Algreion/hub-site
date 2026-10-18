const shelf = document.querySelector(".shelf");
const book = document.querySelector(".book");
const information = document.querySelector("#info");
const add = document.querySelector("#newbook");
const mark = document.querySelector("#mark");
const popupForm = document.getElementById("popupForm");
const overlay = document.getElementById("overlay");
const submitBook = document.getElementById("submitBook");
const closePopup = document.getElementById("closePopup");

const library = [];
let selected = null;

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${String(this.pages)} pages, ${!this.read ? "not read yet." : "already read."}`
    }
};

function addBook (book) {
    library.push(book);
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const harryPotter1 = new Book("Harry Potter: The Philosopher's Stone", "J.K. Rowling", 223, false)
const nineteenEightyFour = new Book("1984", "George Orwell", 183, false);
const frankestein = new Book("Frankestein", "Mary Shelley", 232, false)
const goneWithTheWind = new Book("Gone with the Wind", "Margaret Mitchell", 1037, false)

let bookstoAdd = [theHobbit, harryPotter1, nineteenEightyFour, frankestein, goneWithTheWind];
bookstoAdd.forEach(book => addBook(book));

function randomColor () {
    const r = Math.floor(Math.random()*55);
    const g = Math.floor(Math.random()*155);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
};

function addToShelf () {
    library.forEach(book => {
        const newBook = document.createElement("div");
        newBook.className = "book";
        newBook.id = String(book.id);
        shelf.appendChild(newBook);
        newBook.textContent = book.title;
        newBook.style.background = randomColor();
        newBook.addEventListener("click", () => {
            if (selected === book) {
                selected = null;
                information.textContent = "Click on a book to view more details.";
            }
            else {
                information.textContent = book.info();
            selected = book;
            }
        })
    })
};

addToShelf();

mark.addEventListener("click", () => {
    if (selected != null) {
        selected.read = !selected.read;
        information.textContent = selected.info();
    }
});

add.addEventListener("click", () => {
    popupForm.style.display = "block";
    overlay.style.display = "block";
});

closePopup.addEventListener("click", () => {
    popupForm.style.display = "none";
    overlay.style.display = "none";
});

submitBook.addEventListener("click", () => {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = Number(document.getElementById("pages").value.trim());
    const read = document.getElementById("read").checked;

    if (title && author && !isNaN(pages)) {
        const newBook = new Book(title, author, pages, read);
        addBook(newBook);

        const newBookDiv = document.createElement("div");
        newBookDiv.className = "book";
        newBookDiv.textContent = newBook.title;
        newBookDiv.style.background = randomColor();
        newBookDiv.addEventListener("click", () => {
            if (selected === newBook) {
                selected = null;
                information.textContent = "Click on a book to view more details.";
            } else {
                information.textContent = newBook.info();
                selected = newBook;
            }
        });
        shelf.appendChild(newBookDiv);
    }

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
    popupForm.style.display = "none";
    overlay.style.display = "none";
});
