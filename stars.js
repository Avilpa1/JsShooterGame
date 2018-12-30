starsArray = [];

function Stars(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
    
    this.draw = function() {
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.radius, this.radius);
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = 'white';
        // ctx.stroke();
        ctx.fillStyle = 'white'
        ctx.fill()
    }
    
    this.update = function() {

        this.y += 1
        this.draw();
        resetStars()
    }
}

for (let i=0; i < 150; i++) {
    var radius = 1
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;

    starsArray.push(new Stars(x, y , radius))
}

function Stars2(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
    
    this.draw = function() {
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.radius, this.radius);
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = 'white';
        // ctx.stroke();
        ctx.fillStyle = 'white'
        ctx.fill()
    }
    
    this.update = function() {

        this.y += 3
        this.draw();
        resetStars()
    }
}

for (let i=0; i < 25; i++) {
    var radius = 1
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;

    starsArray.push(new Stars2(x, y , radius))
}

function Stars3(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
    
    this.draw = function() {
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.radius, this.radius);
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = 'white';
        // ctx.stroke();
        ctx.fillStyle = 'white'
        ctx.fill()
    }
    
    this.update = function() {

        this.y += 4
        this.draw();
        resetStars()
    }
}

for (let i=0; i < 25; i++) {
    var radius = 1
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;

    starsArray.push(new Stars3(x, y , radius))
}


function Stars4(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
    
    this.draw = function() {
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.radius, this.radius);
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = 'white';
        // ctx.stroke();
        ctx.fillStyle = 'white'
        ctx.fill()
    }
    
    this.update = function() {

        this.y += 5
        this.draw();
        resetStars()
    }
}

for (let i=0; i < 25; i++) {
    var radius = 1
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;

    starsArray.push(new Stars4(x, y , radius))
}


function resetStars() {
        for (let i=0; i < starsArray.length; i++) {
            if(starsArray[i].y > innerHeight) {
                starsArray[i].y = 0
            }
        }
}