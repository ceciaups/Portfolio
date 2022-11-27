window.onload = function() {
  // Variables
  const navBar = document.getElementById("nav-bar");
  const navToggle = document.getElementById("nav-toggle");

  // Event Listener
  navToggle.addEventListener("click", toggleMenu, false);

  // Toggle Function
  function toggleMenu() {
    console.log("toggle");
    console.log(navBar.classList);
    navBar.classList.toggle("opened");
  }
}