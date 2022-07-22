const { v4 } = require('uuid');
const PedidosModel = require('../models/pedidosModel');

const CarrinhoController = {

     showCart: (req, res) => {
        let {carrinho} = req.session;
        let total = 0;

        if(!carrinho) {
            return res.render("home/carrinho", {carrinho: [], total})
        }

        carrinho.forEach(produto => {
            total += parseFloat(produto.preco);
        });
        console.log(carrinho)
        return res.render('home/carrinho', {carrinho, total});
    },
    
    addCart: (req, res) => {
        const { id, nome, preco, imagem } = req.body;
        const produto = { id, nome, preco, imagem };


        if( req.session.carrinho ){
        req.session.carrinho.push(produto);
        } else {
        req.session.carrinho = [produto];
        }
        return res.redirect('/carrinho');
        
    },
    removeCart: (req, res) => { 
        const { id } = req.params;
        let { carrinho } = req.session;

        const index = carrinho.findIndex(produto => produto.id == id);

        let carrinhoAtualizado = carrinho.splice(index, 1);

        carrinho = carrinhoAtualizado;

        if (carrinho.length <= 0) {
            carrinho = [];
            return res.redirect('/carrinho');
        }
        return res.redirect('/carrinho');
    },
    finalizarCompra: (req, res) => {
        const { id, nome, preco, imagem, pagamento, entrega, total } = req.body;
            
        
        const usuarioId = req.session.usuario.id;
        const pedido = {
            id: v4(),
            usuarioId: usuarioId,
            itens: [{ produtoId: id, imagem, nome,
            preco }],
            total,
            pagamento,
            entrega
          }

        PedidosModel.save(pedido);

        return res.redirect('home/pedidoConcluido');

    },
    pedidoConcluido: (req, res) => {
        const { id } = req.params;
        const pedido = PedidosModel.findById(id);
        return res.render('home/pedidoConcluido', { pedido });
    }
}

module.exports = CarrinhoController;