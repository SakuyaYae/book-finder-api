import "dotenv/config";
export default function (server, mongoose) {
  server.get("/api/testing/connection/close", async (req, res) => {
    try {
      mongoose.connection.close();
      res.status(200).json({ "msg": "DB connection closed" });
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
  server.get("/api/testing/connection/open", async (req, res) => {
    try {
      const conectionString = process.env.conectionString;

      mongoose.connect(conectionString);
      res.status(200).json({ "msg": "connection state " + mongoose.connection.readyState });
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
  server.get("/api/testing/connection/state", async (req, res) => {
    try {
      res.status(200).json({ "msg": "connection state " + mongoose.connection.readyState });
    }
    catch (error) {
      console.error(error);
      res.status(500).json([{ "msg": "error" }, error]);
    }
  });
}