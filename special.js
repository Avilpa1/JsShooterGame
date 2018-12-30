function Special(width, height, color, x, y, type) {
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
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
        this.update = function() {
            this.x-=5
            pickup()
            this.draw();
        }

    }


setInterval(function() {
    console.log('special')
    
    let x = innerWidth + 300 
    let y = Math.random() * (innerHeight - raduis * 2) - 200;

    specialArray.push(new Special(60, 72, "./health.png", x, y, "image"));
    
}, 10000)


function pickup() {
    for(let i=0; i<specialArray.length; i++) {
        // console.log(specialArray[i])
        
        if (mouse.x == specialArray[i].x) {
            specialArray.splice(i,1)
            playerHealth += 25
            new specialSound(('./sfx/health.wav'))
        }
        
        if (playerHealth >= 100) {
            playerHealth = 100
        }
    }
}

function specialSound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    // this.play = function(){
        this.sound.play();
    //     playerSound = ''
    // }
    // this.stop = function(){
    //     this.sound.pause();
    // }    
}