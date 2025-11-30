// Typing Animation
const typedText = document.querySelector('.name');
const text = "Ketan";
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 200);
    }
}

typedText.textContent = ""; // Reset text
type();

// Dark Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});
