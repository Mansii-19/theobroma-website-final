const container = document.getElementById("products-container");
const filter = document.getElementById("filter");

if (!container) {
  console.error("products-container not found");
}

const products = [
    // CAKES (VEG)
    { id: 1, name: "Chocolate Truffle Cake", price: 550, type: "veg", img: "../images/cake1.jpg" },
    { id: 2, name: "Black Forest Cake", price: 520, type: "veg", img: "../images/cake2.jpg" },
    { id: 3, name: "Red Velvet Cake", price: 600, type: "veg", img: "../images/cake3.jpg" },
    { id: 4, name: "Vanilla Cream Cake", price: 480, type: "veg", img: "../images/cake4.jpg" },
    { id: 5, name: "Butterscotch Cake", price: 530, type: "veg", img: "../images/cake5.jpg" },
    { id: 6, name: "Pineapple Cake", price: 500, type: "veg", img: "../images/cake6.jpg" },
    { id: 7, name: "Coffee Walnut Cake", price: 620, type: "veg", img: "../images/cake7.jpg" },
    { id: 8, name: "Blueberry Cake", price: 580, type: "veg", img: "../images/cake8.jpg" },
    { id: 9, name: "Ferrero Rocher Cake", price: 750, type: "veg", img: "../images/cake9.jpg" },
    { id: 10, name: "Mango Delight Cake", price: 540, type: "veg", img: "../images/cake10.jpg" },

    // PASTRIES (VEG)
    { id: 11, name: "Chocolate Pastry", price: 90, type: "veg", img: "../images/pastry1.jpg" },
    { id: 12, name: "Pineapple Pastry", price: 85, type: "veg", img: "../images/pastry2.jpg" },
    { id: 13, name: "Strawberry Pastry", price: 95, type: "veg", img: "../images/pastry3.jpg" },
    { id: 14, name: "Coffee Pastry", price: 100, type: "veg", img: "../images/pastry4.jpg" },
    { id: 15, name: "Blueberry Pastry", price: 110, type: "veg", img: "../images/pastry5.jpg" },
    { id: 16, name: "Red Velvet Pastry", price: 120, type: "veg", img: "../images/pastry6.jpg" },
    { id: 17, name: "Nutella Pastry", price: 140, type: "veg", img: "../images/pastry7.jpg" },
    { id: 18, name: "Oreo Pastry", price: 125, type: "veg", img: "../images/pastry8.jpg" },
    { id: 19, name: "Fruit Pastry", price: 105, type: "veg", img: "../images/pastry9.jpg" },
    { id: 20, name: "Chocolate Mousse Pastry", price: 130, type: "veg", img: "../images/pastry10.jpg" },

    // BREADS (VEG)
    { id: 21, name: "Butter Croissant", price: 80, type: "veg", img: "../images/bread1.jpg" },
    { id: 22, name: "Garlic Bread", price: 120, type: "veg", img: "../images/bread2.jpg" },
    { id: 23, name: "Multigrain Bread", price: 70, type: "veg", img: "../images/bread3.jpg" },
    { id: 24, name: "Cheese Bread Loaf", price: 90, type: "veg", img: "../images/bread4.jpg" },
    { id: 25, name: "Milk Bread", price: 60, type: "veg", img: "../images/bread5.jpg" },

    // COOKIES (VEG)
    { id: 26, name: "Chocolate Chip Cookies", price: 150, type: "veg", img: "../images/cookie1.jpg" },
    { id: 27, name: "Oatmeal Cookies", price: 140, type: "veg", img: "../images/cookie2.jpg" },
    { id: 28, name: "Butter Cookies", price: 130, type: "veg", img: "../images/cookie3.jpg" },
    { id: 29, name: "Almond Cookies", price: 160, type: "veg", img: "../images/cookie4.jpg" },
    { id: 30, name: "Choco Lava Cookies", price: 170, type: "veg", img: "../images/cookie5.jpg" },

    // VEG PUFFS & SNACKS
    { id: 31, name: "Veg Puff", price: 45, type: "veg", img: "../images/puff1.jpg" },
    { id: 32, name: "Paneer Puff", price: 60, type: "veg", img: "../images/puff2.jpg" },
    { id: 33, name: "Cheese Corn Puff", price: 65, type: "veg", img: "../images/puff3.jpg" },
    { id: 34, name: "Mushroom Puff", price: 70, type: "veg", img: "../images/puff4.jpg" },
    { id: 35, name: "Veg Samosa Puff", price: 50, type: "veg", img: "../images/puff5.jpg" },

    // NON-VEG ITEMS
    { id: 36, name: "Chicken Puff", price: 65, type: "nonveg", img: "../images/nonveg1.jpg" },
    { id: 37, name: "Egg Puff", price: 55, type: "nonveg", img: "../images/nonveg2.jpg" },
    { id: 38, name: "Chicken Sandwich", price: 150, type: "nonveg", img: "../images/nonveg3.jpg" },
    { id: 39, name: "Egg Sandwich", price: 130, type: "nonveg", img: "../images/nonveg4.jpg" },
    { id: 40, name: "Chicken Roll", price: 160, type: "nonveg", img: "../images/nonveg5.jpg" },
    { id: 41, name: "Chicken Croissant", price: 180, type: "nonveg", img: "../images/nonveg6.jpg" },
    { id: 42, name: "Chicken Cheese Puff", price: 75, type: "nonveg", img: "../images/nonveg7.jpg" },
    { id: 43, name: "Egg Mayo Sandwich", price: 140, type: "nonveg", img: "../images/nonveg8.jpg" },
    { id: 44, name: "Chicken Burger Bun", price: 170, type: "nonveg", img: "../images/nonveg9.jpg" },
    { id: 45, name: "Chicken Pizza Bun", price: 190, type: "nonveg", img: "../images/nonveg10.jpg" },

    // EXTRA ITEMS
    { id: 46, name: "Veg Burger Bun", price: 140, type: "veg", img: "../images/veg1.jpg" },
    { id: 47, name: "Cheese Pizza Bun", price: 160, type: "veg", img: "../images/veg2.jpg" },
    { id: 48, name: "Veg Cheese Sandwich", price: 120, type: "veg", img: "../images/veg3.jpg" },
    { id: 49, name: "Paneer Sandwich", price: 150, type: "veg", img: "../images/veg4.jpg" },
    { id: 50, name: "Veg Hot Dog Bun", price: 135, type: "veg", img: "../images/veg5.jpg" },
    { id: 51, name: "Chicken Hot Dog Bun", price: 165, type: "nonveg", img: "../images/nonveg11.jpg" },
    { id: 52, name: "Egg Cheese Bun", price: 145, type: "nonveg", img: "../images/nonveg12.jpg" },
    { id: 53, name: "Bhakarwadi", price: 275, type: "veg", img: "../images/sweet9.jpg" },
    { id: 54, name: "Rasgulla", price: 455, type: "veg", img: "../images/sweet10.jpg" },
    { id: 55, name: "Chicken Garlic Bread", price: 200, type: "nonveg", img: "../images/nonveg15.jpg" },
    { id: 56, name: "Veg Cheese Garlic Bread", price: 170, type: "veg", img: "../images/veg6.jpg" },
    { id: 57, name: "Paneer Pizza Slice", price: 190, type: "veg", img: "../images/veg7.jpg" },
    { id: 58, name: "Veg Stuffed Bun", price: 130, type: "veg", img: "../images/veg8.jpg" },
    { id: 59, name: "Chicken Stuffed Bun", price: 180, type: "nonveg", img: "../images/nonveg16.jpg" },
    { id: 60, name: "Egg Stuffed Bun", price: 160, type: "nonveg", img: "../images/nonveg17.jpg" },

    // FINAL 10
    { id: 61, name: "Veg Pizza Slice", price: 150, type: "veg", img: "../images/veg9.jpg" },
    { id: 62, name: "Cheese Garlic Roll", price: 140, type: "veg", img: "../images/veg10.jpg" },
    { id: 63, name: "GulabJamun", price: 185, type: "veg", img: "../images/sweet1.jpg" },
    { id: 64, name: "Motichoor Ladoo", price: 175, type: "veg", img: "../images/sweet2.jpg" },
    { id: 66, name: "Barfi", price: 165, type: "veg", img: "../images/sweet4.jpg" },
    { id: 67, name: "Besan Ladoo", price: 200, type: "veg", img: "../images/sweet5.jpg" },
    { id: 68, name: "Milk Barfi", price: 150, type: "veg", img: "../images/sweet6.jpg" },
    { id: 69, name: "Kaju Katlil", price: 500, type: "veg", img: "../images/sweet7.jpg" },
    { id: 70, name: "Jalebi", price: 200, type: "veg", img: "../images/sweet8.jpg" }
];

// -------------------------------
// CART FROM LOCALSTORAGE
// -------------------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// -------------------------------
// DISPLAY PRODUCTS
// -------------------------------
function displayProducts(list) {
  container.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.img}">
      <h3>${product.name}</h3>
      <p>₹${product.price} (500g)</p>

      <select id="qty-${product.id}">
        <option value="0.5">250 g</option>
        <option value="1" selected>500 g</option>
        <option value="2">1 Kg</option>
      </select>

      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="buyNow(${product.id})">Buy Now</button>
    `;

    container.appendChild(card);
  });
}

// -------------------------------
// ADD TO CART
// -------------------------------
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const qty = Number(document.getElementById(`qty-${id}`).value);
  const finalPrice = product.price * qty;

  cart.push({ ...product, quantity: qty, finalPrice });
  localStorage.setItem("cart", JSON.stringify(cart));

  showToast("✅ Item added to cart");
}

// -------------------------------
// BUY NOW
// -------------------------------
function buyNow(id) {
  const product = products.find(p => p.id === id);
  const qty = Number(document.getElementById(`qty-${id}`).value);
  const finalPrice = product.price * qty;

  const singleItem = { ...product, quantity: qty, finalPrice };

  localStorage.setItem("checkoutType", "single");
  localStorage.setItem("checkoutItem", JSON.stringify(singleItem));

  window.location.href = "../html/checkout.html";
}

// -------------------------------
// TOAST MESSAGE
// -------------------------------
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// -------------------------------
// FILTER PRODUCTS
// -------------------------------
filter.addEventListener("change", () => {
  const value = filter.value;
  const filtered =
    value === "all"
      ? products
      : products.filter(p => p.type === value);

  displayProducts(filtered);
});

// -------------------------------
// INITIAL LOAD
// -------------------------------
displayProducts(products);
