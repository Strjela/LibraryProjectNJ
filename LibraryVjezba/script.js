const submBtn = document.getElementById("subBtn");
const BookName = document.getElementById("BookName");
const AuthorName = document.getElementById("AuthorName");
const pageNumber = document.getElementById("pageNumber");
const readStatus = document.getElementById("readStat");

const container = document.getElementById("bookOutput");

const removeButton = document.querySelectorAll(".removeBtn");

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
      return alert(
        "Please fill out all required fields before adding a new book!"
      );

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
  const list = document.createElement("ul");
  list.classList.add("ako");

  const bookDiv = document.createElement("li");
  bookDiv.textContent = title;
  list.appendChild(bookDiv);
  container.appendChild(list);

  const authorDiv = document.createElement("li");
  authorDiv.textContent = author;
  list.appendChild(authorDiv);
  container.appendChild(list);

  const pageDiv = document.createElement("li");
  pageDiv.textContent = pages;
  list.appendChild(pageDiv);
  container.appendChild(list);

  const readDiv = document.createElement("li");
  readDiv.textContent = readStatus;
  list.appendChild(readDiv);
  container.appendChild(list);

  const removeDiv = document.createElement("li");
  let butt = document.createElement("button");
  let img = document.createElement("img");
  img.src = "./pictures/remove.png";
  butt.classList.add("removeBtn");
  butt.appendChild(img);

  butt.addEventListener("click", () => {
    const bookIndex = myLibrary.findIndex((book) => book.title === title);
    myLibrary.splice(bookIndex, 1);
    container.removeChild(list);
  });

  removeDiv.appendChild(butt);
  list.appendChild(removeDiv);
  container.appendChild(list);
}

function clearInput() {
  document.getElementById("form").reset();
}

addBookToLibrary();
