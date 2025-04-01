document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("intro-form");
    const resultDisplay = document.getElementById("resultDisplay");
    const addCourseBtn = document.getElementById("add-course");
    const coursesContainer = document.getElementById("courses-container");
  
    // Add new course input fields dynamically
    addCourseBtn.addEventListener("click", function () {
      const input = document.createElement("input");
      input.type = "text";
      input.name = "courses[]";
      input.placeholder = "Enter a course";
      coursesContainer.appendChild(document.createElement("br"));
      coursesContainer.appendChild(input);
    });
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Gather input values
      const name = document.getElementById("name").value;
      const mascot = document.getElementById("mascot").value;
      const imageInput = document.getElementById("image");
      const imageCaption = document.getElementById("image-caption").value;
      const personal = document.getElementById("personal-background").value;
      const professional = document.getElementById("professional-background").value;
      const academic = document.getElementById("academic-background").value;
      const webDev = document.getElementById("web-dev-background").value;
      const platform = document.getElementById("computer-platform").value;
      const funny = document.getElementById("funny-thing").value;
      const anythingElse = document.getElementById("anything-else").value;
  
      const courseInputs = document.querySelectorAll('input[name="courses[]"]');
      const courses = [];
      for (let i = 0; i < courseInputs.length; i++) {
        const val = courseInputs[i].value.trim();
        if (val !== "") {
          courses.push(val);
        }
      }
  
      const imageURL = imageInput.files.length > 0
        ? URL.createObjectURL(imageInput.files[0])
        : "";
  
      // Build HTML using string array (no template literals)
      const resultParts = [];
  
      resultParts.push("<h2>" + name + "</h2>");
      resultParts.push("<h3>Mascot: " + mascot + "</h3>");
  
      if (imageURL) {
        resultParts.push('<img src="' + imageURL + '" class="centered-image" alt="User Image">');
        resultParts.push("<p>" + imageCaption + "</p>");
      }
  
      resultParts.push('<div class="intro-content">');
      resultParts.push("<p><strong>Personal Background:</strong> " + personal + "</p>");
      resultParts.push("<p><strong>Professional Background:</strong> " + professional + "</p>");
      resultParts.push("<p><strong>Academic Background:</strong> " + academic + "</p>");
      resultParts.push("<p><strong>Web Development Background:</strong> " + webDev + "</p>");
      resultParts.push("<p><strong>Primary Computer Platform:</strong> " + platform + "</p>");
  
      if (courses.length > 0) {
        resultParts.push("<p><strong>Courses I'm Taking:</strong></p><ul>");
        for (let j = 0; j < courses.length; j++) {
          resultParts.push("<li>" + courses[j] + "</li>");
        }
        resultParts.push("</ul>");
      }
  
      if (funny !== "") {
        resultParts.push("<p><strong>Funny Thing:</strong> " + funny + "</p>");
      }
  
      if (anythingElse !== "") {
        resultParts.push("<p><strong>Anything Else:</strong> " + anythingElse + "</p>");
      }
  
      resultParts.push("</div>");
  
      // Show results and hide the form
      form.style.display = "none";
      resultDisplay.innerHTML = resultParts.join("\n");
      resultDisplay.style.display = "block";
    });
  });