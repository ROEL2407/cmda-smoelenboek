// import express from "express";
// var app = express();
// export const detailRoute = express.Router();
// import { client } from "../config/prismicConfig.js";

// detailRoute.get("/detail/:id", async (req, res) => {
//   console.log(req.params.id);
//   const document = await client.getByID(req.params.id);
//   // console.log(document.data.specaliteit);
//   const teachers = await client.getAllByType("persoon");
//   let relatedTeachers = [];
//   teachers.forEach((docent) => {
//     if (docent.data.naam[0].text !== document.data.naam[0].text) {
//       console.log(docent.data.naam[0].text);
//       console.log(document.data.naam[0].text);
//       if (document.data.specaliteit == docent.data.specaliteit) {
//         relatedTeachers.push({
//           docent: docent,
//         });
//       }
//     }
//   });

//   res.render("detail", { document, categories, teachers: relatedTeachers });
// });

import express from "express";
var app = express();
export const detailRoute = express.Router();
import { client } from "../config/prismicConfig.js";

const options = {
  weekday: "long",
};

let today = new Date().toLocaleDateString("nl-NL", options);
let available = [];
let unavailable = [];
let categories = [];

// detailRoute.get("/", async (req, res) => {
//   // Here we are retrieving the first document from your API endpoint
//   const document = await client.getAllByType("persoon");
//   document.forEach((docent) => {
//     if (!categories.includes(docent.data.specaliteit)) {
//       //  only runs if value not in array
//       categories.push(docent.data.specaliteit);
//     }
//   });

//   res.render("index", {
//     docenten: document,
//     categories,
//   });
// });

detailRoute.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const document = await client.getByID(req.params.id);
  // console.log(document.data.specaliteit);
  const teachers = await client.getAllByType("persoon");
  let relatedTeachers = [];
  teachers.forEach((docent) => {
    if (docent.data.naam[0].text !== document.data.naam[0].text) {
      console.log(docent.data.naam[0].text);
      console.log(document.data.naam[0].text);
      if (document.data.specaliteit == docent.data.specaliteit) {
        relatedTeachers.push({
          docent: docent,
        });
      }
    }
  });

  res.render("detail", { document, categories, teachers: relatedTeachers });
});
