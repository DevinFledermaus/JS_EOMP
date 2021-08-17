let cart = [];

// Add to Cart Function

function addToCart(index) {
  console.log(index);
  cart.push(index);
  //   console.log(cart);
  let add_btn = document.querySelector(`.btn-Add-${index}`);
  //   console.log(add_btn);
  add_btn.style.display = "none";
  alert("You're quite lucky, This product is temporarily Out Of Stock");
  populateCart();
}

function showCart() {
  document.querySelector(".cart").classList.toggle("active");
}

// Edit function

function editProduct(id) {
  // console.log(id);
  let inputs = document.querySelectorAll(".product-input");
  let json_info = [];
  let val_space = true;
  inputs.forEach((input) => {
    if (input.value == "") {
      val_space = false;
    }
    json_info.push(input.value);
  });
  if (val_space) {
    let json_dict = {
      name: json_info[0],
      price: json_info[1],
    };
    console.log(json_dict);
    // location.href = "";
    fetch(`https://frozen-ocean-71631.herokuapp.com/edit-product/${index}`, {
      method: "PUT",
      body: JSON.stringify(json_dict),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please enter your details!");
  }
}

// Delete function

function deleteProduct(index) {
  console.log(index);
  let delConfirm = confirm("Are you sure you want to delete this product?");
  if (delConfirm) {
    fetch(`https://frozen-ocean-71631.herokuapp.com/remove-product/${index}`);
    createCards();
  }
  createCards();
}

// Show Edit Section function

function showEdit(index) {
  // console.log(index);
  if (index == -1) {
    let edit_container = document.querySelector(".section-edit");
    edit_container.style.display = "none";
  } else {
    let edit_container = document.querySelector(".section-edit");
    edit_container.style.display = "flex";
    fetch("https://frozen-ocean-71631.herokuapp.com/get-cart/").then(
      (request) => {
        request.json().then((obj) => {
          // console.log(obj);
          data = obj.data;
          // console.log(data[index]);
          product = data[index];
          populateEdit(data[index][0]);
          let old_container = document.querySelector(".old-info");
          old_container.innerHTML = `<div class="item">
           <p class="product-name">Name: ${product[1]}</p>
           <p class="product-price">Price: ${product[3]}</p>
           <p class="product-des">Description: ${product[2]}</p> 
       </div>`;
        });
      }
    );
  }
}

// Fetching poducts and displaying them

function createCards() {
  let container = document.querySelector(".cards");

  fetch("https://frozen-ocean-71631.herokuapp.com/get-cart/").then(
    (request) => {
      request.json().then((obj) => {
        console.log(obj);
        data = obj.data;
        console.log(data);
        container.innerHTML = ``;
        let index = 0;
        data.forEach((product) => {
          container.innerHTML += `<div class="card">
         <img src="https://picsum.photos/200/200?random=${product[0]}" alt="${product[1]}">
         <h2> ${product[1]}</h2>
         <p>${product[2]}</p>
         <h4>${product[3]}</h4>
         <button onclick="addToCart(${product[0]})" class="btn-Add btn-Add-${product[0]}" id="btns">Add to cart</button>
         <button onclick="showEdit(${index})" class="btn-edit" id="btns">Edit</button>
         <button onclick="deleteProduct(${product[0]})" class="btn-delete" id="btns">Delete</button>
     </div>`;
          console.log(index);
          index++;
        });
      });
    }
  );
}

createCards();
