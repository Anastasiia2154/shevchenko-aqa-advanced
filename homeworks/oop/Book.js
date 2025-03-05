export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Title must be a non-empty string");
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Author must be a non-empty string");
    }
    this._author = value;
  }

  set year(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Year must be a valid number");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`"${this.title}" by ${this.author}, published in ${this.year}.`);
  }

  static getOldestBook(books) {
    if (!Array.isArray(books)) {
      throw new Error("Array of books mustn't be empty!");
    }
    return books.reduce((oldest, current) => {
      return current.year < oldest.year ? current : oldest;
    });
  }
}
