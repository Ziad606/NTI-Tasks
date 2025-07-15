let announcement = document.getElementById("announcement");

let timeInMinutes = prompt("Enter the time in minutes");

if (timeInMinutes === "" || timeInMinutes === null) {
    alert("Please enter a valid time");
    location.reload();
}

let time = timeInMinutes * 60;

let interval = setInterval(() => {
    time--;
    announcement.innerHTML = `Time remaining: ${Math.floor(
        time / 60
    )} minutes :${time % 60} seconds`;
    if (time === 0) {
        clearInterval(interval);
        announcement.innerHTML = "Time up";
    }
}, 1000);
