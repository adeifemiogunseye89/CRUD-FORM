
// var selectedRow = null;
// function formSubmit(){
//    let formData = getData();
//      let readFormData = storedRectriveData(formData);
//    if(readFormData == false){
//      let message = document.getElementById("mssg");
//     message.innerHTML = "please fill the form"
//    }
//    else{
//     let message = document.getElementById("mssg");
//    if(selectedRow == null){
//         insert(readFormData);
        
//         message.innerText = "new data inserted into the database!"
//    }
//    else{
//         UpdateData()
//         message.innerText = "Data has been updated and inserted in the database!"
//    }}
   
//    reset();
// };


// let choosenFile = document.getElementById("personaInputFile");
// let imageInputSource = document.getElementById("profileImageDisplay");

// choosenFile.addEventListener("change", () => {
//         // this object "new FileReader()"line of code helps to read the file and the URL details, then pass it to the variable "readChoosenFile"
//         let readChosenFile = new FileReader();

//         // if it has successfully read the file that has been choosen by the User, it will commence the loading of the file to the DDM.
//         readChosenFile.onload = function (e){
//                 // the first thing this does was to get the file details, which is refer to in javascript as "RESULT", converting the details to 64bit strings so that it can be stored in localStorage.
//              let imageURLDetails = e.target.result;

//         //this result is passed to variable and variable is passed as a value to the HTML element of "IMAGE.SRC". this is to ensure that the image is display on the Dom when it loaded.
//              imageInputSource.src = imageURLDetails;

//                 // the line helps to save the converted image URl in to the localStorage
//             let imageSave = localStorage.setItem("savedImage",  imageURLDetails);
//         }
//         // this Object helps to read converted URl in the LocalStorage,then read the the Array of the file details and pick the first item of the file Object Array, which is "file[0]"
//        readChosenFile.readAsDataURL(choosenFile.files[0]);
       
// });


// function getData(){
//     var profile = imageInputSource.src;
//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;
//     var gender = document.getElementById("gender").value;
//     var classGrade = document.getElementById("class").value;
//     var teacher = document.getElementById("teacher").value;
//     var parent = document.getElementById("parent").value;

//     let student = [profile, name, age, gender, classGrade, teacher, parent];
//     return(student)
// }

// function storedRectriveData(formData) {

//     // this function stored up details of the students enterd in the form in the local storage
//     var studentPicture = localStorage.setItem("Picture", formData[0]);
//     var studentName = localStorage.setItem("Name", formData[1]);
//     var studentAge = localStorage.setItem("Age", formData[2]);
//     var studentGender = localStorage.setItem("Gender", formData[3]);
//     var studentClass = localStorage.setItem("ClassGrade", formData[4]);
//     var studentTeacher = localStorage.setItem("Teacher", formData[5]);
//     var studentGuardian = localStorage.setItem("Parent",formData[6]);

    
//     //  this function retrieve the the student details from the local Storage 
//     var studentProfile = localStorage.getItem("Picture");
//     var returnStudentName = localStorage.getItem("Name");
//     var returnStudentAge = localStorage.getItem("Age");
//     var returnStudentGender = localStorage.getItem("Gender");
//     var returnStudentClass = localStorage.getItem("ClassGrade");
//     var returnStudentTeacher = localStorage.getItem("Teacher");
//     var returnStudentGuardian = localStorage.getItem("Parent");

//     let studentDetailsStored = [studentProfile,returnStudentName, returnStudentAge, returnStudentGender, returnStudentClass,returnStudentTeacher, returnStudentGuardian];
//     return(studentDetailsStored)
       
// }
// // this function help to insert the form detials on the table on the Ui(screen/) for the client/users to interact with 
//     function insert(readFormData){
//         var table = document.getElementById("studentsTable"); //get the table element from the window HTML
//         table = table.insertRow(); //function to insert row into the table
//         //insertcell() function helps to populate the insertRow() with cells array.
//         // the innerHTml is accessed with teh innerHTML property of the cell
//         // innerHTML is populated with data from the localStorage or from the form using the Array index
//         table.insertCell(0).innerHTML = readFormData[0]; 
//         table.insertCell(1).innerHTML = readFormData[1];
//         table.insertCell(2).innerHTML = readFormData[2];
//         table.insertCell(3).innerHTML = readFormData[3];
//         table.insertCell(4).innerHTML = readFormData[4];
//         table.insertCell(5).innerHTML = readFormData[5];
//         table.insertCell(6).innerHTML = readFormData[6];
//         table.insertCell(7).innerHTML = `<button onclick = "onEdit(this)">Edit</button>
//                                          <button onClick = "remove(this)">Delete</button>`;
//     }
//       function reset(){
//         var profile = document.getElementById("profileImageDisplay").value = "";
//         var name = document.getElementById("name").value = "";
//         var age = document.getElementById("age").value = "";
//         var gender = document.getElementById("gender").value = "";
//         var classGrade = document.getElementById("class").value = "";
//         var teacher = document.getElementById("teacher").value = "";
//         var parent = document.getElementById("parent").value = "";
//         // these sets of codeline reset values to empty value in the form on the dom window
//       }    
//     function onEdit(td){
//         //  this couldline "td.parentElement.parentElement;" help to select and return selected the data element (value) on the table. By initially identifing the innerHTML element value, which is in the "td", then the parentElement of the innerHTML value "td", which is the "tr".
//         selectedRow = td.parentElement.parentElement;
//         document.getElementById("profileImageDisplay") = selectedRow.cells[0].innerHTML;
//         document.getElementById("name").value = selectedRow.cells[1].innerHTML;
//         document.getElementById("age").value = selectedRow.cells[2].innerHTML;
//         document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
//         document.getElementById("class").value = selectedRow.cells[4].innerHTML;
//         document.getElementById("teacher").value = selectedRow.cells[5].innerHTML;
//         document.getElementById("parent").value = selectedRow.cells[6].innerHTML;
//             //  cells is by default an array stored in a row, to call a cell in function, it is usally the index of teh cells that will be called no the name e.g [0,9,3,6,1,....]
//         // (var age = document.getElementById("age").value;) this is a wrong approach to calling or gettting the data to edit in the form.
//     }

//     function UpdateData(){
//         selectedRow.cells[0].innerHTML =  document.getElementById("profileImageDisplay");
//         selectedRow.cells[1].innerHTML =  document.getElementById("name").value;
//         selectedRow.cells[2].innerHTML =  document.getElementById("age").value;
//         selectedRow.cells[3].innerHTML =  document.getElementById("gender").value;
//         selectedRow.cells[4].innerHTML =  document.getElementById("class").value;
//         selectedRow.cells[5].innerHTML =  document.getElementById("teacher").value;
//         selectedRow.cells[6].innerHTML =  document.getElementById("parent").value;
//         selectedRow = null;             
//     }

//     function remove(td){
//         let affirm = confirm("Are such you want to DELETE this data from the database?");
//         if(affirm == true){
//             selectedRow = td.parentElement.parentElement;
//             document.getElementById("studentsTable").deleteRow(selectedRow.rowIndex)
//         };
        
//     }


// the above is my self development codelines, while the google studio Ai help to do this below

"use strict"; // Enforces stricter parsing and error handling

// --- GLOBAL VARIABLES & INITIALIZATION ---

// Use a single object to manage the form state.
const formState = {
    // A null index means we are creating a new record. An integer index means we are editing an existing one.
    editingIndex: null
};

// DOM element references, fetched once for efficiency.
const studentForm = document.getElementById("studentForm"); // Assuming your form has an ID
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
 * Loads students from localStorage or returns an empty array.
 * This is our single source of truth for student data.
 */
function getStudentsFromStorage() {
    const students = localStorage.getItem("students");
    // If students exist in storage, parse the JSON string, otherwise start with an empty array.
    return students ? JSON.parse(students) : [];
}

/**
 * Saves the entire students array to localStorage.
 * @param {Array} students - The array of student objects to save.
 */
function saveStudentsToStorage(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

// --- MAIN DATA ARRAY ---
let students = getStudentsFromStorage();

// --- EVENT LISTENERS ---

/**
 * Listen for form submission.
 */
studentForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission which reloads the page
    formSubmit();
});

/**
 * Listen for file input changes to handle image previews.
 */
personaInputFile.addEventListener("change", () => {
    const file = personaInputFile.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Display the chosen image
            profileImageDisplay.src = e.target.result;
        }
        // Read the file as a Base64 data URL
        reader.readAsDataURL(file);
    }
});


// --- CORE FUNCTIONS ---

/**
 * Handles the logic for form submission (Create or Update).
 */
function formSubmit() {
    const formData = getFormData();

    // Simple validation
    if (!formData.name || !formData.age) {
        message.textContent = "Please fill in at least the Name and Age fields.";
        message.style.color = "red";
        return; // Stop the function
    }

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
    document.querySelector("#studentForm button[type='submit']").textContent = "Update";
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



