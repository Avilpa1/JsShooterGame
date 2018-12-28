let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
let ctx = canvas.getContext('2d');

let weaponArray = [];
let starsArray = [];
let shipArray = [];
let circleArray = [];

let maxRadius = 40;
let minRadius = 10;
let mouse = {
    x: undefined,
    y: undefined
}


window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    
})


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init();
})




function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius
    // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


    this.draw = function() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.rect(this.x, this.y, 30, 30)
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.fillStyle = 'black'
        ctx.fill()
    }
    
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx
        this.y += this.dy
        
        // if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        //     if (this.radius < maxRadius)
        //     this.radius += 1;
        // } else if (this.radius > this.minRadius) {
        //     this.radius -= 1;
        // }
        
        this.draw();
        
    }
}

for (let i=0; i < 50; i++) {
    var raduis = 35//Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = Math.random() * (innerHeight / 5 - raduis * 2) + raduis;;
    let dx = (Math.random() - 0.5) * 1;
    let dy = (Math.random() - 0.5) * 1;

    
        circleArray.push(new Circle(x, y, dx, dy, raduis))
}

function init() {
    circleArray = []
    
    for (let i=0; i < 150; i++) {
    var raduis = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = Math.random() * (innerHeight - raduis * 2) + raduis;;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;

    circleArray.push(new Circle(x, y, dx, dy, raduis))
    }
}




function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight
        );
        
    for (let i=0; i < circleArray.length; i++) {
        circleArray[i].update()
    }   
    for (let i=0; i < weaponArray.length; i++) {
        weaponArray[i].update()
    }
        for (let i=0; i < starsArray.length; i++) {
        starsArray[i].update()
    }
        for (let i=0; i < shipArray.length; i++) {
        shipArray[i].update()
    }

   
    
}

    // function del() {
    //     for (let i=0; i < circleArray.length; i++) {

    //         if (Math.floor(circleArray[i].x == mouse.x) {
    //             // circleArray.splice([i],1)

    //         }
    //     }
    // }
    
    // function del() {
    //     let aX
    //     let aY
    //     let wX
    //     let wY

    //     for (let i=0; i < circleArray.length; i++) {
    //         aX = Math.floor(circleArray[i].x)
    //         aY = Math.floor(circleArray[i].y)
    //         }
        // for (let j=0; j < circleArray.length; j++) {
        //     wX = Math.floor(weaponArray[j].x)
        //     wY = Math.floor(weaponArray[j].y)
        
        //     }
        //     console.log(aX)
        //     console.log(aY)
        //     console.log(wX)
        //     console.log(wY)
        // }
    
    



    
                // if(Math.floor(circleArray[i].x) == mouse.x) {
            
            // if(aX && aY == mouse.x && mouse.y) {
            //     circleArray.splice([i],1)

animate()

