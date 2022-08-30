'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.changeColumn('pedido_produtos', 'produto_id', {
      produto_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'produtos',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
