const submBtn = document.getElementById("subBtn");
const BookName = document.getElementById("BookName");
const AuthorName = document.getElementById("AuthorName");
const pageNumber = document.getElementById("pageNumber");
const readStatus = document.getElementById("readStat");

const container = document.getElementById("bookOutput");

console.log(container);

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  submBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      BookName.value === "" ||
      AuthorName.value === "" ||
      pageNumber.value === "" ||
      readStatus.value === "Did you read this book?"
    )
      return;

    let titleName = BookName.value;
    let author = AuthorName.value;
    let page = pageNumber.value;
    let readSt = readStatus.value;
    myLibrary.push(new Book(titleName, author, page, readSt));
    console.log(myLibrary);
    displayNewBook(titleName, author, page, readSt);
    clearInput();
  });
}

function displayNewBook(title, author, pages, readStatus) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("content");
  bookDiv.textContent = title;
  container.appendChild(bookDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("content");
  authorDiv.textContent = author;
  container.appendChild(authorDiv);

  const pageDiv = document.createElement("div");
  pageDiv.classList.add("content");
  pageDiv.textContent = pages;
  container.appendChild(pageDiv);

  const readDiv = document.createElement("div");
  readDiv.classList.add("content");
  readDiv.textContent = readStatus;
  container.appendChild(readDiv);
}



function clearInput() {
  document.getElementById("form").reset();
}


addBookToLibrary();