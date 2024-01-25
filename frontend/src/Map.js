export default class Map {
    constructor(game) {
        this.width = game.width;
        this.height = game.height;
        this.texture = document.getElementById("background");
    };

    update() {
    };

    draw(context) {
        const pattern = context.createPattern(this.texture, 'repeat')
        context.fillStyle = pattern;
        context.fillRect(0, 0, this.width, this.height);
    }
}