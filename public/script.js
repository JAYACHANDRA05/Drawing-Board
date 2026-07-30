const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let brushColor = "black";
let brushWidth = 5;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    ctx.lineWidth = brushWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
})
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});
canvas.addEventListener("mouseenter",()=>{
    console.log("You can draw now")
})

canvas.addEventListener("dblclick",()=>{
    const randomBg = `hsl(${Math.random()*360},80%,90%)`
    canvas.style.backgroundColor = randomBg
})

canvas.addEventListener("contextmenu",(e)=>{
    e.preventDefault()

    const colors = ["red","blue","green","pink","white","black","yellow"]
    const randomColor = colors[Math.floor(Math.random()*colors.length)] 
    brushColor = randomColor
    alert(`Brush color changed to : ${brushColor}`)
})

clearBtn.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})
