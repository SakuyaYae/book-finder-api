import Book from "./../models/book.js";

export default function (server) {
  server.get("/api/books/:title", async (req, res) => {
    try {
      const booksByName = await Book.find({ title: req.params.title });

      if (!booksByName) {
        res.status(404).json({ "msg": "Not found" })
      }

      res.status(200).json([{ "msg": "OK" }, booksByName]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.get("/api/books/:author", async (req, res) => {
    try {
      const booksByAuthor = await Book.find({ author: req.params.author });

      if (!booksByAuthor) {
        res.status(404).json({ "msg": "Not found" })
      }

      res.status(200).json([{ "msg": "OK" }, booksByAuthor]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.get("/api/books/:genre", async (req, res) => {
    try {
      const booksByGenre = await Book.find({ author: req.params.genre });

      if (!booksByGenre) {
        res.status(404).json({ "msg": "Not found" })
      }

      res.status(200).json([{ "msg": "OK" }, booksByGenre]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}