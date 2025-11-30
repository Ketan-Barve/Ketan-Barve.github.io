// Typing Animation
const typedText = document.querySelector('.name');
const text = "Ketan";
let index = 0;

function type() {
  if(index < text.length){
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 200);
  }
}
typedText.textContent = "";
type();

// Dark Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
