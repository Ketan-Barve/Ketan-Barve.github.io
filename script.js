// Loader
setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
}, 1500);


// Typing Animation
const roles = [
    "DevOps Engineer",
    "Cloud Engineer",
    "CI/CD Automation Expert",
    "AWS | Docker | Kubernetes"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function type() {
    if (charIndex < roles[index].length) {
        typingElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[index].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
