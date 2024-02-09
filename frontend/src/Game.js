import Player from "./Entities/Player.js"
import Map from "./Map.js"
import InputHandle from "./InputHandle.js"
import Camera from "./Camera.js"


export default class Game {
    constructor(screenWidth, screenHeight) {
        this.texture_id = 1; // this should assign randomly withour repetition 1-4 for player and enemies;
        this.width = 96*25;
        this.height = 96*25;
        this.keys = [];
        this.inputHandle = new InputHandle(this);
        this.player = new Player(this, this.texture_id);
        this.map = new Map();
        this.camera = new Camera(this.map, screenWidth, screenHeight);
        this.camera.follow(this.player)
        // this.Connection = new WebSocket("/connect")
    };
    update(deltaTime) {
        this.camera.update();
        this.player.update(deltaTime);
    };
    draw(context) {
        this.map.draw(context, this.camera);
        this.player.draw(context);
    };
};