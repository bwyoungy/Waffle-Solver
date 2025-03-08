// Iterate over all input cells
document.querySelectorAll('.input-cell').forEach(cell => {
    // Allow to input only capital letters
    cell.addEventListener('input', function() {
        // Replace lowercase letters with uppercase letters and replace anything which isn't a letter with an empty space
        this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '');
    });

    // Add clickable to change colour based on click on a none-yellow-green cycle
    cell.addEventListener('click', function() {
        // If cell is green, change to no background
        if (this.classList.contains('green')) this.classList.remove('green');
        // If cell is yellow, change to green
        else if (this.classList.contains('yellow')) {
            this.classList.remove('yellow');
            this.classList.add('green');
        }
        // If cell has no background, change to yellow
        else this.classList.add('yellow');
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

// Function to clear grid
function clearGrid() {
    document.querySelectorAll('.input-cell').forEach(cell => cell.value = '');
}

// Algorithm to solve Waffle puzzle
function solveWaffle() {
    // Validate input and stop function if invalid
    if (!validateGridInput()) return;
}