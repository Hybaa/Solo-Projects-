
var products = [
    {
      image: 'c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\pushpak-dsilva-r-hQw_obFd0-unsplash.jpg',
    },
    {
      image: 'c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\emy-Rx3QSrG1coc-unsplash.jpg',
    },
  ];
  function createProductCards(products) {
    var productGrid = document.querySelector('.product-grid');
  
    products.forEach(product => {
      var card = document.createElement('div');
      card.classList.add('product-card');
  
      var image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name + ' Image';
      image.classList.add('product-image');
  
      var name = document.createElement('h3');
      name.textContent = product.name;
  
      var priceTag = document.createElement('p');
      priceTag.textContent = '$' + product.price;
  
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(priceTag);
      image.addEventListener('mouseenter', function() {
        image.src = 'c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\chocolate-banner.jpg';
        image.src = 'c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\egor-lyfar-DPNrBT1WCMs-unsplash.jpg" alt="Chocolate Product 2';
        image.src = 'c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\american-heritage-chocolate-TZFshUFzWRQ-unsplash.jpg" alt="Chocolate Product 2';
      });
  
      image.addEventListener('mouseleave', function() {
        image.src = product.image;
      });
  
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(priceTag);
  
      productGrid.appendChild(card);
    });
  }
var productsData = [
    { name: "Dark Chocolate", price: 3.99, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\chocolate-product2.jpg" },
    { name: "Milk Chocolate", price: 2.99, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\pushpak-dsilva-r-hQw_obFd0-unsplash.jpg" },
    { name: "White Chocolate", price: 4.49, image: "c:\Users\hibaz\Desktop\RBK\Solo-Projects- Hybaa\photo\emy-Rx3QSrG1coc-unsplash.jpg" }
];


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