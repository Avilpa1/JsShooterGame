window.addEventListener('click', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        weaponFire(mouse.x, mouse.y)
        new playerWeapon1("./sfx/iceball.wav");
})

let mouseXcord = 0
let mouseYcord = 0

document.addEventListener('mousemove', function(e){
    mouseXcord = e.pageX
    mouseYcord = e.pageY;
}, false);

window.addEventListener("keypress",
    
    function(event) {
        if (event.keyCode == '32') {
                weaponFire(mouseXcord, mouseYcord)
                new playerWeapon1("./sfx/iceball.wav");
        }

});

function weaponFire(x, y) {
        // weaponArray.push(new Weapon(x, y, 1, 10))
        weaponArray.push(new Weapon(12, 49, "./images/bullet1.png", x, y, "image"));
}


// function Weapon(x, y, w, h) {
function Weapon(w, h, color, x, y, type) {
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
            ctx.drawImage(this.image, this.x - 5, this.y, this.w, this.h);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
    
    this.update = function() {
        this.y -= 25
        this.draw();

            
        for (let ei=0; ei < enemyArray.length; ei++) {
            let e = enemyArray[ei]
            
                for (let wi=0; wi < weaponArray.length; wi++) {
                    let w = weaponArray[wi]
                    
                        weaponHit(e, w, ei, wi)
                        removeFire()
                }
        }
                    
        for (let si=0; si < specialArray.length; si++) {
            let s = specialArray[si]
            
                for (let wi=0; wi < weaponArray.length; wi++) {
                    let w = weaponArray[wi]
                    
                        healthPickup(s, w, si, wi)
                }            
        }
        
        for (let bi=0; bi < bossArray.length; bi++) {
            let b = bossArray[bi]
            
                for (let wi=0; wi < weaponArray.length; wi++) {
                    let w = weaponArray[wi]
                    
                        bossHit(b, w, bi, wi)
                }            
        }
        
        for (let si=0; si < shieldArray.length; si++) {
            let s = shieldArray[si]
            
                for (let wi=0; wi < weaponArray.length; wi++) {
                    let w = weaponArray[wi]
                    
                        shieldPickup(s, w, si, wi)
            }            
        }
    }        
}




                        // console.log('Enemy - ' + Math.floor(e.x) + ' ' + e.y + ' ' + e.h + ' ' + e.w)
                        // console.log('Weapon - ' + m.x + ' ' + m.y + ' ' + m.h + ' ' + m.w)



function weaponHit(e, m, ei, mi) {

    if(m.x <= (e.x + e.w) && (m.x + m.w) >= e.x && m.y <= (e.y + e.h) && (m.y + m.h) >= e.y) {
        enemyArray.splice(ei,1)
        weaponArray.splice(mi,1)
        new enemyExplosion("./sfx/enemyExplosion.wav")
        score += 100

         for(let d=0; d < 15; d++) {
            let size = Math.floor(Math.random() * 3) + 1
            let dx = (Math.random() - 0.5) * 20;
            let dy = (Math.random() - 0.5) * 20;
            let color = colorArray[Math.floor(Math.random()*colorArray.length)]
            debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
        }
        
        for(let d=0; d < 15; d++) {
            let size = Math.floor(Math.random() * 1) + 1
            let dx = (Math.random() - 0.5) * 30;
            let dy = (Math.random() - 0.5) * 30;
            let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
            debrisArray.push(new enemyDestroyed(e.x, e.y , size, dx, dy, color))
        }
    }
}

function removeFire() {
    for (let i=0; i < weaponArray.length; i++) {
        if(Math.floor(weaponArray[i].y) <= -50) {
            weaponArray.splice(i,1)
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
    this.sound.volume = 0.5
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