document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("intro-form");
    const resultDisplay = document.getElementById("resultDisplay");
    const addCourseBtn = document.getElementById("add-course");
    const coursesContainer = document.getElementById("courses-container");
  
    // Allow user to add more course fields
    addCourseBtn.addEventListener("click", function () {
        const br = document.createElement("br");
        const input = document.createElement("input");
        input.type = "text";
        input.name = "courses[]";
        input.placeholder = "Enter a course";
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.type = "button";
        deleteBtn.addEventListener("click", function () {
            coursesContainer.removeChild(input);
            coursesContainer.removeChild(br);
            coursesContainer.removeChild(deleteBtn);
        });
  
        coursesContainer.appendChild(br);
        coursesContainer.appendChild(input);
        coursesContainer.appendChild(deleteBtn);
    });
  
    form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Get form values
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
            const value = courseInputs[i].value.trim();
            if (value !== "") {
                courses.push(value);
            }
        }
  
        const imageURL = imageInput.files.length > 0
            ? URL.createObjectURL(imageInput.files[0])
            : "";
  
        // Build the result HTML
        const resultParts = [];
  
        resultParts.push('<div class="intro-page">');
        resultParts.push('<h2>' + name + ' || ' + mascot + '</h2>');
  
        if (imageURL) {
            resultParts.push('<img src="' + imageURL + '" class="centered-image" alt="Uploaded Image">');
            resultParts.push('<p>' + imageCaption + '</p>');
        }
  
        resultParts.push('<div class="intro-content">');
        resultParts.push('<p><strong>Personal Background:</strong> ' + personal + '</p>');
        resultParts.push('<p><strong>Professional Background:</strong> ' + professional + '</p>');
        resultParts.push('<p><strong>Academic Background:</strong> ' + academic + '</p>');
        resultParts.push('<p><strong>Web Development Background:</strong> ' + webDev + '</p>');
        resultParts.push('<p><strong>Primary Computer Platform:</strong> ' + platform + '</p>');
  
        if (courses.length > 0) {
            resultParts.push('<p><strong>Courses I am taking and why:</strong></p>');
            resultParts.push('<ul>');
            for (let j = 0; j < courses.length; j++) {
                resultParts.push('<li>' + courses[j] + '</li>');
            }
            resultParts.push('</ul>');
        }
  
        if (funny !== "") {
            resultParts.push('<p><strong>Funny Thing:</strong> ' + funny + '</p>');
        }
  
        if (anythingElse !== "") {
            resultParts.push('<p><strong>Anything Else:</strong> ' + anythingElse + '</p>');
        }
  
        resultParts.push('</div>'); // .intro-content
        resultParts.push('</div>'); // .intro-page
  
        // Display the result
        form.style.display = "none";
        resultDisplay.innerHTML = resultParts.join("\n");
        resultDisplay.style.display = "block";
    });
});
