const canvas = document.getElementById('particles'); // commit: Select canvas
const ctx = canvas.getContext('2d'); // commit: Canvas context

canvas.width = window.innerWidth; // commit: Full width
canvas.height = window.innerHeight; // commit: Full height

let particlesArray = []; // commit: Particle array

class Particle { // commit: Particle class
    constructor() {
        this.x = Math.random() * canvas.width; // commit: Random x
        this.y = Math.random() * canvas.height; // commit: Random y
        this.size = Math.random() * 3 + 1; // commit: Particle size
        this.speedX = Math.random() * 1 - 0.5; // commit: Horizontal speed
        this.speedY = Math.random() * 1 - 0.5; // commit: Vertical speed
        this.color = `rgba(0,255,234,${Math.random()})`; // commit: Neon cyan
    }

    update() { // commit: Update position
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1; // commit: Bounce x
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1; // commit: Bounce y
    }

    draw() { // commit: Draw particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() { // commit: Initialize particles
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() { // commit: Animate particles
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles(); // commit: Start particles
animateParticles(); // commit: Animate loop

window.addEventListener('resize', () => { // commit: Adjust canvas on resize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});
