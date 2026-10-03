const products = [
  {
    name: "Diamond Ring",
    category: "Rings",
    price: "₹35,000"
  },
  {
    name: "Gold Necklace",
    category: "Necklaces",
    price: "₹85,000"
  },
  {
    name: "Diamond Earrings",
    category: "Earrings",
    price: "₹45,000"
  },
  {
    name: "Diamond Bracelet – Girls & Women",
    category: "Bracelets",
    price: "₹55,000"
  }
];

function sendEnquiry(index) {
  const product = products[index];

  const message =
    "Hello BALA Ji Gold,%0A%0A" +
    "Mujhe " + product.name + " ke baare mein jaankari chahiye.%0A" +
    "Price: " + product.price;

  window.open(
    "https://wa.me/919571254404?text=" + message,
    "_blank"
  );
}

function quickView(index) {
  const product = products[index];

  const modal = document.getElementById("productModal");
  const name = document.getElementById("modalName");
  const price = document.getElementById("modalPrice");
  const category = document.getElementById("modalCategory");

  if (!modal) return;

  name.textContent = product.name;
  price.textContent = product.price;
  category.textContent = product.category;

  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("productModal");

  if (modal) {
    modal.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const productCards = document.querySelectorAll(".product-card");

  function filterProducts() {
    const search = searchInput
      ? searchInput.value.toLowerCase()
      : "";

    const category = categoryFilter
      ? categoryFilter.value
      : "all";

    productCards.forEach(function (card) {
      const name = card.dataset.name.toLowerCase();
      const cardCategory = card.dataset.category;

      const matchesSearch = name.includes(search);
      const matchesCategory =
        category === "all" || cardCategory === category;

      card.style.display =
        matchesSearch && matchesCategory ? "" : "none";
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
  }

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});
