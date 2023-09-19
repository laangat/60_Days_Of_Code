class Book{
    //constructor method is a special method that gets called when an instance of the class is created
    constructor(title, author, ISBN, availability = true) {
        //assign parameter values to the respective properties of the instance
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.availability = availability;
    }
}

//the "Library" class

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(ISBN) {
        this.books = this.books.filter((book) => book.ISBN !== ISBN) ;
}

displayAvailableBooks() {
    console.log("Available Books: ");
    this.books.forEach((book, index) => {
        if (book.availability) {
            console.log(`${index+1}. ${book.title} by ${book.author}`);
        }
    });
}
}

class ReferenceBook extends Book {
    constructor(title, author, ISBN, category, availability = true) {
        super(title, author, ISBN, category, availability);
        this.category = category;
    }
}

//creating instances of the Library, Book, and ReferenceBook classes
const library = new Library();

//add books to the library
const book1 = new Book("My Life in Crime", "John Kiriamiti", "9473726281");
const book2 = new Book("Caucasian Chalk Circle", "Harper Lee", "9473725261");
const book3 = new ReferenceBook("1984", "Brandon Kiprotich", "94737465739","Dystopian", "Fiction");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

//display available books
library.displayAvailableBooks();

console.log("\nRemoving book...");

//remove a book from the library
library.removeBook("94737465739");

//display all available books
library.displayAvailableBooks();