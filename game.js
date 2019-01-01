let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
let ctx = canvas.getContext('2d');

let weaponArray = [];
let enemyWeaponArray = [];
let starsArray = [];
let shipArray = [];
let enemyArray = [];
let debrisArray = [];
let specialArray = [];

let playerHealth = 100
let score = 0
let music
let maxRadius = 40;
let minRadius = 10;

let mouse = {
    x: undefined,
    y: undefined
}

let colorArray = [
    '#242424',
    '#363537',
    '#3D3D3D',
    '#595959',
]

let colorArray2 = [
    '#A21212',
    '#DA3330',
    '#FF4E41',
    '#FFE046',
    '#F9C73F'
]

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight
        );
        
    for (let i=0; i < enemyArray.length; i++) {
        enemyArray[i].update()
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
        for (let i=0; i < enemyWeaponArray.length; i++) {
        enemyWeaponArray[i].update()
    }
        for (let i=0; i < debrisArray.length; i++) {
        debrisArray[i].update()
    }
        for (let i=0; i < specialArray.length; i++) {
        specialArray[i].update()
    }

    scoreDisplay()
    healthDisplay()
    
    if(playerHealth <= 0) {
       loseDisplay()
       playerHealth = 0
    }
    
}

function scoreDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Score: ' + score, innerWidth - 150, 30);    
}

function healthDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Health: ' + playerHealth, innerWidth - 150, 60);    
}

function loseDisplay() {
    // console.log('game over')
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Game Over!', innerWidth / 2 - 100, innerHeight / 2); 
}

    music = document.createElement("audio");
    music.src = './sfx/theme1.mp3'
    // sound = document.getElementById("audio");
    music.setAttribute("preload", "auto");
    music.setAttribute("controls", "none");
    music.style.display = "none";
    music.loop = true
    music.volume = 0.2
    document.body.appendChild(music);
    // music.play()

// console.log(music)

animate()
