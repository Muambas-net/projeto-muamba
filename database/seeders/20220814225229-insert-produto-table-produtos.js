'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
    const produtos = [
      {
        nome: "Motorola Fusion one",
        imagem: "2486580294_1SZ.webp",
        descricao: "motorola Fusion one de ultima geração",
        preco: 1600.00,
        categorias_id: 4,
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