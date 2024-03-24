//------------------------- creating product objects -------------------------------------
class Product {
    constructor(name, description, price, imageUrl) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

//----------------------------- Array of product objects -----------------------------------
let products = [
    new Product("Book", "integrates interconnected devices", 10, "../Images/book.jpg"),
    new Product("Bag", "integrates interconnected devices", 16, "../Images/bag 2.jpg"),
    new Product("Bag 1", "integrates interconnected devices", 13 , "../Images/bag.jpg"),
    new Product("shoe", "integrates interconnected devices", 11, "../Images/book 2.jpg"),
    new Product("Book 2", "integrates interconnected devices", 16, "../Images/shoe.jpg")
];

/**========================================================================================
 * 
 * @param {*} product 
 * @returns 
 * Function to create product cards
 =========================================================================================*/
function createProductCard(product) {
    let card = document.createElement('div');
    card.classList.add('card');

    let image = document.createElement('img');
    image.src = product.imageUrl;
    image.alt = product.name;
    card.appendChild(image);

    let description = document.createElement('div');
    description.classList.add('card-description');
    card.appendChild(description);

    let title = document.createElement('h1');
    title.textContent = product.name;
    description.appendChild(title);

    let desc = document.createElement('p');
    desc.textContent = product.description;
    description.appendChild(desc);

    let price = document.createElement('p');
    price.textContent = 'Price: $' + product.price;
    price.classList.add('price');
    description.appendChild(price);

    let addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.onclick = function() {
        addToCart(product);
    };
    description.appendChild(addToCartBtn);

    return card;
}

/**================================================================================
 * Function to display products on the page
 =================================================================================*/
function displayProducts() {
    let cardContainer = document.querySelector('.card-container');

    products.forEach(product => {
        let card = createProductCard(product);
        cardContainer.appendChild(card);
    });
}

//------------------- Call the displayProducts function to populate the page ---------------
displayProducts();

//------------------- Define a global variable to store cart items --------------------------
let cart = [];

/**==============================================================================
 * Function to save the cart details in localStorage
 =================================================================================*/
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**=============================================================================
 * Function to load the cart details from localStorage
 ==============================================================================*/
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

/**============================================================================
 * 
 * @param {*} product 
 * @returns
 * Function to add product to cart 
 =============================================================================*/
function addToCart(product) {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
        // If the product exists, display an alert and return
        alert("The product already exists in the cart.");
        return;
    }

    // If the product doesn't exist, add it to the cart
    cart.push({ name: product.name, price: product.price, description: product.description, imageUrl: product.imageUrl, quantity: 1 });
    updateCartCount();
    saveCart(); // Save cart after modifying
}


/**=============================================================================
 * Function to update cart count
 ===============================================================================*/
function updateCartCount() {
    const cartCountElement = document.querySelector('.icon-cart span');
    cartCountElement.textContent = cart.length;
}

document.querySelector('.icon-cart').addEventListener('click', function() {
    // Redirect to the cart page
    window.location.href = 'cart.html';
});

// Event listener for Save Cart button
// document.querySelector('.save-cart-btn').addEventListener('click', function() {
//     saveCart();
// });

//---------------------- Load cart details when the page loads -----------------------
window.addEventListener('DOMContentLoaded', function() {
    loadCart();
});
