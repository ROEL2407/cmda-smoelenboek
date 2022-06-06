import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import * as prismicH from "@prismicio/helpers";
import { client } from "./config/prismicConfig.js";

const app = express();
const port = process.env.PORT || 3000;

const options = {
  weekday: "long",
};

let today = new Date().toLocaleDateString("nl-NL", options);
let available = [];
let unavailable = [];
let categories = [];

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Add a middleware function that runs on every route. It will inject
// the prismic context to the locals so that we can access these in
// our templates.
app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  };
  next();
});

// Query for the root path.
app.get("/", async (req, res) => {
  // Here we are retrieving the first document from your API endpoint
  const document = await client.getAllByType("persoon");
  available = [];
  unavailable = [];
  document.forEach((docent) => {
    if (!categories.includes(docent.data.specaliteit)) {
      //  only runs if value not in array
      categories.push(docent.data.specaliteit);
    }

    if (docent.data.dagen_aanwezig[0].text.toLowerCase().includes(today)) {
      available.push({
        docent: docent,
      });
    } else {
      unavailable.push({
        docent: docent,
      });
    }
  });

  res.render("index", {
    today: available,
    not_today: unavailable,
    categories,
  });
});

app.get("/detail/:id", async (req, res) => {
  const document = await client.getByID(req.params.id);
  res.render("detail", { document, categories });
});

app.get("/create", (req, res) => {
  res.render("create", {});
});

app.get("/search", async (req, res) => {
  const document = await client.getAllByType("persoon");
  let docenten = [];
  //get all teachers with search text
  document.forEach((docent) => {
    if (docent.data.naam[0].text.toLowerCase().includes(req.query.q)) {
      docenten.push({
        docent: docent,
      });
    }
  });
  console.log(docenten);
  res.render("search", { docenten, categories });
});

app.get("/filter", async (req, res) => {
  const document = await client.getAllByType("persoon");
  let docenten = [];
  //get all teachers with chosen category
  document.forEach((docent) => {
    if (docent.data.specaliteit.includes(req.query.category)) {
      docenten.push({
        docent: docent,
      });
    }
  });
  res.render("filter", {
    docenten,
    title: req.query.category,
    categories,
  });
});

// Listen to application port.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
