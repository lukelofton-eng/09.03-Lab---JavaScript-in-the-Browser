// Function to handle form submission and process lineup selections
function myLineUp(event) {
    // Prevent default form submission behavior (page reload)
    event.preventDefault();

    // Retrieve status radio selection
    const statusElement = document.querySelector('input[name="status"]:checked');
    const status = statusElement ? statusElement.value : 'None';

    // Retrieve game date selection
    const dateElement = document.getElementById('gameDate');
    const gameDate = dateElement ? dateElement.value : '';

    // Retrieve selected players checkboxes
    const selectedPlayers = Array.from(
        document.querySelectorAll('input[name="players"]:checked')
    ).map(cb => cb.value);

    // Construct data object to print to console
    const data = {
        status: status,
        gameDate: gameDate,
        players: selectedPlayers
    };

    // Print all data received to console
    console.log("Form Data Received:", data);

    // Concatenate all information into one display string
    const playerString = selectedPlayers.length > 0 ? selectedPlayers.join(", ") : "None selected";
    const resultText = `Selection Summary: Status - ${status} | Date - ${gameDate} | Players - ${playerString}`;

    // Display selections on the web page
    const outputDisplay = document.getElementById('output-display');
    if (outputDisplay) {
        outputDisplay.textContent = resultText;
    }
}

// Attach event listener once DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lineup-form");
    if (form) {
        form.addEventListener("submit", myLineUp);
    }
});
