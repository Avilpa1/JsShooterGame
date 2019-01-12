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
            ctx.drawImage(this.image, mouse.x - 30, mouse.y, this.width, this.height);
            // if (mouse.x <= 300) {
            //     console.log('test')
            //     this.image.src = './playerShip2.png'
            // } else {
            //     this.image.src = color
            // }
        }
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

            console.log('player hit')
            enemyWeaponArray.splice(mi,1)
            playerHealth -= 1

             for(let d=0; d < 3; d++) {
                let size = Math.floor(Math.random() * 1) + 1
                let dx = (Math.random() - 0.5) * 20;
                let dy = (Math.random() - 0.5) * 20;
                let color = colorArray[Math.floor(Math.random()*colorArray.length)]
                debrisArray.push(new enemyDestroyed(mouseXcord, mouseYcord , size, dx, dy, color))
            }

    }
// }


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
    new playerExplosion('./sfx/playerExplosion.mp3')
    shipArray = []
    weaponArray = []
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

function playerExplosion(src) {
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



shipSpawn()