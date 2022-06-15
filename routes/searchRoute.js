import express from "express";
export const searchRoute = express.Router();
import { client } from "../config/prismicConfig.js";

searchRoute.get("/", async (req, res) => {
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
  let notFound;
  let teachers = [];
  if (docenten.length == 0) {
    const random = document.sort(() => 0.5 - Math.random());
    teachers = random.slice(0, 3);

    notFound =
      "<p> Geen zoekresultaten gevonden voor: " +
      req.query.q +
      "<p>" +
      "<p> misschien zoek je een van deze docenten </p>";
  }
  res.render("search", { docenten, notFound, teachers });
});
