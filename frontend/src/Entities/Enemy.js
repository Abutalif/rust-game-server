import Warrior from "./Warrior.js";

export default class Enemy extends Warrior{
    constructor(game, texture_id) {
        super(game, texture_id)
    };

    // draw(context) {

    // }

    draw(context) {
        context.strokeStyle = 'red';
        context.lineWidth = 3;
        context.strokeRect(this.screenX, this.screenY, this.width, this.height);


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
}