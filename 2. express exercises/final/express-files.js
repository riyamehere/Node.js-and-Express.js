const express = require("express");
const path = require("path");

const app = express();

//setup static and middleware
//unlike in http example we dont need to create path for every file
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });
//OR we can directly add index.html to our static asset i.e public folder
//OR we can use SSR(server side rendering)

//for the any other pages
app.all("*", (req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});
app.listen(5000, () => {
  console.log("sever is listening on port 5000");
});
