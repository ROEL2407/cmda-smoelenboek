import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import * as prismicH from "@prismicio/helpers";
import { client } from "./config/prismicConfig.js";

const app = express();
const port = process.env.PORT || 4242;

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
  console.log(document);
  res.render("page", { document });
});

app.get("/detail/:id", async (req, res) => {
  console.log(req.params.id);
  const document = await client.getByID(req.params.id);
  res.render("detail", { document });
});

// Listen to application port.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
