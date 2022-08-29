'use strict';

module.exports = (Sequelize, DataTypes) => {
    const Usuario = Sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(200),

        },
        email: {
            type: DataTypes.STRING(200),
            isUnique: true,

        },
        senha: {
            type: DataTypes.STRING(400),

        },
        telefone: {
            type: DataTypes.STRING(100),
            defaultValue: ""

        },
        cep: {
            type: DataTypes.STRING(200),

        },
        numero_residencial: {
            type: DataTypes.STRING(200),
            defaultValue: ""

        },
        cpf: {
            type: DataTypes.STRING(16),
            isUnique: true,

        },

        avatar: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        is_admin: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        }
    },
     {
        timestamps: false,
        tableName: 'usuarios'
     }
     
     );

    return Usuario;
};
