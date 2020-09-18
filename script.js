const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
//forloop this please
let loop;
let increment = 0;
for (loop = 0; loop < 18; loop++) {
    ctx.fillRect(increment, 0, 5, 100);
    increment += 100
}
ctx.fillRect(0, 0, 2000, 5);
ctx.fillRect(0, 100, 2000, 5);

