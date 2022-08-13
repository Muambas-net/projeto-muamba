'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
    const produtos = [
      {
        id: 2,
        nome: "Notebook Samsung Intel Core i5-1135G7, 8GB RAM, SSD 256GB",
        descricao: "Notebook Samsung",
        preco: 3429.99,
        categorias_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ]
     await queryInterface.bulkInsert('produtos', produtos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
