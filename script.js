button = document.getElementById("click")
button.addEventListener("click", hello)



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,2000,5);
ctx.fillRect(0,100,2000,5);

ctx.fillRect(0,0,5,100);
ctx.fillRect(100,0,5,100);
ctx.fillRect(200,0,5,100);
ctx.fillRect(300,0,5,100);
ctx.fillRect(400,0,5,100);
ctx.fillRect(500,0,5,100);
ctx.fillRect(600,0,5,100);
ctx.fillRect(700,0,5,100);
ctx.fillRect(800,0,5,100);
ctx.fillRect(900,0,5,100);
ctx.fillRect(1000,0,5,100);
ctx.fillRect(1100,0,5,100);
ctx.fillRect(1200,0,5,100);
ctx.fillRect(1300,0,5,100);
ctx.fillRect(1400,0,5,100);
ctx.fillRect(1500,0,5,100);
ctx.fillRect(1600,0,5,100);
ctx.fillRect(1700,0,5,100);
ctx.fillRect(1800,0,5,100);
ctx.fillRect(1900,0,5,100);


function hello() {
    alert("Hello World")
}