const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All fields must be filled!");
    return;
  }
  const result = { email: email.value.trim(), password: password.value.trim() };
  event.currentTarget.reset();
  console.log(result);
}
