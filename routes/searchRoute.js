import express from "express";
export const searchRoute = express.Router();
import { client } from "../config/prismicConfig.js";

searchRoute.get("/", async (req, res) => {
  const document = await client.getAllByType("persoon");
  let docenten = [];
  //get all teachers with search text
  document.forEach((docent) => {
    let firstName = docent.data.naam[0].text;
    let lastName = docent.data.achternaam[0].text;
    let fullName = firstName + " " + lastName;

    if (fullName.toLowerCase().includes(req.query.q)) {
      docenten.push({
        docent: docent,
      });
    }
  });

  global.searchTeachers = docenten;
  global.searchWord = req.query.q;

  let result;
  let teachers = [];
  if (docenten.length == 0) {
    const random = document.sort(() => 0.5 - Math.random());
    teachers = random.slice(0, 3);

    result =
      "Geen zoekresultaten gevonden voor: " +
      req.query.q +
      "</br> misschien zoek je een van deze docenten";
  } else {
    result = "Resultaten met " + req.query.q;
  }
  res.render("search", { docenten, result, teachers });
});
