import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Six of Crows", "Leigh Bardugo", 2015);
const book2 = new Book("The Housemaid", "Freida McFadden", 2022);
const book3 = new Book("Throne of Glass", " Sarah J. Maas", 2012);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook = new EBook("Nevernight", "Jay Kristoff", 2016, "epub");
ebook.printInfo();

const books = [book1, book2, book3, ebook];

const oldestBook = Book.getOldestBook(books);
console.log("The oldest book:");
oldestBook.printInfo();

const newBook = EBook.createEPub(book1, "pdf");
newBook.printInfo();
