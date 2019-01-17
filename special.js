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
            this.draw();
            removeSpecial() 
            
            }
        }

// Health //

let specialInterval = setInterval(function() {
    if(isRunning == true) {
        console.log('Health')
        
        let x = innerWidth + 300 
        let y = Math.random() * (innerHeight/2);
    
        specialArray.push(new Special(45, 45, "./images/health.png", x, y, "image"));
    }
}, 25000)
// }, 5000)

function healthPickup(e, m, ei, mi) {

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


// Shield //     

let shieldInterval = setInterval(function() {
    if(isRunning == true) {
        console.log('shield')
        
        let x = innerWidth + 300 
        let y = Math.random() * (innerHeight/2);
    
        shieldArray.push(new Special(45, 45, "./images/shield.png", x, y, "image"));
    }
}, 20000)
// }, 5000)        
    
function shieldPickup(e, m, ei, mi) {

    if(m.x <= (e.x + e.w) && (m.x + m.w) >= e.x && m.y <= (e.y + e.h) && (m.y + m.h) >= e.y) {
        new specialSound(('./sfx/health.wav'))
        shieldArray.splice(ei,1)
        weaponArray.splice(mi,1)
        shieldPower += 25
            
            if (playerHealth >= 100) {
                playerHealth = 100
                }
            }
        }
        
// Missle //

// let missileInterval = setInterval(function() {
//     console.log('missile')
    
//     let x = innerWidth + 300 
//     let y = Math.random() * (innerHeight/2);

//     missileArray.push(new Special(45, 45, "./images/weapon.png", x, y, "image"));
    
// }, 30000)
// // }, 5000)        
    
// function missilePickup(e, m, ei, mi) {

//     if(m.x <= (e.x + e.w) && (m.x + m.w) >= e.x && m.y <= (e.y + e.h) && (m.y + m.h) >= e.y) {
//         new specialSound(('./sfx/health.wav'))
//         missileArray.splice(ei,1)
//         weaponArray.splice(mi,1)
//         missileQty -= 1
            

//     }
// }

        
// Remove //        
function removeSpecial() {
    for (let i=0; i < specialArray.length; i++) {
        if(Math.floor(specialArray[i].x) < -100) {
            specialArray.splice(i,1)
        }
    }
    
    for (let i=0; i < shieldArray.length; i++) {
        if(Math.floor(shieldArray[i].x) < -100) {
            shieldArray.splice(i,1)
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