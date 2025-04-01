document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('intro-form');
    const addCourseButton = document.getElementById('add-course');
    const coursesContainer = document.getElementById('courses-container');
  
    // Add a new course text box when the button is clicked
    addCourseButton.addEventListener('click', function() {
      const newCourseInput = document.createElement('input');
      newCourseInput.type = 'text';
      newCourseInput.name = 'courses[]';
      newCourseInput.placeholder = 'Enter a course';
      coursesContainer.appendChild(newCourseInput);
  
      // Add delete button next to the new course input
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.type = 'button';
      deleteButton.addEventListener('click', function() {
        coursesContainer.removeChild(newCourseInput);
        coursesContainer.removeChild(deleteButton);
      });
      coursesContainer.appendChild(deleteButton);
    });
  
    // Prevent form submission if required fields are empty
    form.addEventListener('submit', function(event) {
      const requiredFields = [
        'name', 'mascot', 'image', 'image-caption', 'personal-background',
        'professional-background', 'academic-background', 'web-dev-background',
        'computer-platform', 'agree'
      ];
      
      let valid = true;
      
      requiredFields.forEach(function(field) {
        const input = document.getElementById(field);
        if (input && input.value === '') {
          valid = false;
          input.style.borderColor = 'red'; // Highlight missing fields
        }
      });
  
      if (!valid) {
        event.preventDefault(); // Stop form from submitting if invalid
        alert('Please fill in all required fields.');
      }
    });
  
    // Reset form behavior
    form.addEventListener('reset', function() {
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(function(input) {
        input.style.borderColor = ''; // Clear red border when reset
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent reload
  
        // Get form values
        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const caption = document.getElementById("caption").value;
        const personal = document.getElementById("personal").value;
        const professional = document.getElementById("professional").value;
        const academic = document.getElementById("academic").value;
  
        const imageInput = document.getElementById("image");
        const imageURL = imageInput.files[0]
          ? URL.createObjectURL(imageInput.files[0])
          : "";
  
        // Create result content
        const resultHTML = `
          <div class="intro-page">
            <h2>${name}</h2>
            <h3>Mascot: ${mascot}</h3>
            ${
              imageURL
                ? `<img src="${imageURL}" class="centered-image"><p>${caption}</p>`
                : ""
            }
            <div class="intro-content">
              <p><strong>Personal Background:</strong> ${personal}</p>
              <p><strong>Professional Background:</strong> ${professional}</p>
              <p><strong>Academic Background:</strong> ${academic}</p>
            </div>
          </div>
        `;
  
        // Hide form and show results
        document.getElementById("introForm").style.display = "none";
        const resultDiv = document.getElementById("resultDisplay");
        resultDiv.innerHTML = resultHTML;
        resultDiv.style.display = "block";
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("intro-form");
    const resultDisplay = document.getElementById("resultDisplay");
  
    const addCourseBtn = document.getElementById("add-course");
    const coursesContainer = document.getElementById("courses-container");
  
    // Add additional course input fields
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
  
      // Gather all form values
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
      const courses = Array.from(courseInputs).map(input => input.value).filter(val => val.trim() !== "");
  
      const imageURL = imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : "";
  
      // Build the HTML to show
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
  
      // Hide the form and show the result
      form.style.display = "none";
      resultDisplay.innerHTML = resultHTML;
      resultDisplay.style.display = "block";
    });
  });  