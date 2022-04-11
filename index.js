function showPassword(id) {
  // toggle the type attribute
  const togglePassword = document.querySelector(`#togglePassword${id}`);
  const password = document.querySelector(`#password${id}`);
  console.log(password);
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye / eye slash icon
  togglePassword.classList.toggle("bi-eye");
}
