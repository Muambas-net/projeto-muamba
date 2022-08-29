module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
    
          },
          name: {
            type: DataTypes.STRING(200),
            allowNull: false,
          }
    }, {
        timestamps: false,
        tableName: 'categorias',
    });
    return Categoria;
}
