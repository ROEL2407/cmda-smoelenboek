const express = require("express");
const app = express();
const port = process.env.PORT || 4242;
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));



app.get("/", (req, res) => {
    fetch("./docent.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          res.render("index", {data});
        })
});

app.listen(port, () => {
  console.log("listening on port ", port);
});