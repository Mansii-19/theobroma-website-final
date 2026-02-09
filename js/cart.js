const container = document.getElementById("cart-container");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p class='empty'>No items in cart 🛒</p>";
    totalEl.innerText = "";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.img}">
      <div class="cart-details">
        <h3>${item.name}</h3>
        <p>Quantity: ${
          item.quantity == 2 ? "1 Kg" :
          item.quantity == 1 ? "500 g" : "250 g"
        }</p>
        <p>Price: ₹${item.finalPrice}</p>
        <button onclick="deleteItem(${index})">Delete</button>
      </div>
    `;

    total += item.finalPrice;
    container.appendChild(div);
  });

  totalEl.innerText = `Total Amount: ₹${total}`;
}

function deleteItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function goToCheckout() {
  const message = document.getElementById("cartMessage");

  if (cart.length === 0) {
    message.innerText = "Your cart is empty. Please add items to proceed.";
    message.style.display = "block";

    setTimeout(() => {
      message.style.display = "none";
    }, 3000);

    return;
  }

  window.location.href = "checkout.html";
}


renderCart();
