import Warrior from "./Warrior.js";
export default class Player extends Warrior {
    constructor(game, texture_id) {
        super(game, texture_id)
    };
    update(deltaTime) {
        super.update(deltaTime)
        if (this.action === 0) {
            if (this.game.keys.includes('MoveUp')) {this.vy = -this.moveSpeed; this.direction = 0}
            else if (this.game.keys.includes('MoveDown')) {this.vy = this.moveSpeed; this.direction = 2;}
            else this.vy = 0;
    
            if (this.game.keys.includes('MoveLeft')) {this.vx = -this.moveSpeed; this.direction = 1;}
            else if (this.game.keys.includes('MoveRight')) {this.vx = this.moveSpeed; this.direction = 3;}
            else this.vx = 0;
        } else {
            this.vx = 0;
            this.vy = 0;
        }
        
        if (this.game.keys.includes('Attack')) {this.action = 1; this.frameX = 0;}
        

        this.x += this.vx;
        this.y += this.vy;

        if (this.y > this.game.height - this.height) this.y = this.game.height - this.height;
        else if (this.y < 0 ) this.y = 0;
        
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        else if (this.x < 0) this.x = 0;
    }

    draw(context) {
        context.strokeStyle = 'red';
        context.lineWidth = 3;
        context.strokeRect(this.screenX, this.screenY, this.width, this.height);

        // center the image
        // X: this.screenX-this.width/2
        // Y: this.screenY - this.height/2

        let frameStartX = this.frameX*this.frameSize + this.frameSize/4;
        let frameStartY = this.frameY*this.frameSize + this.spriteStartY + this.frameSize/4 - 10;
        let frameWidth = this.frameSize/2;
        let frameHight = this.frameSize/2;

        let drawX = this.screenX;
        let drawY = this.screenY;
        let drawWidth = this.width;
        let drawHeight = this.height;

        switch (this.direction) {
            case 0:
                if (this.action === 1) {
                    frameStartY -= 10;
                    drawY -= 30;
                }
                break;
            case 1:
                frameStartX -= 10;
                if (this.action === 1) {
                    frameStartX -= 10;
                    frameWidth += 10;
                    drawX -=20;
                    drawWidth +=20;
                }
                break;
            case 3:
                frameStartX += 10;
                if (this.action === 1) {
                    frameWidth += 10;
                    drawWidth += 20;
                }
                break;
        }

        context.drawImage(
            this.animation, 
            frameStartX,
            frameStartY,
            frameWidth,
            frameHight,
            drawX,
            drawY,
            drawWidth,
            drawHeight
            )
    }
};