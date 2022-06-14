import express from "express";
export const filterRoute = express.Router();
import { client } from "../config/prismicConfig.js";

filterRoute.get("/", async (req, res) => {
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
  console.log(docenten);
  //   sort on last name
  docenten.sort((a, b) =>
    a.docent.data.achternaam[0].text > b.docent.data.achternaam[0].text
      ? 1
      : b.docent.data.achternaam[0].text > a.docent.data.achternaam[0].text
      ? -1
      : 0
  );

  res.render("filter", {
    docenten,
    title: req.query.category,
  });
});
