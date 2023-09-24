// Crie uma variável para armazenar os itens no carrinho
const carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    carrinho.push(nomeProduto);
    alert(`${nomeProduto} adicionado ao carrinho!`);
}

// Adicionar um evento de clique para cada botão "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const nomeProduto = document.querySelectorAll('h2')[index].textContent;
        adicionarAoCarrinho(nomeProduto);
    });
});



