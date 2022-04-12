class Book {
    constructor(title) {
        this._title = title;
    }


    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

}
const book = new Book("The Little Prince")
console.log(book.title);
book.title = "Le Petit Prince";
console.log(book.title)