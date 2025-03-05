import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  get format() {
    return this._format;
  }

  set format(value) {
    if (value != "pdf" && value != "epub" && value != "txt") {
      throw new Error("Invalid file format!");
    }
    this._format = value;
  }

  printInfo() {
    console.log(`"${this.title}" by ${this.author}, published in ${this.year} avaliable in ${this.format} format.`);
  }

  static createEPub(book, format) {
    if (!(book instanceof Book)) {
      throw new Error("Must be used instance of Book class!");
    }
    return new EBook(book.title, book.author, book.year, format);
  }
}