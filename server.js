import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import * as prismicH from "@prismicio/helpers";
import { client } from "./config/prismicConfig.js";

const app = express();
const port = process.env.PORT || 3000;
var router = express.Router();

const options = {
  weekday: "long",
};

let today = new Date().toLocaleDateString("nl-NL", options);
let docenten = [];
// let categories = [];

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

// Routes
import { homeRoute } from "./routes/homeRoute.js";
import { catalogRoute } from "./routes/catalogRoute.js";
import { detailRoute } from "./routes/detailRoute.js";
import { searchRoute } from "./routes/searchRoute.js";
import { filterRoute } from "./routes/filterRoute.js";

app.use("/", homeRoute);
app.use("/catalog", catalogRoute);
app.use("/detail", detailRoute);
app.use("/search", searchRoute);
app.use("/filter", filterRoute);

app.get("/create", (req, res) => {
  res.render("create", {});
});

// Listen to application port.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
