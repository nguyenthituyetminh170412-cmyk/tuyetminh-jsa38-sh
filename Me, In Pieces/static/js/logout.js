const logoutBtn =
document.querySelector("#logout-btn");

if(logoutBtn){

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");

    alert("Sign out successfully!");
    window.location.href =
    "/login.html";

  });

}
