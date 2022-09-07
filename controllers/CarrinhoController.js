const { Pedido, PedidoProdutos } = require('../models');

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
        let { carrinho } = req.session;
                    
        
        const usuarioId = req.session.usuario.id;
        console.log(usuarioId);
        const pedido = {
            usuario_id: usuarioId,
            total,
            pagamento,
            entrega
          }

        const novoPedido = await Pedido.create(pedido);
                
        const pedidoProdutos = carrinho.map(produto => {
            return {
                pedido_id: novoPedido.id,
                produto_id: produto.id
            }
        });

        await PedidoProdutos.bulkCreate(pedidoProdutos)
        req.session.carrinho = [];
        return res.redirect('/pedidoConcluido/' + novoPedido.id);

    },
    pedidoConcluido: async (req, res) => {
        const { id } = req.params;
        const pedido = await Pedido.findOne({where: {id}, include: 'produtos'});
        return res.render('home/pedidoConcluido', { pedido: pedido });
    },
    
}

module.exports = CarrinhoController;