// TODO: choose between document and window.
import Game from "./src/Game.js"
import MainMenu from "./src/MainMenu.js"


document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');
    
    const main_menu = new MainMenu();
    const game = new Game(context);
    const lastTime = 0;
    main_menu.start()
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        context.clearRect(0,0, canvas.width, canvas.hight);
        game.draw();
        game.update(deltaTime);
        requestAnimationFrame(animate)
    };

    animate(0);
});
