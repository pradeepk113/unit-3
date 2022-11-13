//*****By Object.create() method***********//
let product = {
  name: "Truck",
  wheel: 8,
  length: "15ft",
};
let product1 = Object.create(product);
//here all product chasis No. are different so we add chasis No. in all product
product1.chasis_No = 123456789;

let product2 = Object.create(product);
product2.chasis_No = 7894561259;

let product3 = Object.create(product);
product3.chasis_No = 7054631708;

let product4 = Object.create(product);
product4.chasis_No = 7897188955;

let product5 = Object.create(product);
product5.chasis_No = 9889963265;

//*******By constructor Function*********//

function item(n, w, l, c) {
  this.name = n;
  this.wheel = w;
  this.length = l;
  this.chasis_No = c;
}
let item1 = new item("Truck", 8, "15ft", 7054631708);
let item2 = new item("Truck", 8, "15ft", 7897188955);
let item3 = new item("Truck", 8, "15ft", 9889963265);
let item4 = new item("Truck", 8, "15ft", 1234567890);
let item5 = new item("Truck", 8, "15ft", 1597534565);
console.log(product);
