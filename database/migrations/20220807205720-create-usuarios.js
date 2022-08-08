'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
            id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            },
            nome: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
            },
            avatar: {
            type: Sequelize.DataTypes.STRING(30),
            allowNull: true,
             },
            dataNascimento: {
            type: Sequelize.DataTypes.STRING(30),
            field:'data_nascimento',
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
            defaultValue: Sequelize.fn('NOW'),
            field: 'created_at',
            allowNull: false
            },
            updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
            field: 'updated_at',
            allowNull: false,
            }
    }, {
            timestamps: true,
            tableName: 'users',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};