window.addEventListener('click', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        weaponFire(mouse.x, mouse.y)
        new playerWeapon1("./sfx/iceball.wav");
        
})

function weaponFire(x, y) {
        weaponArray.push(new Weapon(x, y, 1, 10))
}

function Weapon(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.draw = function() {
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.w, this.h)
        ctx.strokeStyle = 'green';
        ctx.stroke();
        ctx.fillStyle = 'green'
        ctx.fill()

        
    }
    
    this.update = function() {
        this.y -= 25
        this.draw();
        // removeFire()
        // playerSound()

    }
    for (let i=0; i < weaponArray.length; i++) {
        if(weaponArray[i].y <= 0) {
            // weaponArray.splice(i,1)
            weaponHit(weaponArray[i])
        }
    }
}


    
function removeFire() {
    for (let i=0; i < weaponArray.length; i++) {
        if(Math.floor(weaponArray[i].y) <= 0) {
            weaponArray.splice(i,1)
            // console.log(weaponArray)
        }
    }
}

// function weaponHit() {
//     for (let i=0; i < enemyArray.length; i++) {
//         if(Math.floor(enemyArray[i].x) == mouse.x) {
//             enemyArray.splice([i],1)
//             // console.log(circleArray[i].x + ' ' + circleArray[i].y)
//             score += 100
//             console.log(score)
            
 
//         }
//     }
// }

function weaponHit(m) {
    for (let i=0; i < enemyArray.length; i++) {
        let e = enemyArray[i]
// console.log(e)
// console.log(m)
        if(m.x > e.x && m.x < e.x + e.w) {
            console.log('hit')
            enemyArray.splice([i],1)
            new enemyExplosion("./sfx/enemyExplosion.wav")
            score += 100
         
             for(let d=0; d < 20; d++) {
                let size = Math.floor(Math.random() * 3) + 1
                let dx = (Math.random() - 0.5) * 20;
                let dy = (Math.random() - 0.5) * 20;
                let color = colorArray[Math.floor(Math.random()*colorArray.length)]
                debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
            }
            
            for(let d=0; d < 20; d++) {
                let size = Math.floor(Math.random() * 1) + 1
                let dx = (Math.random() - 0.5) * 30;
                let dy = (Math.random() - 0.5) * 30;
                let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
                debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
            }
        }
    }
}


function enemyDestroyed(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius
    this.dx = dx;
    this.dy = dy;
    this.color = color
    
    this.draw = function() {
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.radius*2, this.radius*3);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color
        ctx.fill()
    }
    
    this.update = function() {
        
        this.x += this.dx
        this.y += this.dy
        // this.y -= 5
        // this.x += 5
        this.draw();

    }
}


function playerWeapon1(src) {
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


function enemyExplosion(src) {
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