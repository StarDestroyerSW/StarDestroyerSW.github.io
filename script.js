document.addEventListener("DOMContentLoaded", function() {
    // Get the countdown element
    const countdownElement = document.getElementById("countdown");

    // Function to update the countdown
    function updateCountdown() {
        // Calculate the number of days until July 1st
        const now = new Date();
        const july1 = new Date(now.getFullYear(), 6, 1); // Months are zero-based (0-11)

        // Check if July 1st has already passed this year
        if (now > july1) {
            july1.setFullYear(now.getFullYear() + 1);
        }

        // Calculate the difference in time
        const timeDiff = july1.getTime() - now.getTime();
        const daysUntilJuly1 = timeDiff / (1000 * 3600 * 24);

        // Update the countdown element
        countdownElement.textContent = daysUntilJuly1.toFixed(6);

        // Request the next frame
        requestAnimationFrame(updateCountdown);
    }

    // Start the countdown
    updateCountdown();
});
