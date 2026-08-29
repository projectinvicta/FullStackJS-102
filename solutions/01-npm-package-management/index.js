// Step 1 - Import the 'formatGreeting' function from './utils.js' using ES Module syntax (import)
import { formatGreeting } from './utils.js';

// Step 2 - Call 'formatGreeting' with your name and print the result to the console
const greeting = formatGreeting("Explorer");
console.log(greeting);

// Step 3 - Read the port number from the package.json config block using environment variables
const port = process.env.npm_package_config_port || 3000; 

console.log(`Checking package configuration...`);
console.log(`Port configured in package.json: ${port}`);
