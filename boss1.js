function Boss(w, h, color, x, y, type, speed) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.w = w;
    this.h = h;
    this.speed = 0;
    this.x = x;
    this.y = y;
    
    let dx = 2.5
    
    this.draw = function() {
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.w, this.h);
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, bossHealth, 10);
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.x, this.y, 400, 10);
            // ctx.fillRect(this.x, this.y, this.w, this.h);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
        this.update = function() {
            this.y += speed
            this.draw();
            
            if (this.y < 10) {
                bossHealth = 400
        
            } 

            if (this.y >= 20) {
                speed = 0
        
            }  
           
            if ( this.x + dx > innerWidth - this.w ) {
                dx = -dx
            }
            if (this.x + dx < 0 ) {
                dx = +2.5
            }
            
            this.x += dx
            
        }
    }

let bossInterval = setInterval(function() {
    if (score >= 5000) {
        spawnBoss()
        clearInterval(bossInterval)
        clearInterval(specialInterval)
        clearInterval(shieldInterval)
        clearInterval(enemyInterval)
      } 
}, 300)

function spawnBoss() {
    var raduis = 35
    let x = innerWidth/2 - 200 
    let y = -600
    let speed = Math.floor(Math.random() * 5) + 3
    console.log('boss')
    bossArray.push(new Boss(400, 400, "./images/boss1.png", x, y, "image", speed));
    
    for (let i=0; i < bossArray.length; i++) {
    setInterval(function() {
        if(isRunning == true) {
            if (bossArray[i]) {
                let x = bossArray[i].x
                let y = bossArray[i].y + 50
                bossFire(x + 340, y)
                bossFire(x + 55, y)
            }
        }
    }, 500)
}
    firstWave()
    bossAttackers()
}



function bossHit(e, m, ei, mi) {
    
    if(m.x <= (e.x + e.w) && (m.x + m.w) >= e.x && m.y <= (e.y + e.h) && (m.y + m.h) >= e.y) {
            console.log('hit')
            weaponArray.splice(mi,1)
            new enemyExplosion("./sfx/enemyExplosion.wav")

            bossHealth -= 5
            
            if (bossHealth <= 0) {
                bossArray.splice([ei],1)
                score += 5000
                
                for(let d=0; d < 15; d++) {
                    let size = Math.floor(Math.random() * 3) + 3
                    let dx = (Math.random() - 0.5) * 10;
                    let dy = (Math.random() - 0.5) * 10;
                    let color = colorArray[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(e.x + 250, e.y + 250, size, dx, dy, color))
                }
                
                for(let d=0; d < 15; d++) {
                    let size = Math.floor(Math.random() * 3) + 3
                    let dx = (Math.random() - 0.5) * 10;
                    let dy = (Math.random() - 0.5) * 10;
                    let color = colorArray[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(e.x + 250, e.y + 250, size, dx, dy, color))
                }
                
                for(let d=0; d < 50; d++) {
                    let size = Math.floor(Math.random() * 1) + 1
                    let dx = (Math.random() - 0.5) * 10;
                    let dy = (Math.random() - 0.5) * 10;
                    let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(e.x + 250, e.y + 250, size, dx, dy, color))
                }
                
                    for(let d=0; d < 50; d++) {
                    let size = Math.floor(Math.random() * 1) + 1
                    let dx = (Math.random() - 0.5) * 5;
                    let dy = (Math.random() - 0.5) * 5;
                    let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(e.x + 250, e.y + 250, size, dx, dy, color))
                }
                
                for(let d=0; d < 70; d++) {
                    let size = Math.floor(Math.random() * 1) + 1
                    let dx = (Math.random() - 0.5) * 15;
                    let dy = (Math.random() - 0.5) * 15;
                    let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(e.x + 250, e.y + 250, size, dx, dy, color))
                }
        
            }
        }
    }


function BossAttack(w, h, color, x, y, type) {
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
            ctx.drawImage(this.image, this.x - 10, this.y, this.w, this.h);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}    

function bossFire(x, y) {
        enemyWeaponArray.push(new EnemyAttack(25, 88, "./images/bossBullet.png", x, y, "image"));
}

function removeEnemyFire() {
    for (let i=0; i < enemyWeaponArray.length; i++) {
        if(Math.floor(enemyWeaponArray[i].y) > innerHeight) {
            enemyWeaponArray.splice(i,1)
        }
    }
}

function firstWave() {
    for (let i=0; i < 10; i++) {
    var raduis = 35//Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = -400//Math.random() * (innerHeight / 5 - raduis * 2) + raduis;;
    let speed = Math.floor(Math.random() * 5) + 3 * (i/3)
    let dx = (Math.random() - 0.5) * 1;
    let dy = (Math.random() - 0.5) * 1;
    
    enemyArray.push(new Enemy(60, 60, "./images/enemy2.png", x, y, "image", speed, dx, dy));
    }
}

let bossEnemyInterval

function bossAttackers() {
        bossEnemyInterval = setInterval(function(){
            if (bossHealth <= 0) {
                console.log('boss dead')
                bossEnemyIntervalClear()
                // allEnemyDead() 
            } else {
                if(isRunning == true) {
                    if(shipArray.length > 0) {
                        console.log('Boss attacker interval')
                        for (let i=0; i < 7; i++) {
                            var raduis = 35//Math.random() * 3 + 1;
                            let x = Math.random() * (innerWidth - raduis * 2) + raduis;
                            let y = -400//Math.random() * (innerHeight / 5 - raduis * 2) + raduis;;
                            let speed = Math.floor((Math.random() * 15) + 3);
                            let dx = (Math.random() - 0.5) * 1;
                            let dy = (Math.random() - 0.5) * 1;
                            
                            enemyArray.push(new Enemy(60, 60, "./images/enemy2.png", x, y, "image", speed, dx, dy));
                    }
                }
            }
        }
    }, 10000)
}

function bossEnemyIntervalClear() {
    clearInterval(bossEnemyInterval)
    console.log('interval Cleared')
}








// function allEnemyDead() {
//     for (let i=0; i < 20; i++) {

//         console.log('all enemies ' + i)
//         enemyArray.splice(i,1)
            
            
//             // new enemyExplosion("./sfx/enemyExplosion.wav")
//             score += 100
//         console.log(enemyArray)
//             //  for(let d=0; d < 20; d++) {
//             //     let size = Math.floor(Math.random() * 3) + 1
//             //     let dx = (Math.random() - 0.5) * 20;
//             //     let dy = (Math.random() - 0.5) * 20;
//             //     let color = colorArray[Math.floor(Math.random()*colorArray.length)]
//             //     debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
//             // }
            
//             // for(let d=0; d < 20; d++) {
//             //     let size = Math.floor(Math.random() * 1) + 1
//             //     let dx = (Math.random() - 0.5) * 30;
//             //     let dy = (Math.random() - 0.5) * 30;
//             //     let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
//             //     debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
//             // }
//         }
//     }
