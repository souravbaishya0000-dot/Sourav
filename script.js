// script.js for Clothing Brand Website

// Function to toggle navigation menu
function toggleNav() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

// Event listener for the navigation toggle button
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
}

// Function to filter products
function filterProducts() {
    const filter = document.getElementById('product-filter').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        if (title.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// Event listener for the product filter input
const productFilter = document.getElementById('product-filter');
if (productFilter) {
    productFilter.addEventListener('input', filterProducts);
}