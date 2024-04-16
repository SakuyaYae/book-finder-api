import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  "title": String,
  "author": String,
  "genre": String,
  "releaseDate": String,
  "info": String,
  "rating": String
});

const Book = mongoose.model("books", bookSchema);

export default Book;