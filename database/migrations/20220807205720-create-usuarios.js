'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
            id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
            },
            nome: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
            },
            avatar: {
            type: Sequelize.DataTypes.STRING(200),
            allowNull: true,
             },
            data_nascimento: {
            type: Sequelize.DataTypes.STRING(30),
            allowNull: false, 
            },
            genero: {
            type: Sequelize.DataTypes.STRING(30),
            allowNull: false,
            },
            email: {
            type: Sequelize.DataTypes.STRING(200),
              allowNull: false,
              unique: true,
            },
            cpf: {
            type: Sequelize.DataTypes.STRING(20),
            allowNull: false,
            },
            senha: {
            type: Sequelize.DataTypes.STRING(200),
            allowNull: false,
            unique: true, 
            },
            createdAt: {
             type: Sequelize.DATE,
            allowNull: false
            },
            updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
            }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};