'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('categorias');
  }
};
