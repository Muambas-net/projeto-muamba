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
      modelo: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      fabricante: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      preco: {
        allowNull: false,
        type: DataTypes.STRING(20)
      },
      serial: {
        allowNull: false,
        type: DataTypes.STRING(200),
        isUnique: true,
        field:'serial_number'
      },
      estoque: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    }, {
        timestamps: true,
        tableName: 'Produto',
    });
/*       createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
        field: 'created_at',
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
        field: 'updated_at',
        allowNull: false,
      } */

/*     Produto.belongsToMany(models.Order, {
      through: "order_products",
      foreignKey: "id",
      otherKey: "order_id",
      as: "orderNumber",
      timestamps: false
  }) */

    return Produto;
};