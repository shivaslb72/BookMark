const mongoose = require("mongoose");

const setupDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/oct-bookmark", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("connected to DB");
    });
};

module.exports = setupDB;
