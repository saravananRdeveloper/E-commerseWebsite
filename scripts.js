document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            cart.push({ name: productName, price: productPrice });
            console.log(cart);
            alert(`${productName} added to cart!`);
        });
    });

    const cartItemsContainer = document.querySelector('.cart-items');
    if (cartItemsContainer) {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.name} - ${item.price}`;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    document.getElementById('checkout')?.addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });
});