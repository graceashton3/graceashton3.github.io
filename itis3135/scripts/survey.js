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
  