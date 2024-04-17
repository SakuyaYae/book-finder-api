import Book from "./../models/book.js";

export default function (server) {
  server.get("/api/filter/:title", async (req, res) => {
    try {
      const booksByName = await Book.find({ title: req.params.title });

      if (!booksByName) {
        res.status(404).json({ "msg": "Not found" })
      }
      else if (booksByName.length < 1) {
        res.status(204).json({ "msg": "no content" })
      }
      else {
        res.status(200).json([{ "msg": "OK" }, booksByName]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.get("/api/filter/:author", async (req, res) => {
    try {
      const booksByAuthor = await Book.find({ author: req.params.author });

      if (!booksByAuthor) {
        res.status(404).json({ "msg": "Not found" })
      }
      else if (booksByAuthor.length < 1) {
        res.status(204).json({ "msg": "no content" })
      }
      else {
        res.status(200).json([{ "msg": "OK" }, booksByName]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.get("/api/filter/:genre", async (req, res) => {
    try {
      const booksByGenre = await Book.find({ author: req.params.genre });

      if (!booksByGenre) {
        res.status(404).json({ "msg": "Not found" })
      }
      else if (booksByGenre.length < 1) {
        res.status(204).json({ "msg": "no content" })
      }
      else {
        res.status(200).json([{ "msg": "OK" }, booksByName]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}