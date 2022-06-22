import e from "express";
import express from "express";
export const searchFilterRoute = express.Router();
import { client } from "../config/prismicConfig.js";

searchFilterRoute.get("/", async (req, res) => {
  const document = await client.getAllByType("persoon");
  let docenten = [];

  //get all teachers with search text
  filterTeachers.forEach((docent) => {
    let firstName = docent.docent.data.naam[0].text;
    let lastName = docent.docent.data.achternaam[0].text;
    let fullName = firstName + " " + lastName;

    if (fullName.toLowerCase().includes(req.query.q)) {
      docenten.push({
        docent: docent.docent,
      });
    }
  });

  let result;
  let teachers = [];
  if (docenten.length == 0) {
    const random = document.sort(() => 0.5 - Math.random());
    teachers = random.slice(0, 3);

    result =
      "Geen zoekresultaten gevonden voor: " +
      req.query.q +
      "</br> Misschien zoek je een van deze docenten";
  } else {
    let specaliteit = docenten[0].docent.data.specaliteit;
    result = "<p> Resultaten voor " + req.query.q + " en " + specaliteit;
  }
  res.render("searchFilter", { docenten, result, teachers });
});
