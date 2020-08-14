"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "I like writing stories",
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://cdn1.iconfinder.com/data/icons/business-character-1/128/8-512.png",
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.story);
    user.hasMany(models.comment);
    user.hasMany(models.rating);
  };
  return user;
};
