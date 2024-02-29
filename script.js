// Get the target element with the id "level"
const targetElement = document.getElementById('level');

// Initialize the DOM level counter
let domLevel = 1; // Start with 1 for the root html element

// Traverse up the DOM tree starting from the target element
let parentElement = targetElement;
while (parentElement !== document.documentElement) {
    parentElement = parentElement.parentElement;
    domLevel++;
}

// Display the DOM level using alert()
alert(`The level of the element is: ${domLevel}`);
