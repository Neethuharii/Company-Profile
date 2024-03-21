/**=======================================
 * 
 * @param {*} element 
 * Function to fade in an element
 =========================================*/
function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
      opacity += 0.05; // Adjust the increment value for speed
      element.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval for smoothness
  }
  
  /**=================================
   * 
   * @param {*} element 
   *  Function to fade out an element
   ====================================*/
  function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function() {
      opacity -= 0.05; // Adjust the decrement value for speed
      element.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(interval);
        element.style.display = "none"; // Optionally hide the element after fading out
      }
    }, 50); // Adjust the interval for smoothness
  }
  
// =================== Add event listeners to the links========================
  document.getElementById("history-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var currentSection = document.querySelector(".section:not([style*='none'])");
    var historySection = document.getElementById("section1");
    if (currentSection !== historySection) {
      fadeOut(currentSection);
      setTimeout(function() {
        currentSection.style.display = "none";
        fadeIn(historySection);
        historySection.style.display = "block";
      }, 500); // Adjust timing as needed
    }
  });
  
  document.getElementById("values-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var currentSection = document.querySelector(".section:not([style*='none'])");
    var valuesSection = document.getElementById("section2");
    if (currentSection !== valuesSection) {
      fadeOut(currentSection);
      setTimeout(function() {
        currentSection.style.display = "none";
        fadeIn(valuesSection);
        valuesSection.style.display = "block";
      }, 500); // Adjust timing as needed
    }
  });
  
  document.getElementById("goals-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var currentSection = document.querySelector(".section:not([style*='none'])");
    var goalsSection = document.getElementById("section3");
    if (currentSection !== goalsSection) {
      fadeOut(currentSection);
      setTimeout(function() {
        currentSection.style.display = "none";
        fadeIn(goalsSection);
        goalsSection.style.display = "block";
      }, 500); // Adjust timing as needed
    }
  });
  
  document.getElementById("achievements-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var currentSection = document.querySelector(".section:not([style*='none'])");
    var achievementsSection = document.getElementById("achievements");
    if (currentSection !== achievementsSection) {
      fadeOut(currentSection);
      setTimeout(function() {
        currentSection.style.display = "none";
        fadeIn(achievementsSection);
        achievementsSection.style.display = "block";
      }, 500); // Adjust timing as needed
    }
  });
  
