/* ================= PRODUCT DATA ================= */

const products = [

  {
    name: "Diamond Ring",
    category: "Rings",
    price: "₹35,000",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85"
  },

  {
    name: "Gold Necklace",
    category: "Necklaces",
    price: "₹85,000",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"
  },

  {
    name: "Diamond Earrings",
    category: "Earrings",
    price: "₹45,000",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85"
  },

  {
    name: "Diamond Bracelet – Girls & Women",
    category: "Bracelets",
    price: "₹55,000",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85"
  }

];


/* ================= WHATSAPP ================= */

const whatsappNumber = "919571254404";


/* ================= SEND ENQUIRY ================= */

function sendEnquiry(index) {

  const product = products[index];

  const message =
    `Hello BALA Ji Gold,%0A%0A` +
    `I am interested in:%0A` +
    `${product.name}%0A` +
    `Price: ${product.price}%0A%0A` +
    `Please share more details.`;

  const url =
    `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, "_blank");
}


/* ================= QUICK VIEW ================= */

function quickView(index) {

  const product = products[index];

  document.getElementById("modalImage").src =
    product.image;

  document.getElementById("modalImage").alt =
    product.name;

  document.getElementById("modalName").textContent =
    product.name;

  document.getElementById("modalCategory").textContent =
    product.category;

  document.getElementById("modalPrice").textContent =
    product.price;


  document.getElementById("modalWhatsapp").onclick =
    function () {
      sendEnquiry(index);
    };


  document
    .getElementById("productModal")
    .classList.add("active");
}


/* ================= CLOSE MODAL ================= */

function closeModal() {

  document
    .getElementById("productModal")
    .classList.remove("active");
}


/* Close modal by clicking outside */

document
  .getElementById("productModal")
  .addEventListener("click", function (event) {

    if (event.target === this) {
      closeModal();
    }

  });


/* ================= SEARCH ================= */

const searchInput =
  document.getElementById("searchInput");

const productCards =
  document.querySelectorAll(".product-card");


searchInput.addEventListener("input", function () {

  const search =
    this.value.toLowerCase().trim();

  productCards.forEach(function (card) {

    const name =
      card.dataset.name.toLowerCase();

    if (name.includes(search)) {

      card.style.display = "";

    } else {

      card.style.display = "none";

    }

  });

});


/* ================= CATEGORY FILTER ================= */

const categoryFilter =
  document.getElementById("categoryFilter");


categoryFilter.addEventListener("change", function () {

  const selected =
    this.value;

  productCards.forEach(function (card) {

    const category =
      card.dataset.category;

    if (
      selected === "all" ||
      selected === category
    ) {

      card.style.display = "";

    } else {

      card.style.display = "none";

    }

  });

});


/* ================= MOBILE MENU ================= */

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

  navMenu.classList.toggle("active");

});


/* Close menu after clicking link */

document
  .querySelectorAll("#navMenu a")
  .forEach(function (link) {

    link.addEventListener("click", function () {

      navMenu.classList.remove("active");

    });

  });


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    closeModal();

  }

});
