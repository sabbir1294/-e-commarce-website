const products = [
  { id: 1, name: "Product 1", price: 20, image: "assets/product1.jpg" },
  { id: 2, name: "Product 2", price: 30, image: "assets/product2.jpg" }
];
const productList = document.getElementById('product-list');
products.forEach(product => {
  const div = document.createElement('div');
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});
function addToCart(id) {
  // Basic cart logic, use localStorage or a global variable
  alert('Added product ' + id + ' to cart!');
}