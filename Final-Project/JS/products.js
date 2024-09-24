let cart = [];

let buttons = document.getElementsByClassName("add-to-cart-button");
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function () {
        let name = button.getAttribute("data-name");
        let price = button.getAttribute("data-price");

        addToCart(name, price);
    });
}

function addToCart(name, price) {


    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        if (item.name === name) {
            item.quantity++;
            draw();
            return;
        }
    }

    let item = {
        name: name,
        price: price,
        quantity: 1
    };
    cart.push(item);
    draw();


}

function removeFromCart(name) {
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        if (item.name === name) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart.splice(i, 1);
            }
            draw();
            return;
        }
    }
}

function draw() {
    let cartList = document.getElementsByClassName("cart-list")[0];
    cartList.innerHTML = "";
    let totalPrice = 0;
    let totaltax = 0;
    let TotalPricewithTax = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let li = document.createElement("li");
        let span1 = document.createElement("span");
        if (item.name == "product1") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product1.avif' /><br>" + item.name;
        }
        if (item.name == "product2") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product2.avif' /><br>" + item.name;
        }
        if (item.name == "product3") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product3.avif' /><br>" + item.name;
        }
        if (item.name == "product4") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product4.avif' /><br>" + item.name;
        }
        if (item.name == "product5") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product5.avif' /><br>" + item.name;
        }
        if (item.name == "product6") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product6.avif' /><br>" + item.name;
        }
        if (item.name == "product7") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product7.avif' /><br>" + item.name;
        }
        if (item.name == "product8") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product8.avif' /><br>" + item.name;
        }
        if (item.name == "product9") {
            span1.innerHTML = "<img class='image-in-cart' src='IMG/products/product9.avif' /><br>" + item.name;
        }

        let span2 = document.createElement("span");
        span2.innerHTML = "L.E" + item.price;
        let span3 = document.createElement("span");
        span3.innerHTML = "x" + item.quantity;
        span3.setAttribute("class", "quantity");
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "احذف";
        removeButton.addEventListener("click", function () {
            removeFromCart(item.name);
        });
        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);
        li.appendChild(removeButton);
        cartList.appendChild(li);
        totalPrice += (item.price * item.quantity);
        totaltax = (totalPrice * 0.14).toFixed(2);
        TotalPricewithTax += (item.price * item.quantity) + (item.price * item.quantity * 0.14);    }
    let totalSpan = document.getElementsByClassName("total-price")[0];
    // totalSpan.innerHTML = `L.E${totalPrice}<br>Total tax= L.E${totaltax}<br><br>Total Price with Tax= L.E${TotalPricewithTax}`;
}

let clearButton = document.getElementsByClassName("clear-cart")[0];
        clearButton.addEventListener("click", function () {
            cart = [];
            draw();
        });