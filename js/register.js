let reg_form = document.querySelector("#register_form");

console.log(reg_form);

reg_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let new_reg = {
    first_name: document.querySelector("input[name='first_name']").value,
    last_name: document.querySelector("input[name='last_name']").value,
    username: document.querySelector("input[name='username']").value,
    password: document.querySelector("input[name='password']").value,
    email: document.querySelector("input[name='email']").value,
  };

  console.log(new_reg);

  fetch("https://frozen-ocean-71631.herokuapp.com/user-registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(new_reg),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let current_user = res.current_user;
      localStorage.setItem("current_user", JSON.stringify(current_user));
    });
});
