window.onload = function() {
  // Variables
  const navBar = document.getElementById("nav-bar");
  const navToggle = document.getElementById("nav-toggle");
  var mobile = window.matchMedia("(max-width: 425px)");

  // Event Listener
  navToggle.addEventListener("click", toggleMenu, false);
  slideshow(mobile);
  mobile.addEventListener("change", slideshow);

  // Toggle Function
  function toggleMenu() {
    console.log("toggle");
    console.log(navBar.classList);
    navBar.classList.toggle("opened");
  }

  function slideshow(mobile) {
    if (mobile.matches) {
      var slider = document.getElementById("slider-ul");
      var play = playSlides(5000);
      slider.addEventListener("click", function() {
        clearInterval(play);
        play = playSlides(10000);
      })
    }
  }
  
  function playSlides(time) {
    return setInterval(function() {
      var sliders = document.getElementsByClassName("slider-radio");
      for (var i = 0; i < sliders.length; i++) {
        if (sliders[i].checked) {
          sliders[i].checked = false;
          if (i < sliders.length - 1)
            sliders[i + 1].checked = true;
          else
            sliders[0].checked = true;
          break;
        }
      }
    }, time);
  }
}