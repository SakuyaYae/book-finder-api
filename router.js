import books from "./api/bookEndPoints.js";
import bookFilter from "./api/bookFilter.js";
import databaseCleaner from "./api/databaseCleaner.js";

export default function (server) {
  books(server);
  databaseCleaner(server);
  bookFilter(server);
}