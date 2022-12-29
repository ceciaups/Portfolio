window.onload = function() {
  // Variables
  const navBar = document.getElementById("nav-bar");
  const navToggle = document.getElementById("nav-toggle");
  var play;
  var mobile = window.matchMedia("(max-width: 425px)");

  // Event Listener
  navToggle.addEventListener("click", toggleMenu, false);
  window.addEventListener("scroll", reveal);
  reveal();
  mobile.addEventListener("change", slideshow);

  // Toggle Function
  function toggleMenu() {
    console.log("toggle");
    console.log(navBar.classList);
    navBar.classList.toggle("opened");
  }

  function slideshow(mobile) {
    if (mobile.matches) {
      var secProjects = document.getElementById("sec-projects");
      if (secProjects.classList.contains("active")) {
        
        var slider = document.getElementById("slider-ul");
        play = playSlides(5000);
        slider.addEventListener("click", function() {
          clearInterval(play);
          setTimeout(function() {
            play = playSlides(5000);
          }, 5000);
          
        })
      }
    }
    else {
      clearInterval(play);
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

  function reveal() {
    var reveals = document.getElementsByClassName("reveal");

    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBottom = reveals[i].getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;

      if (elementTop < windowHeight && elementBottom > 0) {
        if (!reveals[i].classList.contains("active")) {
          reveals[i].classList.add("active");
          if (reveals[i].id == "sec-projects")
            slideshow(mobile);
        }
      }
      else {
        reveals[i].classList.remove("active");
        if (reveals[i].id == "sec-projects")
          clearInterval(play);
      }
    }
  }
}