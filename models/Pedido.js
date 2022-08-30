module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    pagamento: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    entrega: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(200)
    }
  }, {
      timestamps: false,
      tableName: 'pedidos',
      onDelete: 'CASCADE'
  });

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    });

    Pedido.belongsToMany(models.Produto, {
      through: 'pedido_produtos',
      foreignKey: 'pedido_id',
      otherKey: 'produto_id',
      as: 'produtos',
      onDelete: 'CASCADE'
    });
  }

  return Pedido;
}