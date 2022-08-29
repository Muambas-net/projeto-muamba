'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('usuarios', { 
      id: {
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        isUnique: true,
        allowNull: false,
      },
      senha: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      cep: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      numero_residencial: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(16),
        isUnique: true,
        allowNull: false,
      },

      avatar: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
      },

      is_admin: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      }
    });
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('usuarios');

  }
};
