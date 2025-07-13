// 1. Gather Employee Data
let eName = prompt("Enter your name");
let eAge = prompt("Enter your age");
let eYearsOfExperience = prompt("Enter your years of experience");
let eSelfRating = prompt("Enter your self rating");
let eSalary = prompt("Enter your salary");

// 2. Determine Job Category
let jobCategory = "";
if (eYearsOfExperience < 2) {
    jobCategory = "junior";
} else if (eYearsOfExperience >= 2 && eYearsOfExperience < 5) {
    jobCategory = "mid-level";
} else if (eYearsOfExperience >= 5 && eYearsOfExperience < 20) {
    jobCategory = "senior";
} else if (eYearsOfExperience >= 20) {
    jobCategory = "expert";
} else {
    jobCategory = "please enter a valid number";
}

// 3. Check Performance Level
let performanceLevel = "";
switch (true) {
    case eSelfRating < 5:
        performanceLevel = "You need to improve";
        break;
    case eSelfRating >= 5 && eSelfRating < 7:
        performanceLevel = "You are average";
        break;
    case eSelfRating >= 7 && eSelfRating < 9:
        performanceLevel = "You are good";
        break;
    case eSelfRating >= 9 && eSelfRating <= 10:
        performanceLevel = "You are excellent";
        break;
}

// 4. Salary Calculation
if (eYearsOfExperience <= 2) {
    eSalary = eSalary * 1.1;
} else if (eYearsOfExperience > 2 && eYearsOfExperience <= 5) {
    eSalary = eSalary * 1.15;
} else if (eYearsOfExperience > 5) {
    eSalary = eSalary * 1.2;
}

// 5. Work Shift Time Calculation
let currentHour = new Date().getHours();
let workHour = "";
if (currentHour >= 9 && currentHour < 18) {
    workHour = "You are working day shift";
} else if (currentHour >= 18 && currentHour < 24) {
    workHour = "You are working night shift";
}

// 6. Summary Output
console.log(
    `Job Category : ${jobCategory}\n
    Performance Level : ${performanceLevel}\n
    Salary : ${eSalary}\n
    Work Hour : ${workHour}`
);

alert(
    `Job Category : ${jobCategory}\n
    Performance Level : ${performanceLevel}\n
    Salary : ${eSalary}\n
    Work Hour : ${workHour}`
);

document.getElementById("jobCategory").innerHTML = jobCategory;
document.getElementById("performanceLevel").innerHTML = performanceLevel;
document.getElementById("salary").innerHTML = eSalary;
document.getElementById("workHour").innerHTML = workHour;
