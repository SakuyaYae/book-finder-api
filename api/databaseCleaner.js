import Book from "../models/book.js";
function checkDbConnection(mongoose) {

  if (mongoose.connection.readyState == 1) {
    return true;
  }
  else {
    return false;
  }
}
export default function (server) {
  server.delete("/api/cleaner", async (req, res) => {
    try {
      if (checkDbConnection(mongoose)) {
        const cleaner = await Book.deleteMany();
        if (!cleaner) {
          res.status(404).json({ "msg": "Not found" })
        }
        else {
          res.status(204).json([{ "msg": "cleaning done" }]);
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