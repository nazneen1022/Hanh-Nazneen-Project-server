"use strict";
module.exports = (sequelize, DataTypes) => {
  const storyLine = sequelize.define(
    "storyLine",
    {
      content: DataTypes.TEXT,
    },
    {}
  );
  storyLine.associate = function (models) {
    storyLine.hasMany(models.story);
  };
  return storyLine;
};
