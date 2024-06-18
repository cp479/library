// Book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Array to store book objects
let library = [];

// Add some example books
const exampleBooks = [
    new Book('A Dance with Dragons', 'George R.R. Martin', 1016, true),
    new Book('BBEG', 'Jerry Joe Seltzer', 105, false),
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, true)
];

// Add example books to the library and display them
exampleBooks.forEach(book => addBookToLibrary(book));

// Function to add book to library
function addBookToLibrary(book) {
    library.push(book);
    displayBooks();
}

// Function to toggle read status
function toggleReadStatus(index) {
    library[index].isRead = !library[index].isRead;
    displayBooks();
}

// Function to display books in the DOM
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear the book list

    library.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookInfo = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.isRead ? 'Yes' : 'No'}</p>
            <button onclick="toggleReadStatus(${index})">${book.isRead ? 'Mark as Unread' : 'Mark as Read'}</button>
        `;

        bookDiv.innerHTML = bookInfo;
        bookList.appendChild(bookDiv);
    });
}

// Add event listener to the button
document.getElementById('addBookButton').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('read').checked;

    // Create a new book object
    const newBook = new Book(title, author, pages, isRead);

    // Add the new book to the library
    addBookToLibrary(newBook);

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
});


