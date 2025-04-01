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
  
    // Handle form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload
  
      // Collect form values
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
  
      // Collect dynamic course inputs
      const courseInputs = document.querySelectorAll('input[name="courses[]"]');
      const courses = Array.from(courseInputs)
        .map(input => input.value.trim())
        .filter(value => value !== "");
  
      // Handle image preview (temporary URL)
      const imageURL = imageInput.files.length > 0
        ? URL.createObjectURL(imageInput.files[0])
        : "";
  
      // Build result HTML
      let resultHTML = `
        <h2>${name}</h2>
        <h3>Mascot: ${mascot}</h3>
        ${imageURL ? `<img src="${imageURL}" class="centered-image" alt="User Image"><p>${imageCaption}</p>` : ""}
        <div class="intro-content">
          <p><strong>Personal Background:</strong> ${personal}</p>
          <p><strong>Professional Background:</strong> ${professional}</p>
          <p><strong>Academic Background:</strong> ${academic}</p>
          <p><strong>Web Development Background:</strong> ${webDev}</p>
          <p><strong>Primary Computer Platform:</strong> ${platform}</p>
      `;
  
      if (courses.length > 0) {
        resultHTML += `<p><strong>Courses I'm Taking:</strong></p><ul>`;
        courses.forEach(course => {
          resultHTML += `<li>${course}</li>`;
        });
        resultHTML += `</ul>`;
      }
  
      if (funny) {
        resultHTML += `<p><strong>Funny Thing:</strong> ${funny}</p>`;
      }
  
      if (anythingElse) {
        resultHTML += `<p><strong>Anything Else:</strong> ${anythingElse}</p>`;
      }
  
      resultHTML += `</div>`;
  
      // Show results and hide the form
      form.style.display = "none";
      resultDisplay.innerHTML = resultHTML;
      resultDisplay.style.display = "block";
    });
  });