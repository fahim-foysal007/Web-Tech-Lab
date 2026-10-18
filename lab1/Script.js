let name = prompt("Your Name:");
let age = parseInt(prompt("Your Age:"));
let cgpa = parseFloat(prompt("Your CGPA:"));

let isStudent = (prompt("Are you a student? (true/false)") === "true");

let grade = prompt("Enter your student's grade (A/B/C):").charAt(0);

console.log("Your Student Information:");
console.log("Your Name:"+ name);
console.log("Your Age:"+ age);
console.log("Your CGPA:"+ cgpa);
console.log("Student:"+ isStudent);
console.log("Your Grade:"+grade);
let courses = [
    "Web Technology",
    "OOP",
    "Database"
];
console.log("Your Courses:");
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
let marks = Number(prompt("Enter your marks:"));
if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Grade: F");
}
function showStudent(name, age) {
    console.log("Your Student Name: " + name);
    console.log("Your Student Age: " + age);
}
showStudent(name, age);
let students = [];
for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter your student name:");
}
  console.log("Students:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);

}
