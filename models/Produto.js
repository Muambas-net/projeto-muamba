module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      imagem: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: "1657146345270-baixados.jpg"
      },
      modelo: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      fabricante: {
        type: DataTypes.STRING(200)
      },
      descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      preco: {
        allowNull: false,
        type: DataTypes.DECIMAL(5, 2)
      },
      serial: {
        type: DataTypes.STRING(200),
        isUnique: true,
        field:'serial_number'
      },
      estoque: {
        type: DataTypes.INTEGER(20),
      },
      categorias_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    }, {
        timestamps: true,
        tableName: 'produtos',
    });

    Produto.associate = (models) => {
      Produto.belongsTo(models.Categoria, {
        foreignKey: 'categorias_id',
        as: 'categoria'
      });
    }

    return Produto;
};