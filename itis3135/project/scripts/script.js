document.addEventListener("DOMContentLoaded", () => {
    // Validator links
    document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
    document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
  
    // Set current year
    document.getElementById("year").textContent = new Date().getFullYear();
  
    // Time-based greeting
    const heroSection = document.querySelector(".hero");
    const greeting = document.createElement("h3");
    const hour = new Date().getHours();
  
    if (hour < 12) {
      greeting.textContent = "Good morning!";
    } else if (hour < 18) {
      greeting.textContent = "Good afternoon!";
    } else {
      greeting.textContent = "Good evening!";
    }
  
    heroSection.insertBefore(greeting, heroSection.querySelector("p"));
  
    // Expandable "Who We Serve" list
    const toggleServe = document.getElementById("toggle-serve");
    const expandedList = document.getElementById("expanded-list");
    const toggleIcon = document.getElementById("toggle-icon");
  
    if (toggleServe && expandedList && toggleIcon) {
      toggleServe.addEventListener("click", function () {
        if (expandedList.style.display === "none") {
          expandedList.style.display = "block";
          toggleIcon.textContent = "[-]";
        } else {
          expandedList.style.display = "none";
          toggleIcon.textContent = "[+]";
        }
      });
    }
  });
  
  

  