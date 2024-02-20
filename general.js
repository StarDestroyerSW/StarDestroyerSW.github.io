banana = ""
banana = prompt("Enter DOB (YYYY-MM-DD) 2")
if (banana == ""){
    banana = "2007-12-23"
}


document.addEventListener("DOMContentLoaded", function() {
    // Get the element to display the difference in seconds
    const secondsElement = document.getElementById("seconds-difference");

    // Function to calculate the difference in seconds between two dates
    function calculateSecondsDifference(startDate, endDate) {
        const startTime = startDate.getTime();
        const endTime = endDate.getTime();

        const timeDiff = endTime - startTime;
        const secondsDifference = timeDiff / 1000;

        return secondsDifference;
    }

    // Example usage:
    const startDate = new Date(); // Current date and time
    const endDate = new Date();
    endDate.setFullYear(initialDate.GetFullYear() + 80);

    // Calculate the difference in seconds
    const differenceInSeconds = calculateSecondsDifference(startDate, endDate);

    // Display the difference in seconds with 7 decimal places
    secondsElement.textContent = differenceInSeconds.toFixed(7);
});
