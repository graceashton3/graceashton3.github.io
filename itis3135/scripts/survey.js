document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
    const courseContainer = document.getElementById("courseContainer");
    const addCourseBtn = document.getElementById("addCourse");
    
    addCourseBtn.addEventListener("click", function () {
        const courseDiv = document.createElement("div");
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.classList.add("course");
        courseInput.placeholder = "Enter course name";
        
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            courseDiv.remove();
        });

        courseDiv.appendChild(courseInput);
        courseDiv.appendChild(deleteBtn);
        courseContainer.appendChild(courseDiv);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const image = document.getElementById("image").files[0];
        const caption = document.getElementById("caption").value;
        const personalBackground = document.getElementById("personalBackground").value;
        const professionalBackground = document.getElementById("professionalBackground").value;
        const academicBackground = document.getElementById("academicBackground").value;
        const webBackground = document.getElementById("webBackground").value;
        const platform = document.getElementById("platform").value;
        const funnyThing = document.getElementById("funnyThing").value;
        const anythingElse = document.getElementById("anythingElse").value;
        const courses = [...document.querySelectorAll(".course")].map(course => course.value).join(", ");

        if (!name || !mascot || !image || !caption || !personalBackground || !professionalBackground || !academicBackground || !webBackground || !platform) {
            alert("Please fill out all required fields.");
            return;
        }

        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = `
            <h3>Your Submitted Info:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Mascot:</strong> ${mascot}</p>
            <p><strong>Image:</strong> <img src="${URL.createObjectURL(image)}" alt="User Image" width="150"></p>
            <p><strong>Caption:</strong> ${caption}</p>
            <p><strong>Personal Background:</strong> ${personalBackground}</p>
            <p><strong>Professional Background:</strong> ${professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${academicBackground}</p>
            <p><strong>Web Development Background:</strong> ${webBackground}</p>
            <p><strong>Primary Computer Platform:</strong> ${platform}</p>
            <p><strong>Courses Currently Taking:</strong> ${courses}</p>
            <p><strong>Funny Thing About You:</strong> ${funnyThing}</p>
            <p><strong>Anything Else?:</strong> ${anythingElse}</p>
            <button id="resetForm">Reset</button>
        `;

        form.style.display = "none";

        document.getElementById("resetForm").addEventListener("click", function () {
            form.style.display = "block";
            resultsDiv.innerHTML = "";
            form.reset();
        });
    });

    form.addEventListener("reset", function () {
        document.getElementById("results").innerHTML = "";
    });
});
