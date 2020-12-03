function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var titles = [];
  for (i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  return titles.join(', ')
}

function searchShelf(shelf, book) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
