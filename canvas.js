window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
};

class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.x = 0;
        this.y = 0;
        this.color = this.getRandomColor();
        this.lightness = 20; // Độ sáng ban đầu (20%)
    }

    // Lấy màu ban đầu ngẫu nhiên
    getRandomColor() {
        const h = Math.floor(Math.random() * 360);
        return { h, s: 100, l: 0 };
    }

    #draw(x, y) {
        const length = 300;
        this.#ctx.strokeStyle = `hsl(${this.color.h}, ${this.color.s}%, ${this.lightness}%)`;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + length, y + length);
        this.#ctx.stroke();
    }

    animate() {
        this.#draw(this.x, this.y);
        this.x += 2;
        this.y += 0.5;
        this.lightness += 0.3; // Tăng độ sáng
      
        // Reset về màu mới
        if (this.lightness >= 200) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.x = 0;
            this.y = 0;
            this.color = this.getRandomColor();
            this.lightness = 20;
        }

        requestAnimationFrame(this.animate.bind(this));
    }
}
