const { v4 } = require('uuid');
const { Pedido } = require('../models');

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
    finalizarCompra: async (req, res) => {
        const { pagamento, entrega, total } = req.body;
            
        
        const usuarioId = req.session.usuario.id;
        const pedido = {
            id: v4(),
            usuarioId: usuarioId,
            itens: req.session.carrinho,
            total,
            pagamento,
            entrega
          }

        await Pedido.save(pedido);

        return res.redirect('/pedidoConcluido/' + pedido.id);

    },
    pedidoConcluido: async (req, res) => {
        const { id } = req.params;
        const pedidos = await Pedido.findOne({where: {id}});
        console.log(pedidos)
        return res.render('home/pedidoConcluido', { pedidos });
    }
}

module.exports = CarrinhoController;