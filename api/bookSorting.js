import Book from "./../models/book.js";
function checkDbConnection(mongoose) {

  if (mongoose.connection.readyState == 1) {
    return true;
  }
  else {
    return false;
  }
}
export default function (server, mongoose) {
  server.get("/api/books/sort/title", async (req, res) => {
    try {
      if (checkDbConnection(mongoose)) {
        const booksSortedByTitle = await Book.find().sort({ title: 1 });
        if (booksSortedByTitle.length < 1) {
          res.status(204).json({ "msg": "no content" });
        }
        else {
          res.status(200).json([{ "msg": "OK" }, booksSortedByTitle]);
        }
      }
      else {
        res.status(404).json({ "msg": "Database is not connected" });
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
  server.get("/api/books/sort/author", async (req, res) => {
    try {
      if (checkDbConnection(mongoose)) {
        const booksSortedByAuthor = await Book.find().sort({ author: 1 });
        if (booksSortedByAuthor.length < 1) {
          res.status(204).json({ "msg": "no content" });
        }
        else {
          res.status(200).json([{ "msg": "OK" }, booksSortedByAuthor]);
        }
      }
      else {
        res.status(404).json({ "msg": "Database is not connected" });
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
  server.get("/api/books/sort/genre", async (req, res) => {
    try {
      if (checkDbConnection(mongoose)) {
        const booksSortedByGenre = await Book.find().sort({ genre: 1 });
        if (booksSortedByGenre.length < 1) {
          res.status(204).json({ "msg": "no content" });
        }
        else {
          res.status(200).json([{ "msg": "OK" }, booksSortedByGenre]);
        }
      }
      else {
        res.status(404).json({ "msg": "Database is not connected" });
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}