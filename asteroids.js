function Asteroid(w, h, color, x, y, type, speed, dx, dy, radius) {
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
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.angle = 0;

    
    this.draw = function() {
        if (type == "image") {
        ctx.save();
        // ctx.translate(0, 0);        
        // ctx.rotate(this.angle);
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.w, this.h);
        // ctx.restore();         
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
        this.update = function() {
            this.y += speed
            this.draw();
            
        // if (this.x >= innerWidth || this.x <= 0) {
        //     this.dx = -this.dx;
        //     this.x = -this.x;
        // }
        
        if (this.y > innerHeight + 200) {
            this.y = -300
            this.x = Math.random() * (innerWidth - raduis * 2) + raduis;
            this.speed = Math.floor(Math.random() * 5) + 3
        }
        
        this.x += this.dx
        this.y += this.dy
            
        this.angle += 1 * Math.PI / 180; 
        
        
        // Asteroid weapon hit detection.
            for (let ei=0; ei < asteroidArray.length; ei++) {
                let e = asteroidArray[ei]
                
                    for (let wi=0; wi < weaponArray.length; wi++) {
                        let w = weaponArray[wi]
                        
                            asteroidHit(e, w, ei, wi)
                            removeFire()
                    }
            }
            
        // Collision detection between asteroids.
            for (let ei=0; ei < asteroidArray.length; ei++) {
                let e = asteroidArray[ei]
                
                    for (let wi=0; wi < asteroidArray.length; wi++) {
                        let w = asteroidArray[wi]
                        
                            // asteroidCollide(e, w, ei, wi)
                    }
            }
    }
}

for (let i=0; i < 4; i++) {
    var raduis = 35
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = -300
    let speed = Math.floor(Math.random() * 5) + 1
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    
    asteroidArray.push(new Asteroid(64, 64, "./images/spr_asteroid_s.png", x, y, "image", speed, dx, dy, raduis));
}

for (let i=0; i < 2; i++) {
    var raduis = 35
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = -300
    let speed = Math.floor(Math.random() * 5) + 1
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;

    asteroidArray.push(new Asteroid(128, 128, "./images/spr_asteroid_m.png", x, y, "image", speed, dx, dy, raduis));
}

for (let i=0; i < 2; i++) {
    var raduis = 35
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = -300
    let speed = Math.floor(Math.random() * 3) + 1
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    
    asteroidArray.push(new Asteroid(256, 256, "./images/spr_asteroid_l.png", x, y, "image", speed, dx, dy, raduis));
    
}

function asteroidHit(e, m, ei, mi) {

    if(m.x <= (e.x + e.w) && (m.x + m.w) >= e.x && m.y <= (e.y + e.h) && (m.y + m.h) >= e.y) {

        console.log('hit')
        asteroidArray.splice(ei,1)
        weaponArray.splice(mi,1)
        new enemyExplosion("./sfx/enemyExplosion.wav")
        score += 50
        
        if (e.h == 128) {
            let x = e.x + 64
            let y = e.y + 64
        
        for ( let i=0; i<3; i++) {
            var raduis = 35
            // let x = e.x + 128
            // let y = e.y + 128
            let speed = Math.floor(Math.random() * 4) + 1
            let dx = (Math.random() - 0.5) * 10;
            let dy = (Math.random() - 0.5) * 10;
            
            asteroidArray.push(new Asteroid(64, 64, "./images/spr_asteroid_s.png", x - 32, y - 32, "image", speed, dx, dy, raduis));
            }
            
            for(let d=0; d < 5; d++) {
                let size = Math.floor(Math.random() * 2) + 3
                let dx = (Math.random() - 0.5) * 10;
                let dy = (Math.random() - 0.5) * 10;
                let color = colorArray[Math.floor(Math.random()*colorArray.length)]
                debrisArray.push(new enemyDestroyed(x, y, size, dx, dy, color))
            }
            for(let d=0; d < 5; d++) {
                let size = Math.floor(Math.random() * 1) + 1
                let dx = (Math.random() - 0.5) * 10;
                let dy = (Math.random() - 0.5) * 10;
                let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
                debrisArray.push(new enemyDestroyed(x, y , size, dx, dy, color))
            } 
        }
        
        if (e.h == 256) {
                let x = e.x + 128
                let y = e.y + 128
            
            for ( let i=0; i<6; i++) {
                var raduis = 35
                // let x = e.x + 128
                // let y = e.y + 128
                let speed = Math.floor(Math.random() * 4) + 1
                let dx = (Math.random() - 0.5) * 10;
                let dy = (Math.random() - 0.5) * 10;
                
                asteroidArray.push(new Asteroid(64, 64, "./images/spr_asteroid_s.png", x - 64, y - 64, "image", speed, dx, dy, raduis));
                }
                
                for(let d=0; d < 5; d++) {
                    let size = Math.floor(Math.random() * 2) + 3
                    let dx = (Math.random() - 0.5) * 10;
                    let dy = (Math.random() - 0.5) * 10;
                    let color = colorArray[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(x, y, size, dx, dy, color))
                }
                for(let d=0; d < 5; d++) {
                    let size = Math.floor(Math.random() * 1) + 1
                    let dx = (Math.random() - 0.5) * 10;
                    let dy = (Math.random() - 0.5) * 10;
                    let color = colorArray2[Math.floor(Math.random()*colorArray.length)]
                    debrisArray.push(new enemyDestroyed(x, y , size, dx, dy, color))
                }  
            
        } else {

             for(let d=0; d < 5; d++) {
                let size = Math.floor(Math.random() * 3) + 3
                let dx = (Math.random() - 0.5) * 10;
                let dy = (Math.random() - 0.5) * 10;
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
}

function asteroidCollide(e, m, ei, mi) {

    if(m.x <= (e.x + e.w) && (m.x + m.w) >= e.x && m.y <= (e.y + e.h) && (m.y + m.h) >= e.y) {
        
        m.x = -m.x
        e.x = -e.x
        console.log('asteroid ' + ei + ' and asteroid ' + mi + ' collided' )

        }
    }
