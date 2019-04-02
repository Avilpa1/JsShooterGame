window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    
})


function Ship(w, h, color, x, y, type) {
    this.image = new Image();
    this.image.src = color;

    this.w = w;
    this.h = h;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    
    this.draw = function() {
            ctx.drawImage(this.image, mouse.x - 30, mouse.y, this.w, this.h);
            
            // ctx.arc(mouse.x,  mouse.y + 40, 45, Math.PI, 0 , false)
            // ctx.strokeStyle = 'rgba(107, 161, 255, 0.2)';
            // ctx.stroke();
            // ctx.fillStyle = 'rgba(107, 161, 255, 0.2)'
            // ctx.fill()
            
            // if (mouse.x <= 300) {
            //     console.log('test')
            //     this.image.src = './playerShip2.png'
            // } else {
            //     this.image.src = color
            // }

    }
        this.update = function() {
        this.draw();
            
            if(playerHealth == 0) {
                playerLose()
            }
            
        }

    }


function shipSpawn() {
    let x = mouse.x
    let y = mouse.y

    shipArray.push(new Ship(60, 82, "./images/playerShip2.png", x, y, "image"));
}


function damage(m, mi) {
    enemyWeaponArray.splice(mi,1)
    
        if (shieldPower > 0) {
            shieldPower -= 5
            shieldHit()
            
        } else {
    
            playerHealth -= 2
        
         for(let d=0; d < 3; d++) {
            let size = Math.floor(Math.random() * 1) + 1
            let dx = (Math.random() - 0.5) * 20;
            let dy = (Math.random() - 0.5) * 20;
            let color = colorArray[Math.floor(Math.random()*colorArray.length)]
            debrisArray.push(new enemyDestroyed(mouseXcord, mouseYcord , size, dx, dy, color))
        }
    }

}


function shieldHit() {
    shieldHitSound.play()
    let raduis = 45
    
    shieldArrayDisplay.push(new Ship(60, 82, "./images/ship_shield.png", mouseXcord, mouseYcord, "image"));
    // ctx.arc(mouseXcord, mouseYcord + 40, raduis, Math.PI*2, false)
    ctx.fillStyle = 'rgba(107, 161, 255, 0.2)'
    ctx.fill()
    
    setTimeout(function() {
        shieldArrayDisplay.splice(0,1);
        
    },800)
        
        
}


            //  for(let d=0; d < 20; d++) {
            //     let size = Math.floor(Math.random() * 3) + 1
            //     let dx = (Math.random() - 0.5) * 20;
            //     let dy = (Math.random() - 0.5) * 20;
            //     let color = colorArray[Math.floor(Math.random()*colorArray.length)]
            //     debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
            // }
            
            // for(let d=0; d < 20; d++) {
            //     let size = Math.floor(Math.random() * 1) + 1
            //     let dx = (Math.random() - 0.5) * 30;
            //     let dy = (Math.random() - 0.5) * 30;
            //     let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
            //     debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
            // }
            
            
function playerLose() {
    playerExplosionSound.play()
    shipArray = []
    weaponArray = []
    shieldArrayDisplay = []
    shieldPower = 0
    playerHealth = 0
    
    let playerPosX = mouse.x
    let playerPosY = mouse.y
    // bossEnemyIntervalntervalClear()
    
    for(let d=0; d < 20; d++) {
        let size = Math.floor(Math.random() * 3) + 1
        let dx = (Math.random() - 0.5) * 10;
        let dy = (Math.random() - 0.5) * 10;
        let color = colorArray[Math.floor(Math.random()*colorArray.length)]
        debrisArray.push(new enemyDestroyed(playerPosX, playerPosY , size, dx, dy, color))
    }
    
    for(let d=0; d < 70; d++) {
        let size = Math.floor(Math.random() * 1) + 1
        let dx = (Math.random() - 0.5) * 10;
        let dy = (Math.random() - 0.5) * 10;
        let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
        debrisArray.push(new enemyDestroyed(playerPosX, playerPosY , size, dx, dy, color))
    }
    
        for(let d=0; d < 70; d++) {
        let size = Math.floor(Math.random() * 1) + 1
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;
        let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
        debrisArray.push(new enemyDestroyed(playerPosX, playerPosY , size, dx, dy, color))
    }
            
}

playerExplosionSound = new playerExplosion('./sfx/playerExplosion.mp3')  

function playerExplosion(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    
    this.play = function(){
        this.sound.play();
        playerSound = ''
    }
    // this.stop = function(){
    //     this.sound.pause();
    // }    
}

shieldHitSound = new sHitSound('./sfx/snd_shield.wav')  

function sHitSound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    
    this.play = function(){
        this.sound.play();
        playerSound = ''
    }
    // this.stop = function(){
    //     this.sound.pause();
    // }    
}

shipSpawn()