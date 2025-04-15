document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 1;
  const captionText = document.getElementById("caption");

  function showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("demo");

      if (n > slides.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = slides.length;
      }

      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      // Remove "active" class from all thumbnails
      for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      // Show the current slide and add "active" to the corresponding thumbnail
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";

      // Set the caption using the thumbnail's alt text
      captionText.textContent = dots[slideIndex - 1].alt;
  }

  window.plusSlides = function(n) {
      showSlides(slideIndex += n);
  }

  window.currentSlide = function(n) {
      showSlides(slideIndex = n);
  }

  // Initial display
  showSlides(slideIndex);
});

  


