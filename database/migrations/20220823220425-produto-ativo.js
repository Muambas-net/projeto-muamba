'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.addColumn('produtos', "ativo",  { 
      type: Sequelize.DataTypes.STRING(10),
      allowNull: true,
      after: 'preco'
    });

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('produtos', 'ativo');
  }
};