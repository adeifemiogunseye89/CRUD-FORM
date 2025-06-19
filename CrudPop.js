const modalPop = document.getElementById("Pop-Up");


// document.body.addEventListener('click', () =>{
//     modalPop.style.display = "block";
// });


const newStudent = document.getElementById("addStudents").addEventListener('click', () => {
    modalPop.style.display = "block";
});

const CloseUp = document.getElementById("close-toggle").addEventListener('click', () => {
    confirm("u click to close my dialogue")
    modalPop.style.display = "none";
});