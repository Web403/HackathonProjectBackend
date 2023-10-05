const express = require("express");
const mongodb = require("mongodb");
const connection = require("./connection");

const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const app = express();

connection.connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Your App Is Successfully Running On Port ${port}`);
});

// routes
readdirSync("./routes").map((routes) =>
  app.use("/api", require("./routes/" + routes))
);

app.listen(5000, () => console.log(`listening at ${port}`));
