let library = [];
const addBook = document.querySelector(".addBook");
const infoForm = document.querySelector(".info");
const submitBook = document.querySelector(".submit");

const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector(".read");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.info = function () {
  return this.title + " by " + this.author + " " + this.pages + " pages ";
};

function addBookToLibrary(Title, Author, Pages) {
  const newBook = new Book(Title, Author, Pages);
  library = [newBook];
  console.log(library);
}

function displayBooks() {
  library.forEach((book) => {
    const bookCard = document.createElement("div");
    const readBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    readBtn.textContent = read.textContent;
    deleteBtn.textContent = "delete";
    bookCard.textContent = book.info();
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    document.body.appendChild(bookCard);

    readBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (readBtn.textContent === "Read") {
            readBtn.textContent = "Not Read";
        } else {
            readBtn.textContent = "Read";
        }
    });

    deleteBtn.addEventListener('click', () => {
        document.body.removeChild(bookCard);
    });
  });
}

addBook.addEventListener("click", () => {
  {
    infoForm.style.display === "none"
      ? (infoForm.style.display = "block")
      : (infoForm.style.display = "none");
    infoForm.style.display === "block"
      ? (addBook.style.display = "none")
      : (addBook.style.display = "block");
  }
});

read.addEventListener("click", (e) => {
  e.preventDefault();
  if (read.textContent === "Read") {
    read.textContent = "Not Read";
  } else {
    read.textContent = "Read";
  }
});

submitBook.addEventListener("click", () => {
  addBookToLibrary(title.value, author.value, pages.value);
  infoForm.style.display = "none";
  addBook.style.display = "block";
  displayBooks();
});
