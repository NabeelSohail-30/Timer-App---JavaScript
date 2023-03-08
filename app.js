// Set initial countdown time to 0
var countDownDate = 0;

// Get the elements we need to update
var daysElement = document.getElementById("days");
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

// Get the start button and add a click event listener
var startButton = document.getElementById("start-timer");
startButton.addEventListener("click", function () {
    // Get the input value and convert to date object
    var inputTime = document.getElementById("timer-input").value;
    var inputDate = new Date();
    inputDate.setHours(inputTime.substr(0, 2));
    inputDate.setMinutes(inputTime.substr(3, 2));
    inputDate.setSeconds(0);

    // Set the countdown time to the input date
    countDownDate = inputDate.getTime();

    // Hide the input and start button
    document.querySelector(".input-container").style.display = "none";

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current time
        var now = new Date().getTime();

        // Calculate the distance between now and the countdown date
        var distance = countDownDate - now;

        // Calculate days, hours, minutes and seconds left
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (
            1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the timer elements with the new values
        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;

        // If the countdown is finished, play an alarm sound and display a message
        if (distance < 0) {
            clearInterval(x);
            daysElement.innerHTML = 0;
            hoursElement.innerHTML = 0;
            minutesElement.innerHTML = 0;
            secondsElement.innerHTML = 0;
            var audio = new Audio("alarm.mp3");
            audio.play();
            alert("Time's up!");
        }
    }, 1000);
});