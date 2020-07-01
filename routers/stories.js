const { Router } = require("express");
const auth = require("../auth/middleware");
const Story = require("../models").story;
const router = new Router();

router.post("/:storyLineId", auth, async (request, response, next) => {
  console.log("request.body:", request.body, request.params);
  const { storyLineId } = request.params;
  const { title, content, imageUrl, rating, userId } = request.body;

  try {
    if (!userId) {
      return response.status(300).send({
        message: "userId value cannot be blank",
      });
    }
    if (!storyLineId) {
      return response.status(300).send({
        message: "story must have storyLineId",
      });
    }
    if (!title || !content || !imageUrl) {
      return response.status(403).send({
        message: "story must have title, content, imageUrl",
      });
    }
    const myStory = await Story.create({
      title,
      content,
      imageUrl,
      rating,
      userId,
      storyLineId,
    });
    if (!myStory) {
      return response.status(203).send({
        message: "Something went wrong, cannot create story!",
      });
    }
    return response.status(200).send(myStory);
  } catch (error) {
    next(error);
  }
});

router.get("/:storyLineId", async (request, response, next) => {
  try {
    const stories = await Story.findAll({
      where: { storyLineId: request.params.storyLineId },
    });
    if (!stories) {
      return response.status(403).send({ message: "no story lines found!" });
    }
    return response.status(200).send(stories);
  } catch (error) {
    next(error);
  }
});

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
