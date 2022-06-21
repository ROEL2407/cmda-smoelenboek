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

  //   sort on last name
  docenten.sort((a, b) =>
    a.docent.data.achternaam[0].text > b.docent.data.achternaam[0].text
      ? 1
      : b.docent.data.achternaam[0].text > a.docent.data.achternaam[0].text
      ? -1
      : 0
  );

  let result;
  let teachers = [];

  if (docenten.length == 0) {
    const random = document.sort(() => 0.5 - Math.random());
    teachers = random.slice(0, 3);

    console.log(teachers);
    result =
      "Geen zoekresultaten gevonden voor: " +
      req.query.category +
      " en " +
      searchWord +
      "</br> Misschien zoek je een van deze docenten";
  } else {
    result = "<p> Resultaten voor: " + req.query.category + " en " + searchWord;
  }

  res.render("searchFilter", {
    docenten,
    result,
    teachers,
    title: req.query.category,
  });
});
