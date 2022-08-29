'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.addColumn('produtos', "destaques",  { 
      type: Sequelize.DataTypes.STRING(10),
      allowNull: true,
      after: 'ativo'
    });

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('produtos', 'destaques');
  }
};
