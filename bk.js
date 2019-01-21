function Background(w, h, img, x, y) {
    this.image = new Image();
    this.image.src = img;

    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;

    this.update = function() {
        ctx.drawImage(this.image, this.x, this.y += .4, this.w, this.h)
        
            if(this.y >= innerHeight){
                this.y = -innerHeight;
            }
    }       
}

for (let i=0; i < 1; i++) {

    let x = 0
    let y = 0
    
    bkArray.push(new Background(innerWidth, innerHeight, "./images/spr_stars02.png", x, y, "image"));
    bkArray.push(new Background(innerWidth, innerHeight, "./images/spr_stars02.png", -x, -innerHeight, "image"));
    
}