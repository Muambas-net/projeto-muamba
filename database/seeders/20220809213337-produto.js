'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Produto', [{
      nome: "Processador AMD Ryzen 5 3600",
      preco: "1199.99",
      descricao: "Processador AMD Ryzen.Cache 32MB 3.6GHz",
      categoria: "hardware"

    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
