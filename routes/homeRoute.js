import express from "express";
var app = express();
export const homeRoute = express.Router();
import { client } from "../config/prismicConfig.js";

homeRoute.get("/", async (req, res) => {
  // Here we are retrieving the first document from your API endpoint
  const document = await client.getAllByType("persoon");

  // sort on last name
  document.sort((a, b) =>
    a.data.achternaam[0].text > b.data.achternaam[0].text
      ? 1
      : b.data.achternaam[0].text > a.data.achternaam[0].text
      ? -1
      : 0
  );

  res.render("index", {
    docenten: document,
  });
});
