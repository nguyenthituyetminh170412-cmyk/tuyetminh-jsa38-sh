const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const container = document.querySelector("#avatar-action-container");

if (currentUser) {
  container.innerHTML = `
    <button onclick="logout()" class="logout-btn">
      Logout
    </button>
  `;
} else {
  container.innerHTML = `
    <a href="./login.html" class="login-btn">
      Login
    </a>
  `;
}

window.logout = () => {
  localStorage.removeItem("currentUser");
  location.reload();
};
