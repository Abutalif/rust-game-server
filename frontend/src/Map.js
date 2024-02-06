export default class Map {
    constructor() {
        this.tilesize = 96;
        this.rows = 25;
        this.columns = 25;
        this.width = this.columns * this.tilesize;
        this.height = this.rows * this.tilesize;
        this.grass = document.getElementById("grass_tiles");
        this.stones = document.getElementById("stone_tiles");
        this.layer1 = [[]]
        this.initLayers()
        console.log(this.layer1)
    };

    initLayers() {
        for (let i = 0; i<this.rows; i++) {
            this.layer1[i] = [];
            for (let j = 0; j<this.columns; j++) {
                let tileID = 1;

                if (i === 0 || i === this.rows - 1 || j === 0 || j === this.columns - 1) {
                    tileID = 2;
                }

                this.layer1[i][j] = tileID;
            }
        }
    };
    
    getTile(column, row) {
        return this.layer1[row][column]
    }
    draw(context, camera) {
        var startCol = Math.floor(camera.x/ this.tilesize);
        var endCol = Math.min(startCol + (camera.width / this.tilesize)+1, this.columns - 1);
        var startRow = Math.floor(camera.y / this.tilesize);
        var endRow = Math.min(startRow + (camera.height / this.tilesize)+1, this.rows -1);
        var offsetX = -camera.x + startCol * this.tilesize;
        var offsetY = -camera.y + startRow * this.tilesize;
        for (var c = startCol; c <= endCol; c++) {
            for (var r = startRow; r <= endRow; r++) {
                var x = (c - startCol) * this.tilesize + offsetX;
                var y = (r - startRow) * this.tilesize + offsetY;
                var tile = this.getTile(c, r);
                var img;
                switch (tile) {
                    case 1:
                        img = this.grass;
                        break
                    case 2:
                        img = this.stones;
                        break
                }
                // if (tile !== 0) { // 0 => empty tile
                // }
                context.drawImage(
                    img,//this.tileAtlas, // image
                    0, //(tile - 1) * this.tilesize, // source x
                    0, // source y
                    this.tilesize, // source width
                    this.tilesize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    this.tilesize, // target width
                    this.tilesize // target height
                );
            }
        }
    };
}