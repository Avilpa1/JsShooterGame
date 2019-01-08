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
    
    let dx = 4
    
    this.draw = function() {
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.w, this.h);
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, bossHealth, 10);
            ctx.strokeRect(this.x, this.y, 500, 10);
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
                bossHealth = 500
        
            } 

            if (this.y >= 20) {
                speed = 0
        
            }  
           
            if ( this.x + dx > innerWidth - this.w ) {
                dx = -dx
            }
            if (this.x + dx < 0 ) {
                console.log('0 hit')
                dx = +4
            }
            
            this.x += dx
            
        }
    }

let bossInterval = setInterval(function() {
    if (score == 5000) {
        spawnBoss()
        clearInterval(bossInterval)
        clearInterval(specialInterval)
        clearInterval(enemyInterval)
      } 
}, 300)

function spawnBoss() {
    var raduis = 35
    let x = innerWidth/2 - 250 
    let y = -600
    let speed = Math.floor(Math.random() * 5) + 3
    console.log('boss')
    bossArray.push(new Boss(500, 500, "./images/boss1.png", x, y, "image", speed));
    
    for (let i=0; i < bossArray.length; i++) {
    setInterval(function() {
        let x = bossArray[i].x
        let y = bossArray[i].y + 50
        enemyFire(x + 400, y)
        enemyFire(x + 95, y)
    }, 300)
}
    firstWave()
    bossAttackers()
}



function bossHit(w, index) {
    for (let i=0; i < bossArray.length; i++) {
        let e = bossArray[i]
// console.log(e)
// console.log(index)
        if(w.x > e.x && w.x < e.x + e.w) {

        // if(m.x+m.w >= e.x && m.x <= e.x+e.w && m.y <= e.y && m.y <= e.y+e.h) {
            console.log('hit')
            // weaponArray.splice(0,1)
            new enemyExplosion("./sfx/enemyExplosion.wav")

            bossHealth -= 10
            
            if (bossHealth <= 0) {
                bossArray.splice([i],1)
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
                
                for(let d=0; d < 70; d++) {
                    let size = Math.floor(Math.random() * 1) + 1
                    let dx = (Math.random() - 0.5) * 10;
                    let dy = (Math.random() - 0.5) * 10;
                    let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(e.x + 250, e.y + 250, size, dx, dy, color))
                }
                
                    for(let d=0; d < 70; d++) {
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
}

function BossAttack(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.draw = function() {
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.w, this.h)
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.fillStyle = 'red'
        ctx.fill()
    }
    
    this.update = function() {
        this.y += 20

        removeEnemyFire()
        this.draw();
    }
}

function enemyFire(x, y) {
        enemyWeaponArray.push(new EnemyAttack(x, y, 1, 10))
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
    
    enemyArray.push(new Enemy(60, 60, "./images/enemy1.png", x, y, "image", speed));
    }
}

function bossAttackers() {
    
    let bossEnemyInterval = setInterval(function(){
        
        if (bossHealth <= 0) {
            console.log('boss dead')
            bossEnemyIntervalClear()
            // allEnemyDead() 
        } else {
        
    weaponArray = [];
    enemyWeaponArray = [];
    // enemyArray = [];
    // debrisArray = [];
    
    for (let i=0; i < 15; i++) {
    var raduis = 35//Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = -400//Math.random() * (innerHeight / 5 - raduis * 2) + raduis;;
    let speed = Math.floor(Math.random() * 5) + 3 * (i/3)
    // let dx = (Math.random() - 0.5) * 1;
    // let dy = (Math.random() - 0.5) * 1;
    
    enemyArray.push(new Enemy(60, 60, "./images/enemy1.png", x, y, "image", speed));
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
