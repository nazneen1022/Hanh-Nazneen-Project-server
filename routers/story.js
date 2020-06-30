const { Router } = require("express");
const Story = require("../models").story;
const auth = require("../auth/middleware");

const router = new Router();

router.post("/", auth, async (request, response, next) => {
  const {
    title,
    content,
    imageUrl,
    rating,
    userId,
    storyLineId,
  } = request.body;
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
    if (!title || !content || !imageUrl || !rating) {
      return response.status(403).send({
        message: "story must have title, content, imageUrl and rating",
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

module.exports = router;
