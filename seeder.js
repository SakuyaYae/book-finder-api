import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import Book from './models/book.js';
const conectionString = "";

async function seedDb() {
  mongoose.connect(conectionString);
  const seededData = generateBooks(5);
}


async function generateBooks(bookAmount) {
  const bookList = [];
  for (var i = 0; i < bookAmount; i++) {
    const book = new Book({
      "title": "",
      "author": "",
      "genre": "",
      "releaseDate": ""
    });
    bookList.push(book);
  }
  return bookList;
}
seedDb();