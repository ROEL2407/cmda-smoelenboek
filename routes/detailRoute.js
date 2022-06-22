import express from "express";
var app = express();
export const detailRoute = express.Router();
import { client } from "../config/prismicConfig.js";

const options = {
  weekday: "long",
};

detailRoute.get("/:id", async (req, res) => {
  const document = await client.getByID(req.params.id);
  const teachers = await client.getAllByType("persoon");

  let relatedTeachers = [];
  teachers.forEach((docent) => {
    if (
      docent.data.naam[0].text !== document.data.naam[0].text &&
      docent.data.achternaam[0].text !== document.data.achternaam[0].text
    ) {
      if (document.data.specaliteit == docent.data.specaliteit) {
        relatedTeachers.push({
          docent: docent,
        });
      }
    }
  });

  // get 9 random teachers
  const random = relatedTeachers.sort(() => 0.5 - Math.random());
  relatedTeachers = random.slice(0, 9);

  res.render("detail", { document, teachers: relatedTeachers });
});
