import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import Book from './models/book.js';
import "dotenv/config";
const conectionString = process.env.conectionString;
const genreList = ["action", "adventure", "horror", "fantasy", "romance", "si-fi", "hitorical"];

async function seedDb() {
  mongoose.connect(conectionString);
  const seededData = generateBooks(5);
  console.log(seededData);
  saveBooks(await seededData);
  console.log("seeding done");
}


async function generateBooks(bookAmount) {
  const bookList = [];
  for (var i = 0; i < bookAmount; i++) {
    const book = new Book({
      "title": "History of " + faker.location.country(),
      "author": faker.person.fullName(),
      "genre": genreList[faker.number.int(6)],
      "releaseDate": faker.date.past(),
      "info": faker.lorem.paragraph(),
      "rating": faker.number.int({ min: 1, max: 5 }) + ""
    });
    bookList.push(book);
  }
  return bookList;
}

async function saveBooks(bookList = []) {
  if (bookList.length == 0) {
    console.log("No books to save");
  }
  else {
    try {
      for (var i = 0; i < bookList.length; i++) {
        await bookList[i].save();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
seedDb();