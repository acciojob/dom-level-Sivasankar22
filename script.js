//your JS code here. If required.
// Find the element with the id "level"
const element = document.getElementById('level');

// Initialize a variable to count the DOM level
let level = 0;

// Traverse the parent elements until reaching the root HTML element
while (element !== document.documentElement) {
    element = element.parentElement;
    level++;
}

// Display the DOM level using alert
alert(`The level of the element is: ${level}`);
