document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btn");
  const inputs = document.querySelectorAll(".input-2");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    const fullName = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value.trim();


    if (!fullName || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }


    const userData = {
      name: fullName,
      email: email,
      password: password,
    };


    localStorage.setItem("user", JSON.stringify(userData));


    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
  });
});
