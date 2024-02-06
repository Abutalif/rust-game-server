export default class Player{
    constructor(game) {
        this.game = game;
        this.width = 90;
        this.height = 120;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.moveSpeed = 5;
    };
    update() {
        if (this.game.keys.includes('MoveUp')) this.vy = -this.moveSpeed
        else if (this.game.keys.includes('MoveDown')) this.vy = this.moveSpeed
        else this.vy = 0;

        if (this.game.keys.includes('MoveLeft')) this.vx = -this.moveSpeed
        else if (this.game.keys.includes('MoveRight')) this.vx = this.moveSpeed
        else this.vx = 0;

        this.x += this.vx;
        this.y += this.vy;

        if (this.y > this.game.height - this.height) this.y = this.game.height - this.height;
        else if (this.y < 0 ) this.y = 0;
        
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        else if (this.x < 0) this.x = 0; 
    }
    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.screenX, this.screenY, this.width, this.height);
    }
};