const express = require("express");
const setupDB = require("./config/database");
const router = require("./config/route");
const port = 4000;
const app = express();
setupDB();
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log("listing to port", port);
});
