document.addEventListener("DOMContentLoaded", () => {
    // Set current year if element with id="year" exists
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
    // Time-based greeting
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
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
    }
  
    // Expandable "Who We Serve" list
    const toggleServe = document.getElementById("toggle-serve");
    const expandedList = document.getElementById("expanded-list");
    const toggleIcon = document.getElementById("toggle-icon");
  
    if (toggleServe && expandedList && toggleIcon) {
      toggleServe.addEventListener("click", () => {
        if (expandedList.style.display === "none" || expandedList.style.display === "") {
          expandedList.style.display = "block";
          toggleIcon.textContent = "[-]";
        } else {
          expandedList.style.display = "none";
          toggleIcon.textContent = "[+]";
        }
      });
    }
  });

  // Expandable Upcoming Events list
const toggleEvents = document.getElementById("toggle-events");
const eventsListContainer = document.getElementById("events-list-container");
const eventsToggleIcon = document.getElementById("events-toggle-icon");

if (toggleEvents && eventsListContainer && eventsToggleIcon) {
  toggleEvents.addEventListener("click", () => {
    if (eventsListContainer.style.display === "none" || eventsListContainer.style.display === "") {
      eventsListContainer.style.display = "block";
      eventsToggleIcon.textContent = "[-]";
    } else {
      eventsListContainer.style.display = "none";
      eventsToggleIcon.textContent = "[+]";
    }
  });
}

  
  
  

  