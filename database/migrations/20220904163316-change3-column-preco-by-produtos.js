'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.changeColumn('produtos', 'preco', { 
        type: Sequelize.DataTypes.FLOAT(10,2),
        allowNull: false,
       });

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.removeColumn('produtos', 'preco');
     
  }
};