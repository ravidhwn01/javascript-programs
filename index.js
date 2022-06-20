console.log('hello bhai');
const students=[
    {name: "ravi", subject:"javascript"},
    {name: "rohan", subject:"python"}
]
function enrollStudent(student, callback){
setTimeout(function(){
    students.push(student);
    console.log("student has been enrolled");
    callback();
},3000)

}
function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str+=`<li> ${student.name} </li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("students have fetched");
    }, 1000);

}

let newstudent = {name:"sunny", subject:"java"}
enrollStudent(newstudent,getStudents);
// getStudents();
