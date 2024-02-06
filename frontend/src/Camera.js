export default class Camera {
    constructor(map, width, height) {
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.maxX = map.width - width;
        this.maxY = map.height - height;
    };

    follow(player) {
        player.screenX = 0;
        player.screenY = 0;
        this.following = player;
    };

    update() {
        this.following.screenX = this.width/2;
        this.following.screenY = this.height/2;

        this.x = Math.max(0, Math.min(this.following.x - this.width/2, this.maxX));
        this.y = Math.max(0, Math.min(this.following.y - this.height/2, this.maxY));

        if (this.following.x< this.width/2 || this.following.x> this.maxX) {
            this.following.screenX = this.following.x - this.x;
        }

        if (this.following.y< this.height/2 || this.following.y> this.maxY) {
            this.following.screenY = this.following.y - this.y;
        }
    };
}
