'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('pedido_produtos', {
      pedido_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'pedidos',
          key: 'id'
        },
        allowNull: false
      },
      produto_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'produtos',
          key: 'id'
        },
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('pedido_produtos');
  }
};
