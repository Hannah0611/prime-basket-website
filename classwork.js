// Step 1: Variables
let productName = "Fresh Avocados";
let price = 30;
let isAvailable = true;
console.log("Step 1: Variables");
console.log(productName, price, isAvailable);

// Step 2: If / Else - Stock Check
console.log("\nStep 2: If / Else - Stock Check");
let stock = 10;
if (stock > 0) {
  console.log("Product is in stock");
} else {
  console.log("Out of stock");
}
// Step 3: Loop - Product List
console.log("\nStep 3: Loop - Product List");
let products = ["Avocados", "Mangoes", "Bananas"];
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

// Step 4: Function - Calculate Total
console.log("\nStep 4: Function - Calculate Total");
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total for 3 items: " + calculateTotal(30, 3));