const cart = [
    { productname: "T-shirt", price: 20 },
    { productname: "Jeans", price: 50 },
    { productname: "Sneakers", price: 80 },
    { productname: "Mask", price: 40 },
    { productname: "Dress", price: 90 },
    { productname: "Swimsuit", price: 100 },
];

const calculateTotal = (cart) => {
    let totalprice = 0;
    for (let item of cart){
        totalprice = item.price + totalprice
    }
    return totalprice;
}

const totalprice = calculateTotal(cart);
console.log("The total price is " + totalprice + "."); 