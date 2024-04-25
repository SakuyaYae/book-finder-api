import books from "./api/bookEndPoints.js";
import bookFilter from "./api/bookFilter.js";
import bookSorting from "./api/bookSorting.js";
import conDbTest from "./api/conDbTest.js";
import databaseCleaner from "./api/databaseCleaner.js";

export default function (server, mongoose) {
  books(server, mongoose);
  databaseCleaner(server, mongoose);
  bookFilter(server, mongoose);
  bookSorting(server, mongoose);
  conDbTest(server, mongoose);
}