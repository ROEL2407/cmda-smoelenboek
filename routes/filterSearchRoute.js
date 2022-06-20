import express from "express";
export const filterSearchRoute = express.Router();
import { client } from "../config/prismicConfig.js";

let docenten = [];

filterSearchRoute.get("/", async (req, res) => {
  const document = await client.getAllByType("persoon");
  docenten = [];

  searchTeachers.forEach((docent) => {
    if (docent.docent.data.specaliteit.includes(req.query.category)) {
      docenten.push({
        docent: docent.docent,
      });
    }
  });

  console.log(docenten);
  //   sort on last name
  docenten.sort((a, b) =>
    a.docent.data.achternaam[0].text > b.docent.data.achternaam[0].text
      ? 1
      : b.docent.data.achternaam[0].text > a.docent.data.achternaam[0].text
      ? -1
      : 0
  );

  let result;

  result = "<p> Resultaten voor " + searchWord + " en " + req.query.category;

  res.render("filter", {
    docenten,
    result,
    title: req.query.category,
  });
});
