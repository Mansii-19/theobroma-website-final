const checkoutItemsDiv = document.getElementById("checkout-items");
const checkoutForm = document.getElementById("checkoutForm");
const totalEl = document.getElementById("total");
const confirmation = document.getElementById("confirmation");

const checkoutType = localStorage.getItem("checkoutType");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const singleItem = JSON.parse(localStorage.getItem("checkoutItem"));

// Display products in checkout
function displayCheckoutItems() {
  let items = [];

  if (checkoutType === "single" && singleItem) {
    items = [singleItem];
  } else if (checkoutType === "cart") {
    items = cart;
  }

  checkoutItemsDiv.innerHTML = "";
  let totalPrice = 0;

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "checkout-item";

    div.innerHTML = `
      <img src="${item.img}">
      <div class="checkout-details">
        <h3>${item.name}</h3>
        <p>Quantity: ${
          item.quantity == 2 ? "1 Kg" :
          item.quantity == 1 ? "500 g" : "250 g"
        }</p>
        <p>Price: ₹${item.finalPrice}</p>
      </div>
    `;

    totalPrice += item.finalPrice;
    checkoutItemsDiv.appendChild(div);
  });

  totalEl.innerText = totalPrice;
}

displayCheckoutItems();

// Form submission
checkoutForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const street = document.getElementById("street").value.trim();
  const colony = document.getElementById("colony").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const pincode = document.getElementById("pincode").value.trim();
  const payment = document.getElementById("payment").value;

  // Validation
  if (!name || !street || !colony || !city || !state || !pincode || !payment) {
    confirmation.style.color = "red";
    confirmation.innerText = "Please fill all fields!";
    confirmation.style.display = "block";
    setTimeout(() => {
      confirmation.style.display = "none";
    }, 2000); // error message stays 2 sec
    return;
  }

  // Order confirmation
  confirmation.style.color = "green";
  confirmation.innerText = "Congratulations! Your order will reach you soon ✅";
  confirmation.style.display = "block";

  // Clear cart and checkout info
  localStorage.removeItem("cart");
  localStorage.removeItem("checkoutItem");
  localStorage.removeItem("checkoutType");

  checkoutForm.reset();

  // Redirect to product page after 3 seconds
  setTimeout(() => {
    window.location.href = "products.html";
  }, 3000); // <-- 3 seconds
});
