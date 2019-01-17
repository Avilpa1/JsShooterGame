function EnemyAttack(w, h, color, x, y, type) {
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
    
    this.update = function() {
        this.y += 20

        removeEnemyFire()
        removeEnemyDebris()
        
        this.draw();
            
            for (let wi=0; wi < enemyWeaponArray.length; wi++) {
                let m = enemyWeaponArray[wi]
                let offset = -30
                if(m.x <= (mouseXcord + 30) && (m.x + m.w) >= mouseXcord + offset && m.y <= (mouseYcord + 82) && (m.y + m.h) >= mouseYcord) {
                    damage(w, wi)
                }
            }            
        }
    }


function enemyFire(x, y) {
        // enemyWeaponArray.push(new EnemyAttack(x, y, 1, 10))
        enemyWeaponArray.push(new EnemyAttack(20, 30, "./images/spr_bullet_ise2.png", x, y, "image"));
}


for (let i=0; i < enemyArray.length; i++) {
    setInterval(function() {
        if (isRunning == true) {
            if (enemyArray[i]) {
                // console.log('enemy weapon fired')
                let x = enemyArray[i].x + 30
                let y = enemyArray[i].y + 30
                enemyFire(x, y)
            }
        }
    }, 600)
}

function removeEnemyFire() {
    for (let i=0; i < enemyWeaponArray.length; i++) {
        if(Math.floor(enemyWeaponArray[i].y) > innerHeight) {
            enemyWeaponArray.splice(i,1)
        }
    }
}

function removeEnemyDebris() {
    for (let i=0; i < debrisArray.length; i++) {
        let dbX = debrisArray[i].X
        let dbY = debrisArray[i].y
        
        if ( dbY >= innerHeight || dbY <= 0 ) {
            debrisArray.splice(i,1)
        }
        
        if ( dbX >= innerWidth || dbX <= 0 ) {
            debrisArray.splice(i,1)
        }
        
        
        
        if ( i > 400 ) {
            debrisArray.splice(i,1)
        }
    }
}