const { Router } = require("express");
const Story = require("../models").story;
const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const stories = await Story.findAll();
    if (!stories) {
      return response.status(403).send({ message: "no story lines found!" });
    }
    return response.status(200).send(stories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
