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

detailRoute.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const document = await client.getByID(req.params.id);
  const teachers = await client.getAllByType("persoon");
  let relatedTeachers = [];
  teachers.forEach((docent) => {
    if (docent.data.naam[0].text !== document.data.naam[0].text) {
      if (document.data.specaliteit == docent.data.specaliteit) {
        relatedTeachers.push({
          docent: docent,
        });
      }
    }
  });
  res.render("detail", { document, teachers: relatedTeachers });
});
