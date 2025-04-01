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