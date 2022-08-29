'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      modelo: {
        type: Sequelize.DataTypes.STRING(200),
      },
      fabricante: {
        type: Sequelize.DataTypes.STRING(200),
      },
      descricao: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      preco: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(5, 2)
      },
      serial: {
        type: Sequelize.DataTypes.STRING(200),
        isUnique: true,
        field:'serial_number'
      },
      estoque: {
        type: Sequelize.DataTypes.INTEGER(20),
      },
      categorias_id: {
        type: Sequelize.DataTypes.INTEGER(200),
        allowNull: false,
        references: {
          model: {
            tableName: 'categorias',
          },
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
