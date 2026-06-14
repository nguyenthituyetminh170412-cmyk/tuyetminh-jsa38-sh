const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exist = users.find(u => u.email === email);
  if (exist) {
    alert("Email already exists!");
    return;
  }

  users.push({ username, email, password });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign up successfully!");
  window.location.href = "login.html";
});