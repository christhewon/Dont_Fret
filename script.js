button = document.getElementById("click")
button.addEventListener("click", hello)



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 1000, 10);


function hello() {
    alert("Hello World")
}