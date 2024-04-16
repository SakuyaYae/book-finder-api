import Book from "../models/book.js";
export default function (server, mongoose) {
  server.delete("/api/Cleaner", async (req, res) => {
    try {
      const cleaner = await Book.deleteMany();
      if (!cleaner) { res.status(404).json({ "msg": "Not found" }) }
      res.status(204).json([{ "msg": "cleaning done" }]);
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}