let name = prompt("Enter your name");
let birthDate = prompt("Enter your birth date");
let isStudent = confirm("Are you a student?");

let age = Number(new Date().getFullYear() - new Date(birthDate).getFullYear());

let result = "";
if (age < 13) {
    result = "kid";
} else if (age >= 13 && age < 18) {
    result = "teen";
} else if (age >= 18 && age < 60) {
    result = "adult";
} else {
    result = "senior";
}
let statment = `Hello ${name}, you are ${age} years old.\n
Category: ${result}.\n
Don't forget to study hard!`;

console.log(statment);
alert(statment);
document.getElementById("result").innerHTML = statment;
