import x from './test';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import * as Book from './js/model/Book';

let books = new Book.bookRepository().getAllBooks();

console.log(`on index: ${books}`);





