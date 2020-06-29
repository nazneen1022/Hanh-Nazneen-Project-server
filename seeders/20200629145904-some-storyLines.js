"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storyLines",
      [
        {
          content:
            "He didn't reply and immediately she thought: they've got him and now they're coming for me.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "We were having a nice family dinner, and suddenly someone rang our door. My husbund, Josh, slowly stood up and went to open the door.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "On this day, 5 years ago, when I was packing my stuff and moving out from my old house. I found an old mysterious box under my bed. I was curious enough to open it. And",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "She took a deep breath and said to her boss:",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storyLines", null, {});
  },
};
