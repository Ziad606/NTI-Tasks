let temprature = prompt("Enter the temprature");

let condition =
    temprature < 0
        ? "freezing"
        : temprature >= 0 && temprature <= 15
        ? "cold"
        : temprature >= 16 && temprature <= 25
        ? "mild"
        : temprature >= 26 && temprature <= 35
        ? "warm"
        : "hot";

let safetyStatus;

if (temprature < -5 && temprature > 40) {
    safetyStatus = "Dangerous temperature";
} else {
    safetyStatus = "Safe temperature";
}

let advice =
    temprature <= 16 && temprature > 25
        ? "Perfect for outdoor activities!"
        : temprature > 30
        ? "Stay hydrated!"
        : "";

console.log(`temprature: ${temprature}`);
console.log(`condition: ${condition}`);
console.log(`safetyStatus: ${safetyStatus}`);
if (advice.length > 0) {
    console.log(`advice: ${advice}`);
}

alert(
    `The temprature is ${temprature} \nthe condition is ${condition} \nthe safety status is ${safetyStatus}
${advice.length > 0 ? `the advice is ${advice}` : ""}`
);

let container = document.querySelector(".container");

container.innerHTML = `The temprature is ${temprature} \nthe condition is ${condition} \nthe safety status is ${safetyStatus}
${advice.length > 0 ? `the advice is ${advice}` : ""}`;
