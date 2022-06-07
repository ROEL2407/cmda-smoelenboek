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
  console.log(docenten);
  res.render("search", { docenten });
});
