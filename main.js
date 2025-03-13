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
    // Iterate over input cells
    document.querySelectorAll('.input-cell').forEach(cell => {
        // Reset the inputted value
        cell.value = '';
        // Remove colour class
        cell.classList.remove("yellow", "green");
    });
}

// Algorithm to solve Waffle puzzle
function solveWaffle() {
    // Validate input and stop function if invalid
    if (!validateGridInput()) return;
}

// Function to save data from UI input to code
function getGridData() {
    // Pull cells data from DOM
    const cells = document.querySelectorAll('.input-cell');
    
    // Initialise grid in code
    let gridData = [];

    // Iterate over cells data
    cells.forEach((cell, index) => {
        // Set status based on class
        let status = "none"; // Default status
        if (cell.classList.contains("green")) status = "green";
        else if (cell.classList.contains("yellow")) status = "yellow";

        // Add current cell to grid in code
        gridData.push({
            index: index,
            letter: cell.value,
            status: status
        });
    });

    return gridData;
}

// Function to update display of grid based on grid in code
function upgradeDisplayGrid(gridData) {
    // Get cells from DOM
    const cells = document.querySelectorAll('.input-cell');

    // Iterate over cells in code grid
    gridData.forEach((data, index) => {
        // Get the corresponding HTML cell
        let cell = cells[index];

        // Update the letter
        cell.value = data.letter;

        // Reset colour class
        cell.classList.remove("yellow", "green");

        // If has colour status, add it to class for display
        if (data.status === "green") cell.classList.add("green");
        else if (data.status === "yellow") cell.classList.add("yellow");
    });
}