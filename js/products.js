let products = [
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
  {
    class: "card4",
    title: "Hand sanitiser",
    description: "The covivo is real, keep those hands clean.",
    techStack: "Personal Hygiene",
    price: "R42.00",
    image: "./images/Sanitiser.png",
    image_alt: "Hand sanitiser",
  },
  {
    class: "card5",
    title: "Headphones",
    description: "Someone annoying talking? Wont even need to plug this in.",
    techStack: "Electronics",
    price: "R420.69",
    image: "./images/headphones2.jpg",
    image_alt: "Heaphones",
  },
  {
    class: "card6",
    title: "Portable Lamps",
    description: "Eskom will get you, atleast be prepared.",
    techStack: "Electronics",
    price: "R242.69",
    image: "./images/lamp2.jpg",
    image_alt: "Portable Lamp",
  },
];

function createCard(card) {
  let createdCard = `<div class="card ${card.class}" techStack="${card.techStack}">
          <div class="card-content">
          <img src="${card.image}" alt="${card.image_alt}" />
          <h2>${card.title}</h2>
          <p>${card.description}</p>
          <h4>${card.price}</h4>
        </div>
      `;
  return createdCard;
}

function renderCards() {
  let productContainer = document.querySelector(".cards");
  for (product of products) {
    let card = createCard(product);
    productContainer.innerHTML += card;
  }
}

renderCards();
