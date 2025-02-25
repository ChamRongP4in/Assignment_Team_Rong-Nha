var products = [
  {
    id: 3,
    type: 'Men',
    name: 'ហនុមាន',
    price: 25.5,
    img: 'image/productMen/p1.png',
    size: ['M', 'L', 'XL', 'XXL'],
    description:
      'Classic checkered trousers that offer a perfect blend of style and comfort, suitable for casual and business attire.',
  },
  {
    id: 17,
    type: 'Men',
    name: 'អាវឡូយ',
    price: 25.5,
    img: 'image/productMen/p2.png',
    size: ['M', 'L', 'XL', 'XXL'],
    description:
      'Classic checkered trousers that offer a perfect blend of style and comfort, suitable for casual and business attire.',
  },
  {
    id: 1,
    type: 'Women',
    name: 'Esprit Ruffle Shirt',
    price: 16.99,
    img: 'images/product-01.jpg',
    size: ['S', 'M', 'L', 'XL'],
    description:
      'A chic and elegant ruffle shirt with a lightweight fabric, perfect for casual and formal occasions.',
    images: [
      'images/product-detail-01.jpg',
      'images/product-detail-02.jpg',
      'images/product-detail-03.jpg',
    ],
    colors: ['Red', 'Blue', 'White', 'Grey'],
  },
  {
    id: 2,
    type: 'Women',
    name: 'Herschel Supply',
    price: 35.31,
    img: 'images/product-02.jpg',
    size: ['S', 'M', 'L'],
    description:
      'A stylish and durable top designed for everyday wear, crafted with high-quality materials for long-lasting comfort.',
  },
  {
    id: 4,
    type: 'Women',
    name: 'Classic Trench Coat',
    price: 75.0,
    img: 'images/product-04.jpg',
    size: ['S', 'M', 'L', 'XL'],
    description:
      'A timeless trench coat with a sleek design, providing warmth and sophistication for chilly days.',
  },
  {
    id: 5,
    type: 'Women',
    name: 'Front Pocket Jumper',
    price: 34.75,
    img: 'images/product-05.jpg',
    size: ['XS', 'S', 'M', 'L'],
    description:
      'A cozy jumper with a stylish front pocket, perfect for layering during cooler seasons.',
  },
  {
    id: 6,
    type: 'Watches',
    name: 'Vintage Inspired Classic',
    price: 93.2,
    img: 'images/product-06.jpg',
    size: ['One Size'],
    description:
      'A sophisticated vintage-inspired watch with a classic design, crafted for timeless elegance.',
  },
  {
    id: 7,
    type: 'Women',
    name: 'Shirt in Stretch Cotton',
    price: 52.66,
    img: 'images/product-07.jpg',
    size: ['S', 'M', 'L', 'XL'],
    description:
      'A comfortable stretch cotton shirt that fits beautifully while providing all-day comfort.',
  },
  {
    id: 8,
    type: 'Women',
    name: 'Pieces Metallic Printed',
    price: 18.96,
    img: 'images/product-08.jpg',
    size: ['S', 'M', 'L'],
    description:
      'A trendy metallic printed top that adds a touch of glam to your casual wardrobe.',
  },
  {
    id: 9,
    type: 'Shoes',
    name: 'Converse All Star Hi Plimsolls',
    price: 75.0,
    img: 'images/product-09.jpg',
    size: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    description:
      'Iconic Converse All Star high-top sneakers with a classic, versatile design for everyday wear.',
  },
  {
    id: 10,
    type: 'Women',
    name: 'Femme T-Shirt In Stripe',
    price: 25.85,
    img: 'images/product-10.jpg',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'A casual striped T-shirt with a relaxed fit, perfect for layering or wearing on its own.',
  },
  {
    id: 11,
    type: 'Men',
    name: 'Herschel Supply',
    price: 63.16,
    img: 'images/product-11.jpg',
    size: ['S', 'M', 'L', 'XL'],
    description:
      'A comfortable and stylish shirt from Herschel Supply, crafted with premium fabric for durability.',
  },
  {
    id: 12,
    type: 'Woman',
    name: 'Herschel Supply',
    price: 63.15,
    img: 'images/product-01.jpg',
    size: ['S', 'M', 'L', 'XL'],
    description:
      'A well-designed casual shirt that combines modern aesthetics with premium comfort.',
  },
  {
    id: 13,
    type: 'Women',
    name: 'T-Shirt with Sleeve',
    price: 18.49,
    img: 'images/product-13.jpg',
    size: ['XS', 'S', 'M', 'L'],

    description:
      'A lightweight T-shirt featuring stylish sleeves, ideal for both casual and semi-formal occasions.',
  },
  {
    id: 14,
    type: 'Women',
    name: 'Pretty Little Thing',
    price: 54.79,
    img: 'images/product-14.jpg',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'A trendy dress designed to make a statement, blending comfort and fashion effortlessly.',
  },
  {
    id: 15,
    type: 'Watches',
    name: 'Mini Silver Mesh Watch',
    price: 86.85,
    img: 'images/product-15.jpg',
    size: ['One Size'],
    description:
      'A sleek silver mesh watch with a minimalist design, perfect for adding a touch of elegance to any outfit.',
  },
  {
    id: 16,
    type: 'Women',
    name: 'Square Neck Back',
    price: 29.64,
    img: 'images/product-16.jpg',
    size: ['S', 'M', 'L'],
    description:
      'A stylish square-neck top with a flattering fit, designed for both comfort and sophistication.',
  },
  {
    id: 18,
    type: 'Bag',
    name: 'Square Neck Back',
    price: 29.64,
    img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/backpack/i/q/h/6-backpack-for-college-school-travel-office-backpack-for-men-original-imah4b9zzcfty9xb.jpeg?q=20&crop=false',
    size: ['S', 'M', 'L'],
    description:
      'A stylish square-neck top with a flattering fit, designed for both comfort and sophistication.',
  },
];

var showProduct = document.querySelector('.product_list');

function renderProducts() {
  if (showProduct) {
    showProduct.innerHTML = ''; // Clear previous content

    products.forEach((item) => {
      let productItem = `
      <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${item.type}">
          <div class="block2">
              <div class="block2-pic hov-img0">
                  <img src="${item.img}" alt="IMG-PRODUCT">

                  <a href="#" class="block2-btn flex-c-m font-khmer cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1" data-id="${
                    item.id
                  }">
                      ទីញឥឡូវនេះ
                  </a>
              </div>

              <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l">
                      <a href="#" class="font-khmerl js-show-modal1 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                          ${item.name}
                      </a>

                      <span class="stext-105 cl3">
                      US $${item.price.toFixed(2)}
                      </span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                      <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                          <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
                          <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
                      </a>
                  </div>
              </div>
          </div>
      </div>
      `;

      showProduct.innerHTML += productItem;
    });
  }
}

// Function to Create Product Modal
function createProductModal() {
  let modalHTML = `
      <div id="product-modal" class="wrap-modal1 js-modal1 p-t-60 p-b-20" style="display: none;">
          <div class="overlay-modal1 js-hide-modal1"></div>

          <div class="container">
              <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                  <button class="how-pos3 hov3 trans-04 js-hide-modal1">
                      <img src="images/icons/icon-close.png" alt="CLOSE">
                  </button>

                  <div class="row">
                      <div class="col-md-6 col-lg-7 p-b-30">
                          <div class="p-l-25 p-r-30 p-lr-0-lg">
                              <div class="wrap-pic-w pos-relative">
                                  <img class="imgnew" style=" object-fit: cover;" id="modal-image" src="" alt="Product Image">
                              </div>
                          </div>
                      </div>

                      <div class="col-md-6 col-lg-5 p-b-30">
                          <div class="p-r-50 p-t-5 p-lr-0-lg">
                              <h4 id="modal-name" class="mtext-105 cl2 p-b-14">Product Name</h4>
                              <span id="modal-price" class="mtext-106 cl2">$0.00</span>
                              <p id="modal-description" class="stext-102 cl3 p-t-23">Product description goes here.</p>

                              <!--  -->
                                  <div class="p-t-33">
                                    <div class="flex-w flex-r-m p-b-10">
                                      <div class="size-203 font-khmerl flex-c-m respon6">ទំហំ</div>

                                      <div class="size-204 font-khmerl respon6-next">
                                        <div class="rs1-select2  bg0">
                                          <select class="js-select2" name="time">
                                            <option>ទំហំ S</option>
                                            <option>ទំហំ M</option>
                                            <option>ទំហំ L</option>
                                            <option>ទំហំ XL</option>
                                          </select>
                                          <div class="dropDownSelect2"></div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="flex-w flex-r-m p-b-10">
                                      <div class="size-204 flex-w flex-m respon6-next">
                                        <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                                          <div
                                            class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                                          >
                                            <i class="fs-16 zmdi zmdi-minus"></i>
                                          </div>

                                          <input
                                            class="mtext-104 cl3 txt-center num-product"
                                            type="number"
                                            name="num-product"
                                            value="1"
                                          />

                                          <div
                                            class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                                          >
                                            <i class="fs-16 zmdi zmdi-plus"></i>
                                          </div>
                                        </div>

                                        <button
                                          class="flex-c-m font-khmer cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                                        >
                                          បញ្ចូលទៅក្នុង cart
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;

  // Add Modal to the Page
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

document.getElementById('cartModalBody')?.addEventListener('click', (e) => {
  const row = e.target.closest('tr');
  if (!row) return;
  const index = row.getAttribute('data-index');
  if (e.target.closest('.btn-num-product-up')) {
    cart[index].quantity++;
    updateAllViews();
  } else if (
    e.target.closest('.btn-num-product-down') &&
    cart[index].quantity > 1
  ) {
    cart[index].quantity--;
    updateAllViews();
  } else if (e.target.closest('.btn-smbtn-remove')) {
    cart.splice(index, 1);
    updateAllViews();
  }
});

document.addEventListener('click', (e) => {
  const quickBtn = e.target.closest('.js-show-modal1');
  if (quickBtn) {
    e.preventDefault();
    const pid = parseInt(quickBtn.getAttribute('data-id'));
    const product = products.find((p) => p.id === pid);
    if (product) {
      currentProduct = product;
      document.querySelector('.js-name-detail').textContent = product.name;
      document.querySelector('.mtext-106').textContent =
        '$' + product.price.toFixed(2);
      document.querySelector('#description').textContent =
        product.description || 'No description available.';
      document.querySelector('.slick3').innerHTML = `
      <div data-thumb="${product.img}">
        <div class="wrap-pic-w pos-relative">
          <img src="${product.img}" alt="IMG-PRODUCT">
          <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.img}">
            <i class="fa fa-expand"></i>
          </a>
        </div>
      </div>
    `;
      new bootstrap.Modal(document.getElementById('quickViewModal')).show();
    }
  }
});

// Function to Open and Populate Modal
function openModal(productId) {
  let product = products.find((p) => p.id == productId);
  if (product) {
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById(
      'modal-price'
    ).innerText = `US $ ${product.price.toFixed(2)}`;
    document.getElementById('modal-description').innerText =
      product.description;
    document.getElementById('modal-image').src = product.img;

    // Show the modal
    document.getElementById('product-modal').style.display = 'block';
  }
}

// Event Listener for Quick View Button Click
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('js-show-modal1')) {
    event.preventDefault();
    let productId = event.target.getAttribute('data-id');
    openModal(productId);
  }
});

// Event Listener for Closing Modal
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('js-hide-modal1')) {
    document.getElementById('product-modal').style.display = 'none';
  }
});

// Render Products & Create Modal on Page Load
renderProducts();
createProductModal();

////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('click', function (e) {
  if (e.target.closest('.js-addcart-detail')) {
    e.preventDefault();
    if (!currentProduct) return;

    // Get product details from currentProduct
    const productId = currentProduct.id;
    const productName = currentProduct.name;
    const productPrice = currentProduct.price;
    const productImage = currentProduct.img;

    // Get selected size and quantity from the modal
    const selectedSize = document.querySelector(
      '#product-modal .js-select2'
    ).value;
    const quantity = parseInt(
      document.querySelector('#product-modal .num-product').value
    );

    // Create cart item object
    const cartItem = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      size: selectedSize,
      quantity: quantity,
      total: productPrice * quantity,
    };

    // Add to cart and update UI
    addToCart(cartItem);
    updateCartUI();

    // Close the modal
    document.getElementById('product-modal').style.display = 'none';
  }
});

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(
    (c) => c.id === item.id && c.size === item.size
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartWrap = document.querySelector('.header-cart-wrapitem');
  const totalElement = document.querySelector('.header-cart-total');

  // Clear existing items
  cartWrap.innerHTML = '';

  let total = 0;

  // Populate cart items
  cart.forEach((item) => {
    total += item.total;
    cartWrap.innerHTML += `
      <li class="header-cart-item flex-w flex-t m-b-12">
        <div class="header-cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="header-cart-item-txt p-t-8">
          <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
            ${item.name} (${item.size})
          </a>
          <span class="header-cart-item-info">
            ${item.quantity} x $${item.price.toFixed(2)}
          </span>
        </div>
      </li>
    `;
  });

  // Update total
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  updateCartUI();
});

document.addEventListener('click', function (e) {
  const numDown = e.target.closest('.btn-num-product-down');
  const numUp = e.target.closest('.btn-num-product-up');
  const numProduct = document.querySelector('#product-modal .num-product');

  if (numDown) {
    e.preventDefault();
    let currentVal = parseInt(numProduct.value);
    if (currentVal > 1) numProduct.value = currentVal - 1;
  }

  if (numUp) {
    e.preventDefault();
    let currentVal = parseInt(numProduct.value);
    numProduct.value = currentVal + 1;
  }
});

//////////////////////////////////////////////////////////////////////////////

function updateCartUI() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartWrap = document.querySelector('.header-cart-wrapitem');
  const totalElement = document.querySelector('.header-cart-total');

  cartWrap.innerHTML = '';
  let total = 0;

  cart.forEach((item) => {
    total += item.total;
    cartWrap.innerHTML += `
      <li class="header-cart-item flex-w flex-t m-b-12">
        <div class="header-cart-item-img">
          <img src="${item.image}" alt="${item.name}">
          <button class="js-remove-item" data-id="${item.id}" data-size="${
      item.size
    }">
            <i class="zmdi zmdi-close"></i>
          </button>
        </div>
        <div class="header-cart-item-txt p-t-8">
          <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
            ${item.name} (${item.size})
          </a>
          <span class="header-cart-item-info">
            ${item.quantity} x $${item.price.toFixed(2)}
          </span>
        </div>
      </li>
    `;
  });

  totalElement.textContent = `សរុប: $${total.toFixed(2)}`;
}

document.addEventListener('click', function (e) {
  const removeBtn = e.target.closest('.js-remove-item');
  if (removeBtn) {
    const productId = removeBtn.dataset.id;
    const size = removeBtn.dataset.size;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filter out the item to remove
    cart = cart.filter(
      (item) => !(item.id.toString() === productId && item.size === size)
    );

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  }
});

////////////////////////////////////////////////////////////////

// cart.js
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartTable = document.querySelector('.table-shopping-cart');
  const cartTotals = document.querySelectorAll('.mtext-110');

  function renderCart() {
    const tbody =
      cartTable.querySelector('tbody') || document.createElement('tbody');
    tbody.innerHTML = '';

    cart.forEach((item, index) => {
      const row = document.createElement('tr');
      row.className = 'table_row';
      row.innerHTML = `
        <td class="column-1">
          <div class="how-itemcart1">
            <img src="${item.image}" alt="${item.name}">
            <button class="js-remove-item" data-index="${index}">&times;</button>
          </div>
        </td>
        <td class="column-2">${item.name} (${item.size})</td>
        <td class="column-3">$${item.price.toFixed(2)}</td>
        <td class="column-4">
          <div class="wrap-num-product flex-w m-l-auto m-r-0">
            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
              <i class="fs-16 zmdi zmdi-minus"></i>
            </div>
            <input class="font-khmerl cl3 txt-center num-product" 
                   type="number" 
                   value="${item.quantity}"
                   data-index="${index}"
                   min="1">
            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
              <i class="fs-16 zmdi zmdi-plus"></i>
            </div>
          </div>
        </td>
        <td class="column-5">$${(item.price * item.quantity).toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });

    cartTable.appendChild(tbody);
    updateTotals();
  }

  function updateTotals() {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    cartTotals.forEach((totalElement) => {
      totalElement.textContent = `$${subtotal.toFixed(2)}`;
    });
  }

  // Quantity handlers
  document.addEventListener('click', (e) => {
    const target = e.target.closest(
      '.btn-num-product-down, .btn-num-product-up'
    );
    if (target) {
      const input = target.parentElement.querySelector('.num-product');
      const index = input.dataset.index;
      const currentVal = parseInt(input.value);

      if (target.classList.contains('btn-num-product-down') && currentVal > 1) {
        input.value = currentVal - 1;
      } else if (target.classList.contains('btn-num-product-up')) {
        input.value = currentVal + 1;
      }

      cart[index].quantity = parseInt(input.value);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateTotals();
    }
  });

  // Input change handler
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('num-product')) {
      const index = e.target.dataset.index;
      cart[index].quantity = parseInt(e.target.value);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateTotals();
    }
  });

  // Remove item handler
  document.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.js-remove-item');
    if (removeBtn) {
      const index = removeBtn.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
  });

  // Initial render
  renderCart();
});

///////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const applyCouponBtn = document.querySelector(
    '.flex-c-m.stext-101.cl2.size-118'
  );
  const promoMessage = document.getElementById('promo-message');
  const totalPriceElement = document.querySelector('.size-209.p-t-1 span');

  if (!applyCouponBtn || !promoMessage || !totalPriceElement) {
    console.error('One or more required elements are missing.');
    return;
  }

  let originalTotal = parseFloat(
    totalPriceElement.textContent.replace('$', '').trim()
  );

  applyCouponBtn.addEventListener('click', function () {
    const couponInput = document
      .querySelector("input[name='coupon']")
      .value.trim();

    // Reset message styling
    promoMessage.textContent = '';
    promoMessage.classList.remove('text-success', 'text-danger');

    // Define coupon codes and discounts
    const coupons = {
      DISCOUNT10: 10, // 10% discount
      SAVE20: 20, // 20% discount
      LOVETHEANA: 50, // 50% discount
    };

    if (coupons[couponInput]) {
      const discount = (originalTotal * coupons[couponInput]) / 100;
      const newTotal = (originalTotal - discount).toFixed(2);
      totalPriceElement.textContent = `$${newTotal}`;

      promoMessage.textContent = `Coupon applied! You saved $${discount.toFixed(
        2
      )}.`;
      promoMessage.classList.add('text-success');
    } else {
      promoMessage.textContent = 'Invalid coupon code.';
      promoMessage.classList.add('text-danger');
    }
  });
});
