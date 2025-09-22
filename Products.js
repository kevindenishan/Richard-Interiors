// Change product preview image when selecting a color
function changeColor(imgSrc) {
  document.getElementById("mainImage").src = imgSrc;
}

// Category filtering (example - extend with real products later)
function showCategory(category) {
  alert("Showing products for " + category);
}

// Search functionality
function searchProducts() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let title = document.getElementById("productTitle").innerText.toLowerCase();

  if (title.includes(input)) {
    document.querySelector(".product-showcase").style.display = "flex";
  } else {
    document.querySelector(".product-showcase").style.display = "none";
  }
}
