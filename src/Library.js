function createLibrary(name) {
  return library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, book) {
  for (var i = 0; i < library.shelves.fiction.length; i++) {
    if (library.shelves.fiction[i].title === book) {
      library.shelves.fiction.splice(i, 1)
      return `You have now checked out ${book} from the Denver Public Library`;
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
