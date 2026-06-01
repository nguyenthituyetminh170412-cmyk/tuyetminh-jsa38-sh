const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Sai email hoặc password");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Login thành công");
  window.location.href = "index.html";
});