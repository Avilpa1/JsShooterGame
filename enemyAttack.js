function EnemyAttack(x, y, w, h) {
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


for (let i=0; i < enemyArray.length; i++) {
    setInterval(function() {
        enemyFire(enemyArray[i].x + 30, enemyArray[i].y + 30)
    }, 600)
}

function removeEnemyFire() {
    for (let i=0; i < enemyWeaponArray.length; i++) {
        if(Math.floor(enemyWeaponArray[i].y) > innerHeight) {
            enemyWeaponArray.splice(i,1)
            // console.log(enemyWeaponArray)
        }
    }
}