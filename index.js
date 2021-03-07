//Responsive NavBar
function myfunction() {
  var toggle = document.getElementById("nav-items");
  if (toggle.className === "navbar") {
      toggle.className += " responsive";
  } else {
      toggle.className = "navbar";
  }
}


// This is the smooth scrolling from the 'Start Here' Button down to the Portfolio section
function smoothScroll(target, duration){
  // These next 5 lines are just declaring some variables that we will need in order to complete the following function animation(currentTime)
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime){
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime; 
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
// Assigns the variable to the start button
var portfolioSection = document.querySelector(".start-button, #portfolio");
// Smooth scrolling when we CLICK on the start button
portfolioSection.addEventListener('click', function(){
  smoothScroll('.portfolio-section', 1250)
})


//Responsive Navbar when Hamburger item shows and we click on it to show nav-items



//Responsive Navbar -- changes to solid background once it reaches the h2 tag on the main section.
const header = document.querySelector("header");
const sectionOne = document.querySelector(".main-h2");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scroll");
    } else {
      header.classList.remove("nav-scroll");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);