export default class InputHandle {
    constructor(game) {
        this.game = game;
        window.addEventListener('keydown' , (e) => {
            if (((e.key === 'ArrowUp') || (e.key === 'W')|| e.key === 'w') && this.game.keys.indexOf('MoveUp') === -1) {
                this.game.keys.push('MoveUp');
            }
            if (((e.key === 'ArrowDown') || (e.key === 'S') || (e.key === 's')) && this.game.keys.indexOf('MoveDown') === -1) {
                this.game.keys.push('MoveDown');
            }
            if (((e.key === 'ArrowLeft') || (e.key === 'A')|| (e.key === 'a')) && this.game.keys.indexOf('MoveLeft') === -1) {
                this.game.keys.push('MoveLeft');
            }
            if (((e.key === 'ArrowRight') || (e.key === 'D')|| (e.key === 'd')) && this.game.keys.indexOf('MoveRight') === -1) {
                this.game.keys.push('MoveRight');
            }
            if (((e.key === 'Space')) && this.game.keys.indexOf('Attack') === -1) {
                this.game.keys.push('Attack');
            }
        })
        // Subject to vulnerability. Websocket can be overloaded with input stream.
        window.addEventListener('keyup', (e) => {
            if (((e.key === 'ArrowUp') || (e.key === 'W')|| e.key === 'w') && this.game.keys.indexOf('MoveUp') > -1) {
                this.game.keys.splice(this.game.keys.indexOf('MoveUp'), 1);
            }
            if (((e.key === 'ArrowDown') || (e.key === 'S') || (e.key === 's')) && this.game.keys.indexOf('MoveDown') > -1) {
                this.game.keys.splice(this.game.keys.indexOf('MoveDown'), 1);
            }
            if (((e.key === 'ArrowLeft') || (e.key === 'A')|| (e.key === 'a')) && this.game.keys.indexOf('MoveLeft') > -1) {
                this.game.keys.splice(this.game.keys.indexOf('MoveLeft'), 1);
            }
            if (((e.key === 'ArrowRight') || (e.key === 'D')|| (e.key === 'd')) && this.game.keys.indexOf('MoveRight') > -1) {
                this.game.keys.splice(this.game.keys.indexOf('MoveRight'), 1);
            }
            if (((e.key === 'Space')) && this.game.keys.indexOf('Attack') === -1) {
                this.game.keys.splice(this.game.keys.indexOf('Attack'), 1);
            }
        });
    };
}