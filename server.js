const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch(
    "https://raw.githubusercontent.com/ROEL2407/cmda-smoelenboek/main/docent.json"
  )
    .then((response) => response.json())
    .then((data) => {
      res.render("index");
    });
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
