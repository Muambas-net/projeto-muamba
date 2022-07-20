const fs = require('fs');
const { v4: geradorDeId } = require('uuid');

function open() {
    let content = fs.readFileSync("./db.json", "utf8")
    const db = JSON.parse(content); // de texto json para js
    return db;
}

function store(db) {
    content = JSON.stringify(db); // de js para texto json
    fs.writeFileSync("./db.json", content, "utf8")
}

const PedidosModel = {
    findAll: () => {
        const db = open();
        return db.pedidos;
    },
    findById: (id) => {
        const db = open();
        const pedido = db.pedidos.find(pedido => pedido.id == id);
        return pedido;
    },
    save: (pedido) => {
        const db = open();
        pedido.id = geradorDeId();
        db.pedidos.push(pedido);
        store(db);
    },
    // update: (id, produtoAtualizado) => {
    //     const db = open();
    //     const index = db.produtos.findIndex(produto => produto.id == id);
    //     db.produtos[index] = produtoAtualizado;
    //     store(db);
    // },
    // delete: (id) => {
    //     const db = open();
    //     const index = db.pedidos.findIndex(pedido => pedido.id == id);
    //     db.pedidos.splice(index, 1);
    //     store(db);
    // }
}

module.exports = PedidosModel;