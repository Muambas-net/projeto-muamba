module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
            id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            },
            nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
            },
            avatar: {
            type: DataTypes.STRING(30),
            allowNull: true,
             },
            dataNascimento: {
            type: DataTypes.STRING(30),
            field:'data_nascimento',
            allowNull: false, 
            },
            genero: {
            type: DataTypes.STRING(30),
            allowNull: false,
            },
            email: {
            type: DataTypes.STRING(200),
              allowNull: false,
              unique: true,
            },
            cpf: {
            type: DataTypes.STRING(20),
            allowNull: false,
            },
            senha: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true, 
            },
            createdAt: {
             type: DataTypes.DATE,
            defaultValue: Sequelize.fn('NOW'),
            field: 'created_at',
            allowNull: false
            },
            updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('NOW'),
            field: 'updated_at',
            allowNull: false,
            }
    }, {
            timestamps: true,
            tableName: 'usuarios',
    });
    return Usuario;
};