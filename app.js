// Get the form and output sections by their IDs
let resumeForm = document.querySelector("#cv-form");
let resumeOutput = document.querySelector("#resume-output");
let editBtn = document.querySelector("#edit-btn");

// Listen to the form's submit event
resumeForm?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    resumeOutput.style.display = "block"; // Show the resume output

    // Get form input values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const skills = document.getElementById("skills");

    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill all fields");
        return;
    }

    // Populate the resume output with the form values
    document.getElementById("resumeName").innerText = `Name: ${name.value}`;
    document.getElementById("resumeEmail").innerText = `Email: ${email.value}`;
    document.getElementById("resumePhone").innerText = `Phone: ${phone.value}`;
    document.getElementById("resumeEducation").innerText = `Education: ${education.value}`;
    document.getElementById("resumeExperience").innerText = `Experience: ${experience.value}`;
    document.getElementById("resumeSkils").innerText = `Skills: ${skills.value}`;

    // Hide the form
    resumeForm.style.display = "none";
    editBtn.style.display = "block"; // Show the Edit button
});

// Edit Resume button functionality
editBtn?.addEventListener("click", () => {
    resumeForm.style.display = "block"; // Show the form again
    resumeOutput.style.display = "none"; // Hide the resume output
    editBtn.style.display = "none"; // Hide the edit button

    // Repopulate the form with current resume data
    const name = document.getElementById("resumeName").innerText.split(': ')[1];
    const email = document.getElementById("resumeEmail").innerText.split(': ')[1];
    const phone = document.getElementById("resumePhone").innerText.split(': ')[1];
    const education = document.getElementById("resumeEducation").innerText;
    const experience = document.getElementById("resumeExperience").innerText;
    const skills = document.getElementById("resumeSkils").innerText;

    // Set the form inputs to these values
    document.getElementById("name").value = name ?? '';
    document.getElementById("email").value = email ?? '';
    document.getElementById("phone").value = phone ?? '';
    document.getElementById("education").value = education ?? '';
    document.getElementById("experience").value = experience ?? '';
    document.getElementById("skills").value = skills ?? '';
});

// Print Resume functionality
document.getElementById("print-btn").addEventListener("click", () => {
    $('#resume-output').printThis();  // Using jQuery to call printThis on the resume output
});

// Share Resume functionality (Generates a shareable link)
document.getElementById("share-btn").addEventListener("click", () => {
    const resumeContent = document.getElementById("resume-output").innerHTML;
    
    // You can use local storage or save the content to a server for generating the link
    const encodedResume = encodeURIComponent(resumeContent);
    const shareableLink = `${window.location.origin}/share?resume=${encodedResume}`;
    
    // Show the generated link
    alert(`Shareable Resume Link: ${shareableLink}`);
});
