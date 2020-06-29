"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test123", SALT_ROUNDS),
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/businessman-707-1128970.png",
          description: " ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hanh Ngo",
          email: "hanhngo@gmail.com",
          password: bcrypt.hashSync("hanhngo123", SALT_ROUNDS),
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/034_girl_avatar_profile_woman-2-512.png",
          description: " ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nazneen N",
          email: "nazneen@gmail.com",
          password: bcrypt.hashSync("nazneen123", SALT_ROUNDS),
          imageUrl:
            "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/048_girl_avatar_profile_woman_waiter_butler-512.png",
          description: " ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
