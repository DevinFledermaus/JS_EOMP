let cart = [
  {
    class: "card1",
    title: "Hugo Boss",
    description: "Makes stink stink go bye bye.",
    techStack: "Personal Hygiene",
    price: "R694.20",
    image: "./images/cologne.jpg",
    image_alt: "Cologne",
  },
  {
    class: "card2",
    title: "Taco shells",
    description: "Get these taco shells, but a little dry without the mix.",
    techStack: "Food",
    price: "R54.20",
    image: "./images/tacos.jpeg",
    image_alt: "Taco Shells",
  },
  {
    class: "card3",
    title: "Milk",
    description: "Coffee is not the same without this guy.",
    techStack: "Food",
    price: "R16.90",
    image: "./images/milk.jpeg",
    image_alt: "Milk",
  },
];

function createCard(card) {
  let createdCard = `<div class="card ${card.class}" techStack="${card.techStack}">
            <div class="card-image">
            <img src="${card.image}" alt="${card.image_alt}" />
            </div>
            <div class="card-content">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
            <h4>${card.price}</h4>
            </div>
          </div>
        `;
  return createdCard;
}

function renderCards() {
  let productContainer = document.querySelector(".products");
  for (product of cart) {
    let card = createCard(product);
    productContainer.innerHTML += card;
  }
}

renderCards();
