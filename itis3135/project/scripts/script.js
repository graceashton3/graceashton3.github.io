document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

// Set current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

//Allow for different creatings depending on time of day
document.addEventListener("DOMContentLoaded", () => {
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
  });
  
//Expandable who we serve list
document.addEventListener("DOMContentLoaded", () => {
    const toggleHeader = document.getElementById("toggle-serve");
    const serveList = toggleHeader.nextElementSibling;
    const icon = document.getElementById("toggle-icon");
  
    toggleHeader.addEventListener("click", () => {
      serveList.style.display = serveList.style.display === "none" ? "block" : "none";
      icon.textContent = serveList.style.display === "none" ? "[+]" : "[−]";
    });
  
    // Start collapsed
    serveList.style.display = "none";
  });
  