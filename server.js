const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

const options = {
  weekday: 'long'
}

let today = new Date().toLocaleDateString("nl-NL", options);
let available = [];
let unavailable = [];


app.get("/", (req, res) => {
  fetch(
    "https://raw.githubusercontent.com/ROEL2407/cmda-smoelenboek/main/docent.json"
  )
    .then((response) => response.json())
    .then((data) => {
      available = [];
      unavailable = [];
      data.docenten.forEach(docent => {
        
        if (docent.dagen_a.includes(today)) {
          available.push({
            docent: docent
          })
        }
        else {
          unavailable.push({
            docent: docent
          })
        }
      });
      console.log(available);
      res.render("index", { today: available, not_today: unavailable });
    });
});

// get specific info of 1 teacher and display on page
app.get("/detail/:id", function (req, res) {
  console.log(req.params.id);
  fetch(
    `https://www.rijksmuseum.nl/api/nl/collection/${req.params.id}`
  )
    .then({
    })
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
