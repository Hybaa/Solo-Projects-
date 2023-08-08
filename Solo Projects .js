
var productsData = [
    { name: "Dark Chocolate", price: 3.99, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\chocolate-product2.jpg" },
    { name: "Milk Chocolate", price: 2.99, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\pushpak-dsilva-r-hQw_obFd0-unsplash.jpg" },
    { name: "White Chocolate", price: 4.49, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\emy-Rx3QSrG1coc-unsplash.jpg" }
];

// Function to create a product card element
function createProductCard(imageSrc, productName, price) {
    var productGrid = document.querySelector('.product-grid');

    var card = document.createElement('div');
    card.classList.add('product-card');

    var image = document.createElement('img');
    image.src = imageSrc;
    image.alt = productName + ' Image';
    image.classList.add('product-image');

    var name = document.createElement('h3');
    name.textContent = productName;

    var priceTag = document.createElement('p');
    priceTag.textContent = '$' + price;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(priceTag);

    productGrid.appendChild(card);
  }

  // Example usage:
  

// Call the displayProducts function when the page loads
$(document).ready(function() {
    displayProducts();
});
