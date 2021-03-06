let cart = [
    { id: 1, prdoductName: "Telephone", quantity: 3, unitPrice: 4000 },
    { id: 2, prdoductName: "Book", quantity: 3, unitPrice: 30 },
    { id: 3, prdoductName: "Computer", quantity: 1, unitPrice: 40000 },
    { id: 4, prdoductName: "Pencil", quantity: 3, unitPrice: 10 },
    { id: 5, prdoductName: "Shoes", quantity: 1, unitPrice: 200 },
    { id: 6, prdoductName: "Mouse", quantity: 1, unitPrice: 110 },
]

// Single Page Application : Angular, React, Vue

function addToCart(basket) {
    basket.push({ id: 7, prdoductName: "Ledger", quantity: 1, unitPrice: 20 });
}

addToCart(cart);
console.log(cart);

cart.map(product => console.log(product.prdoductName));

console.log("<ul>");
cart.map(product => {
    console.log("<li>" + product.prdoductName + " " + product.unitPrice * product.quantity + "</li>");
});
console.log("</ul>");

let quantityOver2 = cart.filter(product => product.quantity > 2 && product.unitPrice < 100);
console.log(quantityOver2);

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0);
console.log(total);

let number = 10;

function totalSum(total) {
    total += 1;
}

totalSum(number);
console.log(number);