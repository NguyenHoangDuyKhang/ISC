const canvas = document.getElementById("circle");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let radius = 0;
const maxRadius = Math.min(canvas.width, canvas.height) / 3; // Kích thước tối đa của hình tròn
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    
    if (radius < maxRadius) {
        radius += 1; // Tăng kích thước mỗi khung hình
    } else {
        radius = 0; // Reset lại kích thước khi đạt giới hạn
    }
    requestAnimationFrame(animate);
}

animate();