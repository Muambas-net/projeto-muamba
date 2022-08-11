'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
    const produtos = [
      {
        id: 1,
        nome: "Controle de xbox",
        descricao: "Controle para consoles microsoft e pcs",
        preco: "1199.99",
        categorias_id: 5,
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
