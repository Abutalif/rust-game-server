export default class Player{
    constructor(game) {
        this.game = game;
        this.width = 150;
        this.height = 200;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.moveSpeed = 10;
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
    }
    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};