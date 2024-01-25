import Game from "./src/Game.js"

window.addEventListener('load', function () {
    const canvas = this.document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
    
    animate(0);

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        context.clearRect(0,0, canvas.width, canvas.height); // might delete only updated elements.
        game.draw(context);
        game.update(deltaTime);
        window.requestAnimationFrame(animate)
    };
});
