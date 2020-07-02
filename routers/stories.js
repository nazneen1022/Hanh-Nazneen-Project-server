const { Router } = require("express");

const auth = require("../auth/middleware");

const Story = require("../models").story;
const User = require("../models").user;
const Rating = require("../models").rating;
const Comment = require("../models").comment;

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

// get stories with same story line

router.get("/:storyLineId", async (request, response, next) => {
  try {
    const stories = await Story.findAll({
      where: { storyLineId: request.params.storyLineId },
    });
    if (!stories) {
      return response.status(403).send({ message: "no story  found!" });
    }
    return response.status(200).send(stories);
  } catch (error) {
    next(error);
  }
});

// get a single story detail
router.get("/story/:storyid", async (request, response, next) => {
  try {
    const story = await Story.findOne({
      where: {
        id: request.params.storyid,
      },
      include: { model: User, attributes: ["name"] },
    });
    if (!story) {
      return response.status(403).send({ message: "no story found!" });
    }
    return response.status(200).send(story);
  } catch (error) {
    next(error);
  }
});

// Rate a story
router.post("/story/:storyid/rate", auth, async (request, response, next) => {
  try {
    const { userId, ratingValue } = request.body;
    const storyId = request.params.storyid;
    const rating = await Rating.findOne({
      where: {
        userId: userId,
        storyId: storyId,
      },
    });
    const story = await Story.findOne({
      where: {
        id: storyId,
      },
      include: { model: User, attributes: ["name"] },
    });
    if (!story) {
      res.status(400).send({ error: "Story does not exist" });
    } else {
      if (!rating) {
        const newRating = await Rating.create({
          userId: userId,
          storyId: storyId,
          ratingValue: ratingValue,
        });
        const ratingsofAStory = await Rating.findAll({
          where: {
            storyId: storyId,
          },
        });
        const ratingValuesofAStory = ratingsofAStory.map(
          (rating) => rating.ratingValue
        );

        const newRatingAverage = Math.round(
          ratingValuesofAStory.reduce(function (a, b) {
            return a + b;
          }, 0) / ratingValuesofAStory.length
        );
        await story.update({ ratingAverage: newRatingAverage });
        return response.status(200).send(story);
      } else {
        await rating.update({ ratingValue: ratingValue });

        const ratingsofAStory = await Rating.findAll({
          where: {
            storyId: storyId,
          },
        });
        const ratingValuesofAStory = ratingsofAStory.map(
          (rating) => rating.ratingValue
        );

        const newRatingAverage = Math.round(
          ratingValuesofAStory.reduce(function (a, b) {
            return a + b;
          }, 0) / ratingValuesofAStory.length
        );
        await story.update({ ratingAverage: newRatingAverage });
        return response.status(200).send(story);
      }
    }
  } catch (error) {
    next(error);
  }
});

//display all comments
router.get("/story/:storyid/comments", async (request, response, next) => {
  try {
    const comments = await Comment.findAll({
      where: { storyId: request.params.storyid },
      include: [{ model: User, attributes: ["name", "imageUrl"] }],
      order: [["createdAt", "DESC"]],
    });
    response
      .status(200)
      .send({ message: "All comments of this story", comments });
  } catch (error) {
    next(error);
  }
});

// add new comment

router.post(
  "/story/:storyid/comments",
  auth,
  async (request, response, next) => {
    try {
      const user = await User.findByPk(request.user.id);
      const storyId = request.params.storyid;
      const { content } = request.body; // reveive data from request
      if (!content) {
        return response
          .status(400)
          .send({ message: "A comment must have a content" });
      }
      const newComment = await Comment.create({
        content,
        userId: user.id,
        storyId: storyId,
      });

      const comments = await Comment.findAll({
        where: { storyId: storyId },
        include: [{ model: User, attributes: ["name", "imageUrl"] }],
        order: [["createdAt", "DESC"]],
      });
      response
        .status(200)
        .send({ message: "All comments of this story after adding", comments });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
