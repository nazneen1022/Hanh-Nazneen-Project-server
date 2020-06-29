"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("stories", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("stories", "storyLineId", {
      type: Sequelize.INTEGER,
      references: {
        model: "storyLines",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("comments", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("comments", "storyId", {
      type: Sequelize.INTEGER,
      references: {
        model: "stories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("stories", "userId");
    await queryInterface.removeColumn("stories", "storyLineId");
    await queryInterface.removeColumn("comments", "userId");
    await queryInterface.removeColumn("comments", "storyId");
  },
};
