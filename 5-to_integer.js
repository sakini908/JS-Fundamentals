// Get the first argument from the command line
const arg = process.argv[2];

// Convert argument to an integer
const num = parseInt(arg, 10);

// Check if the conversion is a valid number
if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
