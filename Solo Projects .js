
document.addEventListener("DOMContentLoaded", displayProducts);
Step 4: Create a folder named "images" and add some sample images of chocolates (dark_chocolate.jpg, milk_chocolate.jpg, white_chocolate.jpg).

Now, when you open the HTML file in a web browser, you should see a basic chocolate shop website with sample products displayed on the page. The products are added dynamically using JavaScript and styled with CSS.

Remember that this is just a basic example to get you started. In a real-world scenario, you would likely use a backend server to fetch product data, handle user interactions, and manage the shopping cart and checkout process. Additionally, you would implement more complex features like filtering products, search functionality, user authentication, and more.





javascript
Copy code
// Sample product data (you can replace this with your own data from a backend or database)
const productsData = [
    { name: "Dark Chocolate", price: 3.99, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\chocolate-product2.jpg" },
    { name: "Milk Chocolate", price: 2.99, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\pushpak-dsilva-r-hQw_obFd0-unsplash.jpg" },
    { name: "White Chocolate", price: 4.49, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\emy-Rx3QSrG1coc-unsplash.jpg" }
];

// Function to create a product card element
function createProductCard(imageSrc, productName, price) {
    const productGrid = document.querySelector('.product-grid');

    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = productName + ' Image';
    image.classList.add('product-image');

    const name = document.createElement('h3');
    name.textContent = productName;

    const priceTag = document.createElement('p');
    priceTag.textContent = '$' + price;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(priceTag);

    productGrid.appendChild(card);
  }

// Function to display products on the page
function displayProducts() {
    const productSection = $('.container .product-grid');

    productsData.forEach((product) => {
        const productCard = createProductCard(product);
        productSection.append(productCard);
    });
}

// Call the displayProducts function when the page loads
$(document).ready(function() {
    displayProducts();
});
