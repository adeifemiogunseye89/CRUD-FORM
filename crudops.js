
"use strict"; // Enforces stricter parsing and error handling

// --- GLOBAL VARIABLES & INITIALIZATION ---

// we are using this "formState = {}" single object to manage the form state.
const formState = {
    // Note very important, 
    // A null index means we are creating a new record. 
    // An integer index means we are editing an existing one.
    editingIndex: null
};

// DOM element references, fetched once for efficiency.
// this lines helps the js to interatc with the HTML element in the window Dom
const studentForm = document.getElementById("studentForm");
const profileImageDisplay = document.getElementById("profileImageDisplay");
const personaInputFile = document.getElementById("profileImageUpload");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const classInput = document.getElementById("class");
const teacherInput = document.getElementById("teacher");
const parentInput = document.getElementById("parent");
const message = document.getElementById("mssg");
const studentTableBody = document.getElementById("studentsTableList"); // Get the <tbody> element

/**
 * this function get into the localStorage and retreive data for the user to interat with.
 * Loads students from localStorage or returns an empty array.
 * This is our single source of truth for student data.
 */
function getStudentsFromStorage() {
    // this line of code is to get the Students array stored up in the localStorage with the key "students"
    const students = localStorage.getItem("students");
    // this ternary condition check If (the)students exist in the localStorage, it should be "parse with the JSON string function JSON.parse()" from the stringify() it is being storedup with in the localstorage, otherwise start with an empty array.
    return students ? JSON.parse(students) : [];
}

/**
 * Saves the entire students array to localStorage.
 * @param {Array} students -
 */
function saveStudentsToStorage(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

// --- MAIN DATA ARRAY ---
let students = getStudentsFromStorage();

// --- EVENT LISTENERS ---

/**
 * Listen for form submission.
 * the JS check for studentform id in the DOM and listen to the interaction of the sumbit button action of the form.
 */
studentForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission which reloads the page and lost the data in the web url space address with question ?
    formSubmit();
});

/**
 * Listen for file input changes to handle image previews.
 */
personaInputFile.addEventListener("change", () => {
    // the key "change" in the .addEventListener function, listened to the file input in the DOM of the HTML,if the file is been triggered from it default state to another state, there it calls for actions.
    const file = personaInputFile.files[0];
    // this condition check if the event.target. result of the files object is larger than 1mb
    if (file.size < 1000000) {
        // this file will calls for file array object
        // then calls for the Onload attribute/or property/or function to help load the new file chosen
        // in other to display such a choosen file , the "src" attribute/property of the DOm img element  will be called so that the onload function can passed the result of the new file index to the src. in this case it the file[0], meaning the first item of the files at index "0". 
        const reader = new FileReader();
        reader.onload = function(e) {
            // Display the chosen image
            profileImageDisplay.src = e.target.result;
        }
        // Read the file as a Base64 data URL
        reader.readAsDataURL(file);
    }else{
        alert('this file is heavier than 1mb!')
    }
});


// --- CORE FUNCTIONS ---

/**
 * Handles the logic for form submission (Create or Update).
 */
function formSubmit() {
    const formData = getFormData();

    // this condition check and prompt the user in the form submission (validation)
    if (!formData.name || !formData.age || !formData.email) {
        message.textContent = "Please fill in atlest the Name,Age and email fields.";
        message.style.color = "red";
        return; // Stop the function
    }
        // this condition helps to check the state of the form before submission
    if (formState.editingIndex === null) {
        // CREATE: Add new student data to our array
        students.push(formData);
        message.textContent = "New data inserted into the database!";
    } else {
        // UPDATE: Replace the data at the stored index
        students[formState.editingIndex] = formData;
        message.textContent = "Data has been updated successfully!";
    }
    
    message.style.color = "green";
    saveStudentsToStorage(students); // Save the updated array to localStorage
    renderTable(); // Re-draw the table with the new data
    resetForm(); // Clear the form
}

/**
 * Gathers data from form fields and returns it as an object.
 * @returns {Object} An object containing the student's data.
 */
function getFormData() {
    return {
        profile: profileImageDisplay.src,
        name: nameInput.value,
        age: ageInput.value,
        gender: genderInput.value,
        classGrade: classInput.value,
        teacher: teacherInput.value,
        parent: parentInput.value
    };
}

/**
 * Renders the entire student table based on the global `students` array.
 */
function renderTable() {
    // Clear the existing table body to prevent duplicates
    studentTableBody.innerHTML = "";

    if (students.length === 0) {
        studentTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">No students found.</td></tr>';
        return;
    }

    students.forEach((student, index) => {
        // Create a new row
        const row = studentTableBody.insertRow();

        // Populate cells with data
        row.insertCell(0).innerHTML = `<img src="${student.profile}" alt="Profile" width="50" height="50" style="object-fit: cover; border-radius: 50%;">`;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.age;
        row.insertCell(3).textContent = student.gender;
        row.insertCell(4).textContent = student.classGrade;
        row.insertCell(5).textContent = student.teacher;
        row.insertCell(6).textContent = student.parent;
        
        // Add action buttons cell
        // We pass the 'index' to the functions so they know which item in the array to act on.
        row.insertCell(7).innerHTML = `
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
        `;
    });
}

/**
 * Populates the form with data for editing.
 * @param {number} index - The index of the student to edit in the `students` array.
 */
function editStudent(index) {
    const student = students[index];

    // Populate form fields
    profileImageDisplay.src = student.profile;
    nameInput.value = student.name;
    ageInput.value = student.age;
    genderInput.value = student.gender;
    classInput.value = student.classGrade;
    teacherInput.value = student.teacher;
    parentInput.value = student.parent;

    // Set the global editing index
    formState.editingIndex = index;
    
    // Optional: Change submit button text to "Update"
    document.querySelector("#studentForm button[type='submit']").textContent = "Updated";
}

/**
 * Deletes a student from the array.
 * @param {number} index - The index of the student to delete.
 */
function deleteStudent(index) {
    if (confirm("Are you sure you want to DELETE this data from the database?")) {
        // Remove one element at the specified index
        students.splice(index, 1);
        
        saveStudentsToStorage(students); // Save the change
        renderTable(); // Re-draw the table
        message.textContent = "Data deleted successfully.";
        message.style.color = "orange";
    }
}

/**
 * Resets the form to its default state.
 */
function resetForm() {
    studentForm.reset(); // This is a simpler way to clear a form
    profileImageDisplay.src = ""; // Reset the image preview
    formState.editingIndex = null; // Exit editing mode
    message.textContent = ""; // Clear any messages
    
    // Optional: Reset submit button text
    document.querySelector("#studentForm button[type='submit']").textContent = "Submit";
}


// --- INITIAL PAGE LOAD ---

// Render the table with data from localStorage when the script first runs.
renderTable();



