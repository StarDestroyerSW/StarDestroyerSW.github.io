
banana = ""
banana = prompt("Enter DOB (YYYY-MM-DD)")
if (banana == ""){
    banana = "2007-12-23"
}
function updateSecondsAlive() {
    // Replace 'YYYY-MM-DD' with your actual birthdate in the format 'YYYY-MM-DD'
    const birthDate = new Date(banana);
    birthDate.setFullYear(birthDate.getFullYear() + 80);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = birthDate - currentDate;

    // Convert milliseconds to seconds
    const secondsAlive = (timeDifference / 1000);

    // Update the text in the div with the calculated seconds
    const centeredText = document.getElementById('difference');
    centeredText.textContent = secondsAlive.toFixed(3);
}

// Update every quarter of a second (250 milliseconds)
setInterval(updateSecondsAlive, 0);
