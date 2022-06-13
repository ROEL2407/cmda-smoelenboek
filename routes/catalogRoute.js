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

  // since data at this point is an object, to get array of values
  // we use Object.values method
  let result = Object.values(data);

  res.render("catalog", {
    docenten: result,
  });
});
