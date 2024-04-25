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
  server.get("/api/filter/title/:title", async (req, res) => {
    try {
      if (checkDbConnection(mongoose)) {
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
      else {
        res.status(404).json({ "msg": "Database is not connected" });
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });

  server.get("/api/filter/author/:author", async (req, res) => {
    try {
      if (checkDbConnection(mongoose)) {
        const booksByAuthor = await Book.find({ author: req.params.author });

        if (!booksByAuthor) {
          res.status(404).json({ "msg": "Not found" })
        }
        else if (booksByAuthor.length < 1) {
          res.status(204).json({ "msg": "no content" })
        }
        else {
          res.status(200).json([{ "msg": "OK" }, booksByAuthor]);
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

  server.get("/api/filter/genre/:genre", async (req, res) => {
    try {
      if (checkDbConnection(mongoose)) {
        const booksByGenre = await Book.find({ genre: req.params.genre });

        if (!booksByGenre) {
          res.status(404).json({ "msg": "Not found" })
        }
        else if (booksByGenre.length < 1) {
          res.status(204).json({ "msg": "no content" })
        }
        else {
          res.status(200).json([{ "msg": "OK" }, booksByGenre]);
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