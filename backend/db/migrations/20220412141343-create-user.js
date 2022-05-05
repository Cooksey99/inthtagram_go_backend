'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING(35),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(35),
        allowNull: false
      },
      profile_picture: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING(300)
      },
      hashed_password: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
