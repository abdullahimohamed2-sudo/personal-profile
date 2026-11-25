
// Greeting button
function sayHello() {
    alert("Hello! 👋 Welcome to Abdullahi's personal gaming profile!");
}

// Contact button
function contactMe() {
    alert("Thanks for visiting my website! You can contact me by email.");
}

// Switch between dark and light themes
function changeTheme() {
    document.body.classList.toggle("light-mode");

    // Check which theme is active
    if (document.body.classList.contains("light-mode")) {
        alert("Light theme activated! ☀️");
    } else {
        alert("Dark gaming theme activated! 🌙");
    }
}
