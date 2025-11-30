const text = "Hi, I'm Ketan Barve — DevOps Engineer";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 90);
    }
}

type();
