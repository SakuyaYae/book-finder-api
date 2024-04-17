import Book from "./../models/book.js";

export default function (server) {
  server.get("/api/books/sort/title", async (req, res) => {
    try {
      const booksSortedByTitle = await Book.find().sort({ title: 1 });
      if (booksSortedByTitle.length < 1) {
        res.status(204).json({ "msg": "no content" });
      } else {
        res.status(200).json([{ "msg": "OK" }, booksSortedByTitle]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
  server.get("/api/books/sort/author", async (req, res) => {
    try {
      const booksSortedByAuthor = await Book.find().sort({ author: 1 });
      if (booksSortedByAuthor.length < 1) {
        res.status(204).json({ "msg": "no content" });
      } else {
        res.status(200).json([{ "msg": "OK" }, booksSortedByAuthor]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
  server.get("/api/books/sort/genre", async (req, res) => {
    try {
      const booksSortedByGenre = await Book.find().sort({ genre: 1 });
      if (booksSortedByGenre.length < 1) {
        res.status(204).json({ "msg": "no content" });
      } else {
        res.status(200).json([{ "msg": "OK" }, booksSortedByGenre]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}