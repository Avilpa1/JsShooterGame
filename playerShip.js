window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    
})

function Ship(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    
    this.draw = function() {
        if (type == "image") {
            ctx.drawImage(this.image, 
                mouse.x - 30, 
                mouse.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
        this.update = function() {

            
            this.draw();
        }
}

for (let i=0; i < 1; i++) {
    let x = innerWidth / 2
    let y = innerHeight - 200

    shipArray.push(new Ship(60, 60, "https://media.indiedb.com/images/games/1/68/67090/spaceship.1.png", x, y, "image"));
}