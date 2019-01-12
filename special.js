function Special(w, h, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.w = w;
    this.h = h;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    
    this.draw = function() {
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
        this.update = function() {
            this.x -= 3
            // pickup()
            this.draw();
            removeSpecial() 
            
            }
        }


let specialInterval = setInterval(function() {
    console.log('special')
    
    let x = innerWidth + 300 
    let y = Math.random() * (innerHeight/2);

    specialArray.push(new Special(60, 72, "./images/health.png", x, y, "image"));
    
}, 20000)
// }, 5000)

function pickup(e, m, ei, mi) {

    if(m.x <= (e.x + e.w) && (m.x + m.w) >= e.x && m.y <= (e.y + e.h) && (m.y + m.h) >= e.y) {
        new specialSound(('./sfx/health.wav'))
        specialArray.splice(ei,1)
        weaponArray.splice(mi,1)
        playerHealth += 25
            
            if (playerHealth >= 100) {
                playerHealth = 100
                }
            }
        }
    

function removeSpecial() {
    for (let i=0; i < specialArray.length; i++) {
        if(Math.floor(specialArray[i].x) < -100) {
            specialArray.splice(i,1)
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