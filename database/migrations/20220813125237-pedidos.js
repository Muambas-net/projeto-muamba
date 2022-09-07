'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { 
          model: 'usuarios', 
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      total: {
        type: Sequelize.DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      pagamento: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      entrega: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.STRING(200)
      }
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('pedidos');
  }
};
