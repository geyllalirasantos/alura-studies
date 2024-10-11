let compraTotal;
limpar();


function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUni =  parseFloat(produto.split('$')[1]);
    let quantidade = document.getElementById('quantidade').value;

    let compra = quantidade * valorUni;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${compra}</span>
        </section>`

    compraTotal = compraTotal + compra;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${compraTotal}`;
    document.getElementById('quantidade').value = 0;
}   

function limpar(){
    compraTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}