'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      const produtos = [

        {
          nome: "Xbox series X",
          imagem: "Console-Xbox-Series-X.jpg",
          descricao: "Xbox Series X de ultima tecnologia",
          preco: 6000.00,
          ativo: "on",
          destaques: "on",
          estoque: 4,
          categorias_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Xiaomi Redmi Note 10",
          imagem: "xaomi-note-10.jpg",
          descricao: "Telefone",
          preco: 1999.00,
          ativo: "on",
          destaques: "on",
          estoque: 10,
          categorias_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Xbos series S",
          imagem: "XboxS.jpg",
          descricao: "Xbox series S de ultima tecnologia",
          preco: 3499.00,
          ativo: "on",
          destaques: "on",
          estoque: 8,
          categorias_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Playstation 5",
          imagem: "play-5.jpg",
          descricao: "Playstation 5 de ultima tecnologia",
          preco: 5000.00,
          ativo: "on",
          destaques: "on",
          estoque: 10,
          categorias_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Teclado Mecanico",
          imagem: "teclados.jpg",
          descricao: "Teclado mecanico Razer",
          preco: 500.60,
          ativo: "on",
          destaques: "on",
          estoque: 10,
          categorias_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Notebook Asus",
          imagem: "notebook.jpg",
          descricao: "Notebook para trabalho",
          preco: 3249.90,
          ativo: "on",
          destaques: "on",
          estoque: 2,
          categorias_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Headset Xbox",
          imagem: "headset-xbox.jpg",
          descricao: "Headset Gamer Xbox",
          preco: 480.90,
          ativo: "on",
          destaques: "on",
          estoque: 5,
          categorias_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Headset Gamer",
          imagem: "headsets.jpg",
          descricao: "Headset Gamer massa",
          preco: 1000.00,
          ativo: "on",
          destaques: "on",
          estoque: 5,
          categorias_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Notebook Dell",
          imagem: "note-dell-g15.jpg",
          descricao: "Dell G15 Gamer",
          preco: 8000.00,
          ativo: "on",
          destaques: "on",
          estoque: 4,
          categorias_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          nome: "Notebook Dell Alienware",
          imagem: "note-dell-alien.jpg",
          descricao: "Dell Gamer Ultra",
          preco: 12000.00,
          ativo: "on",
          destaques: "on",
          estoque: 4,
          categorias_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()

        },
      ]
     await queryInterface.bulkInsert('produtos', produtos, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('produtos', null, {});
  }
};