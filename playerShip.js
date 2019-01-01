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
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
        this.update = function() {
 
            damage()
            this.draw();
        }

    }


function shipSpawn() {
    let x = mouse.x//innerWidth / 2
    let y = mouse.y//innerHeight - 200

    shipArray.push(new Ship(60, 60, "https://media.indiedb.com/images/games/1/68/67090/spaceship.1.png", x, y, "image"));
    
}

// for (let i=0; i < weaponArray.length; i++) {
//     if(weaponArray[i].y <= 0) {
//         // weaponArray.splice(i,1)
//         damage(enemyWeaponArray[i])
//     }
// }

function damage() {

        for (let i=0; i < enemyWeaponArray.length; i++) {
        // console.log(enemyWeaponArray[i])
        }
    
    for (let i=0; i < shipArray.length; i++) {
        let e = shipArray[i]
// console.log(e)
// console.log(m)
        // if(m.x > e.x && m.x < e.x + e.width) {
        // // if(e.y > me.y && e.y < m.x + m.width) {
        //     console.log('hit')
        //     shipArray.splice([i],1)
        //     playerHealth -= 10
         

            
        // }
    }
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
    new playerExplosion('./sfx/playerExplosion.mp3')
    shipArray = []
    weaponArray = []
    let playerPosX = mouse.x
    let playerPosY = mouse.y
    
    
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