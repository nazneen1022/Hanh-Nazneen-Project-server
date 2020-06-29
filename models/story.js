"use strict";
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define(
    "story",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      rating: DataTypes.INTEGER,
    },
    {}
  );
  story.associate = function (models) {
    // associations can be defined here
  };
  return story;
};
