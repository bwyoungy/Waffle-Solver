// Iterate over all input cells and allow to input only capital letters
document.querySelectorAll('.input-cell').forEach(cell => {
    cell.addEventListener('input', function() {
        // Replace lowercase letters with uppercase letters and replace anything which isn't a letter with an empty space
        this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '');
    });
});

// Function to validate input. Returns boolean value if validation passes or not
function validateGridInput() {
    const cells = document.querySelectorAll('.input-cell');
    for (let cell of cells) {
        if (cell.value.trim() === '') {
            alert("Please fill in all letter cells to solve!");
            return false;
        }
    }

    return true;
}

// Algorithm to solve Waffle puzzle
function solveWaffle() {
    // Validate input and stop function if invalid
    if (!validateGridInput()) return;
}