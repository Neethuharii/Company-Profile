
document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const placeOrderBtn = document.getElementById('placeOrderBtn');

    //------------------  Retrieve cart items from localStorage -----------------------
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems.length === 0) {
        cartItemsContainer.textContent = 'Your cart is empty.';
    } else {
        let totalPrice = 0;

        cartItems.forEach(item => {
            // -------------------- Create list item for each product ------------------
            const listItem = document.createElement('li');

            //--------------------- Populate the list item with product details -----------
            listItem.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: $${item.price}</p>
            `;
            cartItemsContainer.appendChild(listItem);

            //---------------- Add the price of the item to the total price -----------------
            totalPrice += item.price;
        });

        //-------------------- Display total price --------------------------------------
        totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    //------------------- Listen for place order button click ---------------------------
    placeOrderBtn.addEventListener('click', function() {
        // Simulate order placement 
        alert('Your order has been placed!');

        //--------------------------------  Clear the cart -------------------------------
        localStorage.removeItem('cart');
        cartItemsContainer.textContent = 'Your cart is empty.';
        totalPriceContainer.textContent = 'Total Price: $0.00';
    });
});
