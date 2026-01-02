// Function to scroll to different pages
function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Simple star rating logic
function rate(star) {
    // Display the rating on screen
    document.getElementById("rating-display").innerText = "You rated: " + star + " star(s)";
}

console.log("Aditya's Portfolio is ready to go!");