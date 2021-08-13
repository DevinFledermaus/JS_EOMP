let signInButton = document.querySelector(".login-section");

function login(username, password) {
  console.log(username);
  console.log(password);
  fetch("http://127.0.0.1:5000/auth", {
    method: "POST",
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "/product.html";
      }
    });
}

function activate() {
  let hidden = document.querySelectorAll(".form");
  hidden.forEach((poke) => {
    poke.style.display = "block ";
  });
  let button = document.querySelectorAll(".btn");
  button.forEach((btn) => {
    btn.style.display = "none";
  });
}
