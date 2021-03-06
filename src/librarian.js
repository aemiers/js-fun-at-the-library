var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

greetPatron(patron, boolean) {
  if (boolean === true) {
    return `Good morning, ${patron}!`;
  } else {
  return `Hello, ${patron}!`
  }
}

findBook(book) {
  for (var i = 0; i < library.shelves.fantasy.length; i++) {
    if (library.shelves.fantasy[i].title === book) {
      this.library.checkoutBook();
      return `Yes, we have ${book}`;
    } else {
      return `Sorry, we do not have ${book}`
    }
    }
  }

  calculateLateFee(days) {
    return Math.round(days * .25);
  }
}
module.exports = Librarian;
