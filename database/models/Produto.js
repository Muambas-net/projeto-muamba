module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
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
        allowNull: false,
      },
      fabricante: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      descricao: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      preco: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(20)
      },
      serial: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(200),
        isUnique: true,
        field:'serial_number'
      },
      estoque: {
        type: Sequelize.DataTypes.INTEGER(20),
        allowNull: false,
      },
      categoria: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
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
        timestamps: false,
        tableName: 'produtos',
    });

    return Produto;
};