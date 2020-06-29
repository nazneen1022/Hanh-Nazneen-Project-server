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
    story.belongsTo(models.user);
    story.belongsTo(models.storyLine);
    story.hasMany(models.comment);
  };
  return story;
};
