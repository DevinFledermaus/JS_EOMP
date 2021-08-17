function populateCart() {
  fetch("https://frozen-ocean-71631.herokuapp.com/get-cart/").then(
    (request) => {
      request.json().then((obj) => {
        //   console.log(obj);
        data = obj.data;
        let cart_container = document.querySelector(".cart");
        let total_cost = 0;
        //   let total = 0;
        cart_container.innerHTML = ``;
        cart.forEach((order) => {
          // console.log(order);
          data.forEach((product) => {
            if (product[0] == order) {
              // console.log(product);
              total_cost += parseFloat(product[3].replace("R", ""));
              cart_container.innerHTML += `<div class="cart-item">
            <p class="id">Title: ${product[1]}</p>
            <p class="name">Description: ${product[2]}</p>
            <p class="price">Price: ${product[3]}</p>
            <p class="quantity">Quantity: 1</p>
          </div>`;
            }
          });
        });
        createTotal(total_cost);
      });
    }
  );
}

function createTotal(cost) {
  let total_container = document.querySelector(".cart");
  total_container.innerHTML += `<div class="total-div">
  <p class="total-p">Total : R${cost}</p>
  </div>`;
}
