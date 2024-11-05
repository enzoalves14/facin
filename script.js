function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

let cartItems = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Adiciona o produto ao carrinho
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
}

function removeFromCart(index) {
    // Remove o produto do carrinho pelo índice
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Limpa os itens existentes

    totalPrice = 0; // Reseta o preço total

    cartItems.forEach((item, index) => {
        totalPrice += item.price; // Atualiza o preço total
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;

        // Cria o botão de remoção
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.classList.add('btn-remove'); // Adiciona a classe ao botão
        removeButton.onclick = () => removeFromCart(index); // Chama a função de remoção

        // Adiciona o item e o botão ao container
        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);
    });

    // Atualiza o preço total exibido
    document.getElementById('total-price').textContent = `R$ ${totalPrice.toFixed(2)}`;
}
