import boot from './scenes/loadingScene/boot.js';
import gameComplete from './scenes/gameComplete/index.js'
import uiScene from './scenes/UI/index.js';
import menu from './scenes/menu/index.js';
import preloadScene from './scenes/loadingScene/preloadScene.js';
import gameOver from './scenes/gameOver/index.js'
import levelComplete from './scenes/levelComplete/index.js'


import level3 from './scenes/level3/index.js'

import level1 from './scenes/level1/index.js';
import level2 from './scenes/level2/index.js';



import values from './prefab/constants.js'

let config = {
    type: Phaser.AUTO,
    width: values.gameSize.x,
    height: values.gameSize.y,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#E0E0E0',
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true
        }
    },
    input: {
        activePointers: 3
    },
    scene: [boot, preloadScene, menu, level1, level2, level3, uiScene, gameOver, levelComplete, gameComplete]
};

let game = new Phaser.Game(config);