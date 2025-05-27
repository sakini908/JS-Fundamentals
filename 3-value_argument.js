// Get command-line arguments, avoiding the use of length
const args = process.argv.slice(2);

// Check if an argument is present and print the appropriate message
console.log(args[0] || "No argument");
