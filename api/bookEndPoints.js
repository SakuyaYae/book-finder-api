import Book from "./../models/book.js";

export default function (server) {

  server.get("/api/books", async (req, res) => {
    try {
      var page;

      if (req.query.page) {
        page = parseInt(req.query.page);
        const limit = 30;
        const skip = (page - 1) * limit;
        const totalBooks = await Book.countDocuments();
        const returnedBooks = await Book.find().skip(skip).limit(limit);
        const numberOfPages = parseInt(totalBooks / limit);

        res.status(200).json({ returnedBooks, totalBooks, "booksPerPage": limit, "numberOfPages": numberOfPages, "currentPage": page });

      }
      else {
        res.status(200).json(await Book.find());

      }

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
      else {
        res.status(200).json([{ "msg": "OK" }, selectedBook]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.post("/api/books", async (req, res) => {
    try {
      if (req.body.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (!req.body.title || !req.body.author || !req.body.genre || !req.body.releaseDate || !req.body.info || !req.body.rating) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.title.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.author.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.genre.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.releaseDate.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.info.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.rating.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else {
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
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error:" }, error]);
    }
  });

  server.put("/api/books/:id", async (req, res) => {
    try {
      if (req.body.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (!req.body.title || !req.body.author || !req.body.genre || !req.body.releaseDate || !req.body.info || !req.body.rating) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.title.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.author.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.genre.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.releaseDate.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.info.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else if (req.body.rating.legth < 1) {
        res.status(400).json({ "msg": "bad request" });
      }
      else {
        const bookToUpdate = await Book.findByIdAndUpdate(req.params.id, req.body);
        if (!bookToUpdate) {
          res.status(404).json({ "msg": "Not found" });
        }
        else {
          res.status(200).json([{ "msg": "Book updated" }, bookToUpdate]);
        }
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.delete("/api/books/:id", async (req, res) => {
    try {
      const bookToDelete = await Book.findByIdAndDelete(req.params.id);
      if (!bookToDelete) {
        res.status(404).json({ "msg": "Not found" })
      }
      else {
        res.status(204).json([{ "msg": "author deleted" }, bookToDelete]);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}