module.exports = (sequelize, DataTypes) => {
  const PedidoProdutos = sequelize.define('PedidoProdutos', {
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
      timestamps: false,
      tableName: 'pedido_produtos',
  });
  PedidoProdutos.removeAttribute('id');
  return PedidoProdutos;
}