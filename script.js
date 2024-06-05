document.addEventListener("DOMContentLoaded", function() {
    // Get the countdown element
    const countdownElement = document.getElementById("countdown");

    // Function to update the countdown
    function updateCountdown() {
        // Calculate the number of days until June 18th
        const now = new Date();
        const june18 = new Date(now.getFullYear(), 5, 18); // Months are zero-based (0-11)

        // Check if June 18th has already passed this year
        if (now > june18) {
            june18.setFullYear(now.getFullYear() + 1);
        }

        // Calculate the difference in time
        const timeDiff = june18.getTime() - now.getTime();
        const daysUntilJune18 = timeDiff / (1000 * 3600 * 24);

        // Update the countdown element
        countdownElement.textContent = daysUntilJune18.toFixed(6);

        // Request the next frame
        requestAnimationFrame(updateCountdown);
    }

    // Start the countdown
    updateCountdown();
});
