const { Router } = require("express");
const Storyline = require("../models").storyLine;
const auth = require("../auth/middleware");

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

router.post("/", auth, async (request, response, next) => {
  console.log("request.body:", request.body);
  const { content } = request.body;

  try {
    if (!content) {
      return response
        .status(403)
        .send({ message: "content of the new storyline cannot be blank" });
    }
    const storyline = await Storyline.create({ content });

    if (!storyline) {
      return response.status(403).send({ message: "no story lines created!" });
    }
    return response.status(200).send(storyline);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
