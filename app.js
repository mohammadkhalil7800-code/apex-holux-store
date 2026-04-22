const phoneNumber = "93764594322"; // WhatsApp number (change only here)

const products = [
  {name: "Nike Air Force 1", price: 90},
  {name: "Adidas Ultraboost", price: 120},
  {name: "Nike Running Shoes", price: 85},
  {name: "Puma Sports Shoes", price: 75},
  {name: "Jordan Retro Sneakers", price: 150},
  {name: "Air Jordan 1 Low", price: 140},
  {name: "Nike Air Max 270", price: 110},
  {name: "Adidas Yeezy Boost 350", price: 220},
  {name: "New Balance 550", price: 130},
  {name: "Vans Old Skool", price: 70}
];

// CART (with localStorage)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SAVE CART
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// RENDER PRODUCTS
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((p, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="https://via.placeholder.com/200">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${index})">🛒 Add</button>
      </div>
    `;
  });
}

// ADD TO CART (with quantity)
function addToCart(index) {
  let item = products[index];

  let found = cart.find(c => c.name === item.name);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({...item, qty: 1});
  }

  saveCart();
  renderCart();
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// CLEAR CART
function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

// RENDER CART
function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartDiv.innerHTML += `
      <p>
        ${item.name} x ${item.qty} = $${item.price * item.qty}
        <button onclick="removeItem(${index})">❌</button>
      </p>
    `;
  });

  document.getElementById("total").innerText = total;
}

// SEARCH
function searchProducts() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(input)
      ? "block"
      : "none";
  });
}

// WHATSAPP CHECKOUT (FINAL BOSS FEATURE)
function checkoutCart() {
  if (cart.length === 0) return alert("Cart is empty!");

  let message = "🛒 NEW ORDER:\n\n";
  let total = 0;

  cart.forEach(item => {
    message += `• ${item.name} x ${item.qty} = $${item.price * item.qty}\n`;
    total += item.price * item.qty;
  });

  message += `\nTOTAL: $${total}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

// INIT
renderProducts();
renderCart();