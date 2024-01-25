// import MainMenu from "./MainMenu.js"
import Player from "./Player.js"
import Map from "./Map.js"
import InputHandle from "./InputHandle.js"


export default class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.map = new Map(this);
        this.inputHandle = new InputHandle(this);
        this.player = new Player(this);
        this.keys = [];
        // this.Connection = new WebSocket("/connect") // TODO: maybe there will be different address
        // this.Enemies = []
        // this.main_menu = new MainMenu;
        // 
    };
    update(deltaTime) {
        this.map.update();
        this.player.update();
    };
    draw(context) {
        this.map.draw(context);
        this.player.draw(context);
    };
};