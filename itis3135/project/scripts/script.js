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
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const toggleServe = document.getElementById("toggle-serve");
    const expandedList = document.getElementById("expanded-list");
    const toggleIcon = document.getElementById("toggle-icon");

    toggleServe.addEventListener("click", () => {
      if (expandedList.style.display === "none") {
        expandedList.style.display = "block";
        toggleIcon.textContent = "−";
      } else {
        expandedList.style.display = "none";
        toggleIcon.textContent = "+";
      }
    });
  });
</script>

  