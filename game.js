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
let shieldArray = [];
let shieldArrayDisplay = [];
let missileArray = [];
let bossArray = [];
let asteroidArray = [];
let bkArray = [];

let playerHealth = 100;
let bossHealth = 5000;
let shieldPower = 100;
let missileQty = 5;
let score = 0;
let maxRadius = 40;
let minRadius = 10;

let mouse = {
    x: undefined,
    y: undefined
};

let isRunning = true;
let musicPlaying = true;
let gameStarted = false;

let colorArray = [
    '#242424',
    '#363537',
    '#3D3D3D',
    '#595959',
];

let colorArray2 = [
    '#A21212',
    '#DA3330',
    '#FF4E41',
    '#FFE046',
    '#F9C73F'
];

// Options
const outputEl = document.getElementById('fps-output');
const decimalPlaces = 2;
const updateEachSecond = 1;

// Cache values
const decimalPlacesRatio = Math.pow(10, decimalPlaces);
let   timeMeasurements = [];

// Final output
let fps = 0;

const tick = function() {
  timeMeasurements.push(performance.now());
  
  const msPassed = timeMeasurements[timeMeasurements.length - 1] - timeMeasurements[0];
  
  if (msPassed >= updateEachSecond * 1000) {
    fps = Math.round(timeMeasurements.length / msPassed * 1000 * decimalPlacesRatio) / decimalPlacesRatio;
    timeMeasurements = [];
  }

//   outputEl.innerText = fps;

//   requestAnimationFrame(() => {
//     tick();
//   });
}


function animate() {
    if (isRunning) {
        requestAnimationFrame(animate);
    }

    ctx.clearRect(0, 0, innerWidth, innerHeight);
        
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
        for (let i=0; i < bossArray.length; i++) {
        bossArray[i].update()
    }
        for (let i=0; i < shieldArray.length; i++) {
        shieldArray[i].update()
    }
        for (let i=0; i < missileArray.length; i++) {
        missileArray[i].update()
    }
        for (let i=0; i < shieldArrayDisplay.length; i++) {
        shieldArrayDisplay[i].update()
    }
        for (let i=0; i < asteroidArray.length; i++) {
        asteroidArray[i].update()
    }
        for (let i=0; i < bkArray.length; i++) {
        bkArray[i].update()
    }
    

    scoreDisplay()
    healthDisplay()
    shieldDisplay()
    missileDisplay()
    tick()
    
    
    if(playerHealth <= 0) {
       loseDisplay()
       playerHealth = 0
    }
    
    if(bossHealth <= 0 && playerHealth > 0) {
       winDisplay()
       playerHealth = 100
    }
    
    if (isRunning == false) {
        pauseDisplay()
    }
}

function scoreDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Score: ' + score, innerWidth - 160, 30);   
    
    ctx.font = "17px Arial";
    ctx.fillText('FPS: ' + fps, 10, 30);  
}

function healthDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Health: ' + playerHealth, innerWidth - 160, 60);  
    // ctx.drawImage("./images/enemy1.png", innerWidth - 160, 60, 30, 30);
}

function shieldDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Shield: ' + shieldPower, innerWidth - 160, 90);    
}

function missileDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Missiles: ' + missileQty, innerWidth - 160, 120);    
}

function loseDisplay() {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Game Over!', innerWidth / 2 - 100, innerHeight / 2); 
    document.getElementById("bodyId").style.cursor = "none";
}

function winDisplay() {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Level Clear', innerWidth / 2 - 100, innerHeight / 2); 
}

function pauseDisplay() {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Game Paused', innerWidth / 2 - 100, innerHeight / 2); 
    // menu()
}

function menu() {
    ctx.fillStyle = 'rgba(40, 40, 40, 0.60)';
    ctx.fillRect(innerWidth/2 / 2, innerHeight/2 / 2, 400, 400);
    // document.getElementById("bodyId").style.cursor = "pointer";
}

function togglePause() {
  isRunning = !isRunning;

  if (isRunning) {
    animate();
    // document.getElementById("bodyId").style.cursor = "none";
  }
}

function toggleMusic() {
    if (running) {
        running = false
        playMusic.stop()
    } else {
        running = true
        playMusic.play()
    }
}

window.addEventListener("keypress",
    function(event) {
        if (event.keyCode == '112') {
            togglePause(); 
            toggleMusic()
        }
});

let running = true

window.addEventListener("keypress",
    function(event) {
        if (event.keyCode == '109') {
            toggleMusic()
        }
});


let playMusic = new music('./sfx/theme1.mp3')  

function music(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.loop = true
    this.sound.volume = 0.2
    document.body.appendChild(this.sound);
    
    this.play = function(){
        this.sound.play();
        playerSound = ''
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function bgChange() {
    let getCanvas = document.getElementById('canvasId')
    let num = Math.floor((Math.random() * 6) + 1)
    let bgURL = "url(./images/bg_space0" + num + ".png)"

    getCanvas.style.backgroundcolor = 'black'
    getCanvas.style.background = bgURL
    getCanvas.style.backgroundRepeat = "no-repeat"
    getCanvas.style.backgroundPosition = "center" 
    getCanvas.style.backgroundSize = "cover"
}

function gameStart() {
    animate()
    tick();
    playMusic.play()
    bgChange()
    console.log('game started')
    gameStarted = true;
    
//         const playPromise = playMusic.play()
// if (playPromise !== undefined) {
//     playPromise.then(_ => {
//       // Automatic playback started!
//       // Show playing UI.
//       // We can now safely pause video...
//       video.pause();
//     })
//     .catch(error => {
//       // Auto-play was prevented
//       // Show paused UI.
//     });
//   }
}


