'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      fam: {
        type: Sequelize.STRING
      },
      patronymic: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        nique:true,
        isEmail: true,
      },
      tel: {
        type: Sequelize.INTEGER,
        unique:true,
      },
      birstDay: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.INTEGER
      },
      marital_status:{
        type:Sequelize.STRING
      },
      floor:{
        type:Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};