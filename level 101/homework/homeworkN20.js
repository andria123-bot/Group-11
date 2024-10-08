class Library {
  constructor() {
    this.books = new Map();
  }
  
  addBook(title, author) {
    this.books.set(title, author);
  }
}
