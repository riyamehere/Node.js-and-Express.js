const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("welcome to home page");
});
//for the about page
app.get("/about", (req, res) => {
  res.status(200).send("welcome to about page");
});
//for the any other pages
app.all("*", (req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});
app.listen(5000, () => {
  console.log("sever is listening on port 5000");
});
