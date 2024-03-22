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

/**==================================================
 * 
 * @param {} linkId 
 * @param {*} sectionId 
 * Function to handle click events on section links
 ======================================================*/
function handleSectionLinkClick(linkId, sectionId) {
    document.getElementById(linkId).addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      //Get the current visible section
      var currentSection = document.querySelector(".section:not([style*='none'])");
      var targetSection = document.getElementById(sectionId);
      if (currentSection !== targetSection) {
        fadeOut(currentSection);
        setTimeout(function() {
          currentSection.style.display = "none";
          fadeIn(targetSection);
          targetSection.style.display = "block";
        }, 500); // Adjust timing as needed
      }
    });
  }
  
  // Call the function for each link
  handleSectionLinkClick("history-link", "section1");
  handleSectionLinkClick("values-link", "section2");
  handleSectionLinkClick("goals-link", "section3");
  handleSectionLinkClick("achievements-link", "section4");

  // Show the first section initially and other section section hidden
  document.getElementById("section1").style.display = "block";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
  