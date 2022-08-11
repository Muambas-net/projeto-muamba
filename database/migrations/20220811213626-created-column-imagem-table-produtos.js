'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.addColumn('produtos', "imagem",  { 
      type: Sequelize.DataTypes.STRING(200),
      allowNull: false,
      after: 'nome'
    });

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('produtos', 'imagem');
  }
};
