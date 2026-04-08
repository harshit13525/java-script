let cart = [];

function toggleCart() {
  let sidebar = document.getElementById("cart-sidebar");

  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-400px";
  } else {
    sidebar.style.right = "0px";
  }
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

async function getProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let res = await response.json();

  let container = document.getElementById("container");

  res.products.forEach(product => {

    let card = document.createElement("div");
    card.className = "bg-white w-64 p-4 rounded-xl shadow";

    card.innerHTML = `
      <img src="${product.images[0]}" class="h-40 w-full object-cover rounded-lg">
      <h2 class="font-semibold mt-2">${product.title.slice(0, 40)}</h2>
      <p class="text-green-600 font-bold">₹${product.price}</p>
      <button class="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg">
        Add to Cart
      </button>
    `;

    let btn = card.querySelector("button");

    btn.addEventListener("click", () => {
      addToCart(product);
    });

    container.appendChild(card);
  });
}

function addToCart(product) {
  cart.push({
    title: product.title,
    price: product.price
  });

  updateCartCount();
  displayCart();
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p class='text-gray-500'>Cart is empty</p>";
    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(item => {
    let div = document.createElement("div");
    div.className = "flex justify-between border-b py-2";

    div.innerHTML = `
      <span>${item.title}</span>
      <span class="text-green-600 font-bold">₹${item.price}</span>
    `;

    cartItems.appendChild(div);
  });
}

getProducts();
updateCartCount();