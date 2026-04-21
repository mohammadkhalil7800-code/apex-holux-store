const products = [
  { id: 1, name: "Nike Air Force 1", price: 90 },
  { id: 2, name: "Adidas Ultraboost", price: 120 },
  { id: 3, name: "Nike Running Shoes", price: 85 },
  { id: 4, name: "Puma Sports Shoes", price: 75 },

  { id: 5, name: "Sketchers Memory Foam", price: 70 },
  { id: 6, name: "Sketchers Walking Shoes", price: 68 },

  { id: 7, name: "Jordan Retro Sneakers", price: 150 },
  { id: 8, name: "Air Jordan 1 Low", price: 140 },

  { id: 9, name: "Luxury Slides", price: 55 },
  { id: 10, name: "Nike Slides", price: 45 },

  { id: 11, name: "Adidas Slides", price: 40 },
  { id: 12, name: "Soft Beach Slippers", price: 20 },

  { id: 13, name: "Converse Classic", price: 65 },
  { id: 14, name: "Vans Old Skool", price: 70 },

  { id: 15, name: "New Balance Running", price: 95 },
  { id: 16, name: "Hiking Trail Shoes", price: 110 }
];

let cart = [];

// SHOW PRODUCTS
function loadProducts() {
  const div = document.getElementById("products");

  products.forEach(p => {
    div.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="add(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ADD
function add(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  renderCart();
}

// REMOVE
function remove(index) {
  cart.splice(index, 1);
  renderCart();
}

// CART
function renderCart() {
  const div = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  div.innerHTML = "";

  let total = 0;

  cart.forEach((c, i) => {
    total += c.price;

    div.innerHTML += `
      <p>
        ${c.name} - $${c.price}
        <button onclick="remove(${i})">❌</button>
      </p>
    `;
  });

  totalSpan.innerText = total;
}

// CHECKOUT
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let msg = "🛒 NEW ORDER%0A%0A";

  cart.forEach(c => {
    msg += "• " + c.name + "%0A";
  });

  window.open("https://wa.me/93764594322?text=" + msg);
}

loadProducts();