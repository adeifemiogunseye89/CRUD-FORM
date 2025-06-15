
var selectedRow = null;
function formSubmit(){
   let formData = getData();
     let readFormData = storedRectriveData(formData);
   if(readFormData = false){
    message.innerHTML = "please fill the form"
   }
   else{
    let message = document.getElementById("mssg");
   if(selectedRow == null){
        insert(readFormData);
        
        message.innerText = "new data inserted into the database!"
   }
   else{
        UpdateData()
        message.innerText = "Data has been updated and inserted in the database!"
   }
   }
   
   reset();
};

function getData(){
    // var profile = document.getElementById("profile").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var classGrade = document.getElementById("class").value;
    var teacher = document.getElementById("teacher").value;
    var parent = document.getElementById("parent").value;

    let student = [name, age, gender, classGrade, teacher, parent];
    return(student)
}

function storedRectriveData(formData) {

    // this function stored up details of the students enterd in the form in the local storage
    // var studentPicture = localStorage.setItem("Picture", formdata[0]);
    var studentName = localStorage.setItem("Name", formData[0]);
    var studentAge = localStorage.setItem("Age", formData[1]);
    var studentGender = localStorage.setItem("Gender", formData[2]);
    var studentClass = localStorage.setItem("ClassGrade", formData[3]);
    var studentTeacher = localStorage.setItem("Teacher", formData[4]);
    var studentGuardian = localStorage.setItem("Parent",formData[5]);

    
    //  this function retrieve the the student details from the local Storage 
    // var studentProfile = localStorage.getItem("Picture", studentPicture);
    var returnStudentName = localStorage.getItem("Name", studentName);
    var returnStudentAge = localStorage.getItem("Age", studentAge);
    var returnStudentGender = localStorage.getItem("Gender", studentGender );
    var returnStudentClass = localStorage.getItem("ClassGrade", studentClass);
    var returnStudentTeacher = localStorage.getItem("Teacher", studentTeacher);
    var returnStudentGuardian = localStorage.getItem("Parent", studentGuardian);

    let studentDetailsStored = [returnStudentName, returnStudentAge, returnStudentGender, returnStudentClass,returnStudentTeacher, returnStudentGuardian];
    return(studentDetailsStored)
       
}
// this function help to insert the form detials on the table on the Ui(screen/) for the client/users to interact with 
    function insert(readFormData){
        var table = document.getElementById("studentsTable"); //get the table element from the window HTML
        table = table.insertRow(); //function to insert row into the table
        //insertcell() function helps to populate the insertRow() with cells array.
        // the innerHTml is accessed with teh innerHTML property of the cell
        // innerHTML is populated with data from the localStorage or from the form using the Array index
        table.insertCell(0).innerHTML = readFormData[0]; 
        table.insertCell(1).innerHTML = readFormData[1];
        table.insertCell(2).innerHTML = readFormData[2];
        table.insertCell(3).innerHTML = readFormData[3];
        table.insertCell(4).innerHTML = readFormData[4];
        table.insertCell(5).innerHTML = readFormData[5];
        table.insertCell(6).innerHTML = `<button onclick = "onEdit(this)">Edit</button>
                                         <button onClick = "remove(this)">Delete</button>`;
    }
      function reset(){
        var name = document.getElementById("name").value = "";
        var age = document.getElementById("age").value = "";
        var gender = document.getElementById("gender").value = "";
        var classGrade = document.getElementById("class").value = "";
        var teacher = document.getElementById("teacher").value = "";
        var parent = document.getElementById("parent").value = "";
        // these sets of codeline reset values to empty value in the form on the dom window
      }    
    function onEdit(td){
        //  this couldline "td.parentElement.parentElement;" help to select and return selected the data element (value) on the table. By initially identifing the innerHTML element value, which is in the "td", then the parentElement of the innerHTML value "td", which is the "tr".
        selectedRow = td.parentElement.parentElement;
        document.getElementById("name").value = selectedRow.cells[0].innerHTML;
        document.getElementById("age").value = selectedRow.cells[1].innerHTML;
        document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
        document.getElementById("class").value = selectedRow.cells[3].innerHTML;
        document.getElementById("teacher").value = selectedRow.cells[4].innerHTML;
        document.getElementById("parent").value = selectedRow.cells[5].innerHTML;
            //  cells is by default an array stored in a row, to call a cell in function, it is usally the index of teh cells that will be called no the name e.g [0,9,3,6,1,....]
        // (var age = document.getElementById("age").value;) this is a wrong approach to calling or gettting the data to edit in the form.
    }

    function UpdateData(){
        selectedRow.cells[0].innerHTML =  document.getElementById("name").value;
        selectedRow.cells[1].innerHTML =  document.getElementById("age").value;
        selectedRow.cells[2].innerHTML =  document.getElementById("gender").value;
        selectedRow.cells[3].innerHTML =  document.getElementById("class").value;
        selectedRow.cells[4].innerHTML =  document.getElementById("teacher").value;
        selectedRow.cells[5].innerHTML =  document.getElementById("parent").value;
        selectedRow = null;             
    }

    function remove(td){
        let affirm = confirm("Are such you want to DELETE this data from the database?");
        if(affirm == true){
            selectedRow = td.parentElement.parentElement;
            document.getElementById("table").deleteRow(selectedRow.selectedRowindex)
        };
        
    }
