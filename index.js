const express = require("express");
const connection = require("./connection");
const { readdirSync } = require("fs");
const app = express();
const port = 5000;

connection.connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Your App Is Successfully Running On Port ${port}`);
});

// routes
readdirSync("./routes").map((routes) =>
  app.use("/api", require("./routes/" + routes))
);
// FOR EG : http://localhost:5000/api/register-student || http://localhost:5000/api/students

app.listen(port, () => console.log(`listening at ${port}`));
