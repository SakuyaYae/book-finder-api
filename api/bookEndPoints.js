import Book from "./../models/book.js";

export default function (server) {

  server.get("/api/books", async (req, res) => {
    try {
      res.status(200).json(await Book.find());
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.get("/api/books/:id", async (req, res) => {
    try {
      const selectedBook = await Book.findById(req.params.id).populate('manga');

      if (!selectedBook) {
        res.status(404).json({ "msg": "Not found" })
      }

      res.status(200).json([{ "msg": "OK" }, selectedBook]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.post("/api/books", async (req, res) => {
    try {
      const book = new Book({
        "title": req.body.title,
        "author": req.body.author,
        "genre": req.body.genre,
        "releaseDate": req.body.releaseDate,
        "info": req.body.info,
        "rating": req.body.rating
      });
      const addedBook = await book.save();
      res.status(201).json([{ "msg": "book added:" }, addedBook]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error:" }, error]);
    }
  });

  server.put("/api/books/:id", async (req, res) => {
    try {
      const bookToUpdate = await Book.findByIdAndUpdate(req.params.id, req.body);
      if (!bookToUpdate) {
        res.status(404).json({ "msg": "Not found" })
      };

      res.status(200).json([{ "msg": "Book updated" }, authorToUpdate]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.delete("/api/books/:id", async (req, res) => {
    try {
      const booksToDelete = await Book.findByIdAndDelete(req.params.id);
      if (!booksToDelete) { res.status(404).json({ "msg": "Not found" }) }
      res.status(204).json([{ "msg": "author deleted" }, authorToDelete]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}