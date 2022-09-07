'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      const categorias = [
        {
          id: 1,
          name: "Headset"
        },
        {
          id: 2,
          name: "Teclado"
        },
        {
          id: 3,
          name: "Notebook"
        },
        {
          id: 4,
          name: "Telefone"
        },
        {
          id: 5,
          name: "Video Games"
        }
      ]
     await queryInterface.bulkInsert('categorias', categorias, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('categorias', null, {});
  }
};