"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      content: DataTypes.TEXT,
    },
    {}
  );
  comment.associate = function (models) {
    comment.belongsTo(models.user);
    comment.belongsTo(models.story);
  };
  return comment;
};
