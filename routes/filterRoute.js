import express, { query } from "express";
export const filterRoute = express.Router();
import { client } from "../config/prismicConfig.js";

let docenten = [];

filterRoute.get("/", async (req, res) => {
  const document = await client.getAllByType("persoon");
  docenten = [];
  //get all teachers with chosen category
  document.forEach((docent) => {
    if (docent.data.specaliteit.includes(req.query.category)) {
      docenten.push({
        docent: docent,
      });
    }
  });

  global.filterTeachers = docenten;

  //   sort on last name
  docenten.sort((a, b) =>
    a.docent.data.achternaam[0].text > b.docent.data.achternaam[0].text
      ? 1
      : b.docent.data.achternaam[0].text > a.docent.data.achternaam[0].text
      ? -1
      : 0
  );

  let result = req.query.category + " docenten";

  res.render("filter", {
    docenten,
    result,
  });
});
