"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          userId: 1,
          storyId: 1,
          content: "Wow, very nice story",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storyId: 1,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storyId: 2,
          content: "Mus mauris vitae ultricies leo integer malesuada nunc vel.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 2,
          content: "Imperdiet massa tincidunt nunc pulvinar sapien et ligula.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storyId: 3,
          content: "I like it",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
