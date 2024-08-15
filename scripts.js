// Function to toggle favorite status
function toggleFavorite(packageName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if package is already in favorites
    if (favorites.includes(packageName)) {
        // Remove from favorites
        favorites = favorites.filter(fav => fav !== packageName);
        alert(`${packageName} removed from favorites.`);
    } else {
        // Add to favorites
        favorites.push(packageName);
        alert(`${packageName} added to favorites.`);
    }

    // Save updated favorites list to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update button style
    updateFavoriteButtons();
}

// Function to update favorite buttons based on localStorage
function updateFavoriteButtons() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    document.querySelectorAll('.box').forEach(box => {
        const packageName = box.getAttribute('data-package');
        const button = box.querySelector('.favorite');
        if (favorites.includes(packageName)) {
            button.classList.add('favorited');
            button.textContent = 'Unfavorite';
        } else {
            button.classList.remove('favorited');
            button.textContent = 'Favorite';
        }
    });
}

// Function to handle user registration
function handleRegistration() {
    // Show the success message
    document.getElementById("successMessage").style.display = "block";
    
    // Hide the form to prevent further submissions
    document.getElementById("registerForm").style.display = "none";
    
    // Simulate saving user data (this would normally involve a backend service)
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Store user data in localStorage (this is for demonstration; in a real app, use a backend)
    const userData = { username, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    // After 3 seconds, redirect to the login page
    setTimeout(function() {
        window.location.href = './login.html';
    }, 3000);
}

// Initialize favorite buttons state on page load
document.addEventListener('DOMContentLoaded', updateFavoriteButtons);
