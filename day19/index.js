// Example: Read file asynchronously using Promises
const fs = require('fs').promises;

// Define a function to read a file asynchronously with Promises
function readFileWithPromise() {
  return fs.readFile('example.txt', 'utf8');
}

// Usage: Call the function and handle the result with Promises
readFileWithPromise()
  .then(data => {
    console.log('File content:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });
