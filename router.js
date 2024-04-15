import books from "./api/bookEndPoints.js";

export default function (server, mongoose) {
  books(server, mongoose);
}