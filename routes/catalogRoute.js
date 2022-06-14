import { documentToLinkField } from "@prismicio/helpers";
import express from "express";
var app = express();
export const catalogRoute = express.Router();
import { client } from "../config/prismicConfig.js";

catalogRoute.get("/", async (req, res) => {
  // Here we are retrieving the first document from your API endpoint
  const document = await client.getAllByType("persoon");

  // sort on last name
  document.sort((a, b) =>
    a.data.naam[0].text > b.data.naam[0].text
      ? 1
      : b.data.naam[0].text > a.data.naam[0].text
      ? -1
      : 0
  );

  // Sort teachers by letter
  let data = document.reduce((r, e) => {
    // get first letter of name of current element
    let group = e.data.naam[0].text[0];
    // if there is no property in accumulator with this letter create it
    if (!r[group]) r[group] = { group, children: [e] };
    // if there is push current element to children array for that letter
    else r[group].children.push(e);
    // return accumulator
    return r;
  }, {});

  let result = Object.values(data);

  // get full alphabet
  let letters = [];

  for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(97 + i).toLocaleUpperCase();
    letters.push(letter);
  }

  res.render("catalog", {
    docenten: result,
    letters,
  });
});
