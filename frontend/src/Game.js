import Player from "./Entities/Player.js"
import Map from "./Map.js"
import InputHandle from "./InputHandle.js"
import Camera from "./Camera.js"
import Enemy from "./Entities/Enemy.js";


export default class Game {
    constructor(screenWidth, screenHeight) {
        this.texture_id = 1; // this should assign randomly withour repetition 1-4 for player and enemies;
        this.width = 96*25;
        this.height = 96*25;
        this.keys = [];
        this.inputHandle = new InputHandle(this);
        this.player = new Player(this, this.texture_id);
        this.enemies = this.initEnemies()
        this.map = new Map();
        this.camera = new Camera(this.map, screenWidth, screenHeight);
        this.camera.follow(this.player)
        // this.Connection = new WebSocket("/connect")
    };
    update(deltaTime) {
        this.camera.update();
        this.player.update(deltaTime);
        this.enemies.forEach(enemy => {
            enemy.update(deltaTime);
        })
    };
    draw(context) {
        this.map.draw(context, this.camera);
        this.player.draw(context);
        this.enemies.forEach(enemy => {
            enemy.draw(context);
        })
    };
    initEnemies() {
        const enemy1 = new Enemy(this, this.texture_id);
        enemy1.x = this.width - enemy1.width;
        enemy1.y = 0
        const enemy2 = new Enemy(this, this.texture_id)
        enemy2.x = 0;
        enemy2.y = this.height - enemy2.height;
        const enemy3 = new Enemy(this, this.texture_id)
        enemy3.x = this.width - enemy3.width;
        enemy3.y = this.height - enemy3.height;
        return [enemy1, enemy2, enemy3];
    }
};