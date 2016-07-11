String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
function ShopItem(name, price) {
  /*Constructor function for store items
    Takes two parameters, a name string and a price num*/
  this.name = name;
  this.price = price;
  this.cartCount = 0;
  this.invPush = function() {
    inventory.push(this);
  }
  this.invPush();
}

var inventory = [];

var butter = new ShopItem("butter", 3.5);
var flour = new ShopItem("flour", 2.5);
var sugar = new ShopItem("sugar", 2);
var milk = new ShopItem("milk", 2.5);
var chocolate = new ShopItem("chocolate", 5);

function makePageContent() {//populate page with dynamic elements based on inventory array
  for (var i = 0; i < inventory.length; i++) {
    //Creates a new div
    var itemDiv = document.createElement("div");
    itemDiv.id = inventory[i].name;
    itemDiv.className = "itemDiv";
    //creates element to display item name and cost
    var pageItem = document.createElement("p");
    pageItem.innerHTML = inventory[i].name.capitalize() + ": $" + inventory[i].price;
    //creates element to display number of each item in cart
    var itemCount = document.createElement("p");
    itemCount.innerHTML = inventory[i].cartCount;
    itemCount.id = (inventory[i].name + "count");
    // console.log(itemCount.id);
    //sets text value to p

    //creates add & remove buttons
    var addItem = document.createElement("div");
    var remItem = document.createElement("div");
    addItem.innerHTML = '<input type="button" onclick=addItem(' + inventory[i].name + ') value="add"/>';
    remItem.innerHTML = '<input type="button" onclick=remItem(' + inventory[i].name + ') value="remove"/>';
    // console.log(addItem.innerHTML)
    //Appends elements to div, and div to body.
    itemDiv.appendChild(pageItem);
    itemDiv.appendChild(itemCount);
    itemDiv.appendChild(addItem);
    itemDiv.appendChild(remItem);
    document.body.appendChild(itemDiv);

  }
  var cartTotal = document.createElement("p");
  cartTotal.id = "cartTotal";
  document.body.appendChild(cartTotal);
}

function addItem (shopId) {
  //on addItem click, take itemCount el from itemDiv and add 1.
  // console.log(shopId.name)
  shopId.cartCount ++;
  var itemCount = document.getElementById(shopId.name + "count");
  itemCount.innerHTML = shopId.cartCount;
  update();
  // console.log(shopId.name + shopId.cartCount);
}

function remItem(shopId) {
  if (shopId.cartCount > 0) {
    shopId.cartCount --;
    var itemCount = document.getElementById(shopId.name + "count");
    itemCount.innerHTML = shopId.cartCount;
  }
  update();
}
//calls the makePageContent function, appending all of the elements to the DOM
makePageContent();

var cart = [];

{
  function update () {
    var cartTotal = 0;
    inventory.forEach(function (item) {
      cartTotal += (item.cartCount * item.price);
    });
    var cartLog = document.getElementById('cartTotal');
    cartLog.innerHTML = "Cart total: " + cartTotal;
    // console.log(cartTotal);
  }

}
function updateCart(cartItem) {
  cart.push(cartItem);
  for(var i = 0; i < cart.length; i++) {
    // console.log(cart[i]);
    cartTotal += cart[i].price;
    // console.log(cartTotal);
  }
  // console.log(cart.length);
  cartTotal = 0;
}
var thing = "string";
// console.log(thing);
string.capitalize;
// console.log('thing'.capitalize());
