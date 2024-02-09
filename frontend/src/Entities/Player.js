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
};