const product1 = {
  name: "Basket Ball",
  price: 2095
}

const product2 = {
  name: "Volley Ball",
  price: 1059
}

function comparePrice(product1, product2) {
  if(product1.price > product2.price) {
    return product2;
  } else if(product1.price < product2.price){
    return product1;
  } else {
    return "Equal Price";
  }
}
console.log(comparePrice(product1, product2));
