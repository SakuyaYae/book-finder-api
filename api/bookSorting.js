import Book from "./../models/book.js";

export default function (server, mongoose) {
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
}