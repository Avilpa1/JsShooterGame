window.addEventListener('click', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        weaponFire(mouse.x, mouse.y)
})

function weaponFire(x, y) {
        var raduis = 2
        console.log(x + ' ' + y)
        weaponArray.push(new Weapon(x, y, raduis))
        // console.log(weaponArray)
}

function Weapon(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius

    this.draw = function() {
        ctx.beginPath()
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.rect(this.x, this.y, 1, 10)
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.fillStyle = 'red'
        ctx.fill()
    }
    
    this.update = function() {
        this.y -= 25
        this.draw();
        removeFire()
        weaponHit()
    }
}

function removeFire() {
    for (let i=0; i < weaponArray.length; i++) {
        if(Math.floor(weaponArray[i].y) < 0) {
            weaponArray.splice([i],1)
        }
    }
}

// function weaponHit() {
//     for (let i=0; i < circleArray.length; i++) {
//         if(Math.floor(circleArray[i].x) == mouse.x) {
//             circleArray.splice([i],1)
//             console.log(circleArray[i].x + ' ' + circleArray[i].y)
//         }
//     }
// }

function weaponHit() {
    for (let i=0; i < circleArray.length; i++) {
        let enemyX = Math.floor(circleArray[i].x)
        let enemyY = Math.floor(circleArray[i].y)

        if(enemyX + ' ' + enemyY == mouse.x + ' ' + mouse.y) {
            circleArray.splice([i],1)
            console.log(circleArray[i].x + ' ' + circleArray[i].y)
        }
    }
}