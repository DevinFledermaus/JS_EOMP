// let products = [
//   {
//     class: "card1",
//     title: "Hugo Boss",
//     description: "Makes stink stink go bye bye.",
//     techStack: "Personal Hygiene",
//     price: "R694.20",
//     image: "./images/cologne.jpg",
//     image_alt: "Cologne",
//   },
//   {
//     class: "card2",
//     title: "Taco shells",
//     description: "Get these taco shells, but a little dry without the mix.",
//     techStack: "Food",
//     price: "R54.20",
//     image: "./images/tacos.jpeg",
//     image_alt: "Taco Shells",
//   },
//   {
//     class: "card3",
//     title: "Milk",
//     description: "Coffee is not the same without this guy.",
//     techStack: "Food",
//     price: "R16.90",
//     image: "./images/milk.jpeg",
//     image_alt: "Milk",
//   },
//   {
//     class: "card4",
//     title: "Hand sanitiser",
//     description: "The covivo is real, keep those hands clean.",
//     techStack: "Personal Hygiene",
//     price: "R42.00",
//     image: "./images/Sanitiser.png",
//     image_alt: "Hand sanitiser",
//   },
//   {
//     class: "card5",
//     title: "Headphones",
//     description: "Someone annoying talking? Wont even need to plug this in.",
//     techStack: "Electronics",
//     price: "R420.69",
//     image: "./images/headphones2.jpg",
//     image_alt: "Heaphones",
//   },
//   {
//     class: "card6",
//     title: "Portable Lamps",
//     description: "Eskom will get you, atleast be prepared.",
//     techStack: "Electronics",
//     price: "R242.69",
//     image: "./images/lamp2.jpg",
//     image_alt: "Portable Lamp",
//   },
//   {
//     class: "card1",
//     title: "Hugo Boss",
//     description: "Makes stink stink go bye bye.",
//     techStack: "Personal Hygiene",
//     price: "R694.20",
//     image: "./images/cologne.jpg",
//     image_alt: "Cologne",
//   },
//   {
//     class: "card2",
//     title: "Taco shells",
//     description: "Get these taco shells, but a little dry without the mix.",
//     techStack: "Food",
//     price: "R54.20",
//     image: "./images/tacos.jpeg",
//     image_alt: "Taco Shells",
//   },
//   {
//     class: "card3",
//     title: "Milk",
//     description: "Coffee is not the same without this guy.",
//     techStack: "Food",
//     price: "R16.90",
//     image: "./images/milk.jpeg",
//     image_alt: "Milk",
//   },
//   {
//     class: "card4",
//     title: "Hand sanitiser",
//     description: "The covivo is real, keep those hands clean.",
//     techStack: "Personal Hygiene",
//     price: "R42.00",
//     image: "./images/Sanitiser.png",
//     image_alt: "Hand sanitiser",
//   },
//   {
//     class: "card5",
//     title: "Headphones",
//     description: "Someone annoying talking? Wont even need to plug this in.",
//     techStack: "Electronics",
//     price: "R420.69",
//     image: "./images/headphones2.jpg",
//     image_alt: "Heaphones",
//   },
//   {
//     class: "card6",
//     title: "Portable Lamps",
//     description: "Eskom will get you, atleast be prepared.",
//     techStack: "Electronics",
//     price: "R242.69",
//     image: "./images/lamp2.jpg",
//     image_alt: "Portable Lamp",
//   },
// ];

// function createCard(card) {
//   let createdCard = `<div class="card ${card.class}" techStack="${card.techStack}">
//           <div class="card-image">
//           <img src="${card.image}" alt="${card.image_alt}" />
//           <h2>${card.title}</h2>
//           <p>${card.description}</p>
//           <h4>${card.price}</h4>
//         </div>
//       `;
//   return createdCard;
// }

// function renderCards() {
//   let productContainer = document.querySelector(".cards");
//   for (product of products) {
//     let card = createCard(product);
//     productContainer.innerHTML += card;
//   }
// }

// renderCards();

// Populate container

function populateEdit(index) {
  console.log(index);
  let edit_container = document.querySelector(".container-edit");
  edit_container.innerHTML = `<!-- edit container! form? -->
  <div class="old-info">
    <!-- old info -->
  </div>
  <form action="http://127.0.0.1:5000/edit-product/1/" method="PUT">
    <!-- product_name -->
    <div class="product-div">
      <label class="product-info" for="product_name"
        >The Product Name:
      </label>
      <input
        class="product-input"
        type="text"
        name="product_name"
        required
        placeholder="The Product Name"
      />
    </div>

    <!-- product_price -->
    <div class="product-div">
      <label class="product-info" for="product_price"
        >The Product Price:
      </label>
      <input
        class="product-input"
        type="text"
        name="product_price"
        required
        placeholder="The Product Price"
      />
    </div>

    <!-- buttons -->
    <button onclick="editProduct(${index})" type="button">awe</button>
  </form>
  <button onclick="showEdit(-1)" class="btn-edit">close</button>`;
}

// Add to Cart Function

function addToCart(index) {
  cart.push(index);
  //   console.log(cart);
  let add_btn = document.querySelector(`.btn-Add-${index}`);
  //   console.log(add_btn);
  add_btn.style.display = "none";
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
    fetch(`http://127.0.0.1:5000/edit-product/${id}/`, {
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

// const data = { username: "example" };

// fetch("https://example.com/profile", {
//   method: "POST", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// Delete function

function deleteProduct(index) {
  console.log(index);
  let delConfirm = confirm("Are you sure you want to delete this product?");
  if (delConfirm) {
    fetch(`https://frozen-ocean-71631.herokuapp.com/remove-product/${index}`);
    // createCards();
  }
  // createCards();
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
    fetch("http://127.0.0.1:5000/get-products/").then((request) => {
      request.json().then((obj) => {
        // console.log(obj);
        data = obj.data;
        // console.log(data[index]);
        product = data[index];
        populateEdit(data[index][0]);
        let old_container = document.querySelector(".old-info");
        old_container.innerHTML = `<div class="item">
           <p class="product-name">Name: ${product[1]}</p>
           <p class="product-price">Price: ${product[2]}</p>
           <p class="product-date">Date: ${product[3]}</p> 
       </div>`;
      });
    });
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
         <button onclick="addToCart(${product[0]})" class="btn-Add btn-Add-${product[0]}">Add to cart</button>
         <button onclick="showEdit(${index})" class="btn-edit">Edit</button>
         <button onclick="deleteProduct(${product[0]})" class="btn-delete">Delete</button>
     </div>`;
          console.log(index);
          index++;
        });
      });
    }
  );
}

createCards();
