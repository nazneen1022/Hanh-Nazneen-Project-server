"use strict";
module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define(
    "rating",
    {
      ratingValue: DataTypes.INTEGER,
    },
    {}
  );
  rating.associate = function (models) {
    // associations can be defined here
    rating.belongsTo(models.user);
    rating.belongsTo(models.story);
  };
  return rating;
};
