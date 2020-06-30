const { Router } = require("express");
const Storyline = require("../models").storyLine;
//console.log("naz:", require("../models"));

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const storylines = await Storyline.findAll();
    if (!storylines) {
      return response.status(403).send({ message: "no story lines found!" });
    }
    return response.status(200).send(storylines);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
