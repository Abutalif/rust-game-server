export default class Warrior {
    constructor(game, texture) {
        this.game = game;
        this.animation = document.getElementById("warrior_"+texture);
        this.lives = 1;
        
        this.x = 0;
        this.y = 0;
        this.width = 180;
        this.height = 240;
        this.vx = 0;
        this.vy = 0;
        this.moveSpeed = 3;
        
        this.action = 0;
        this.direction = 2;
        this.frameSize = 128;
        this.xOffset = 0;
        this.yOffset = 0;
        this.spriteStartY = 1364;
        this.frameX = 0;
        this.frameY = 0;
        this.elapsedTime = 0;
    };

    // direction:
    // 0 - go up
    // 1 - go left
    // 2 - go down
    // 3 - go right
    // action:
    // 0 - move
    // 1 - attack

    update(deltaTime){
        this.elapsedTime += deltaTime;
        this.frameY = this.direction + this.action * 4;
        switch(this.action) {
            case 0:
                if (this.elapsedTime > 1000/8 && (this.vx !==0 || this.vy !==0)) {
                    this.frameX += 1;
                    this.elapsedTime = 0;
                    if (this.frameX > 7) {
                        this.frameX = 0;
                    }
                }
                break;
            case 1:
                if (this.elapsedTime > 1000/6) {
                    this.frameX += 1;
                    this.elapsedTime = 0;
                    if (this.frameX > 5) {
                        this.frameX = 0;
                        this.action = 0;
                    }
                }
                break;
        }
    };

    draw(context) {
        context.strokeStyle = 'red';
        context.lineWidth = 3;
        context.strokeRect(this.screenX, this.screenY, this.width, this.height);

        let frameStartX = this.frameX*this.frameSize + this.frameSize/4;
        let frameStartY = this.frameY*this.frameSize + this.spriteStartY + this.frameSize/4 - 10;
        let frameWidth = this.frameSize/2;
        let frameHight = this.frameSize/2;

        switch (this.direction) {
            case 0:
                if (this.action === 1) {
                    frameStartY -= 10;
                }
                break;
            case 1:
                frameStartX -= 10;
                if (this.action === 1) {
                    frameStartX -= 10;
                    frameWidth += 10;
                }
                break;
            case 3:
                frameStartX += 10;
                if (this.action === 1) {
                    frameWidth += 10;
                }
                break;
        }

        context.drawImage(
            this.animation, 
            frameStartX,
            frameStartY,
            frameWidth,
            frameHight,
            this.screenX,
            this.screenY,
            this.width,
            this.height
            )
    }
}