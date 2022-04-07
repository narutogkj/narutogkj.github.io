import values from '../../prefab/constants.js';

const initializer = {

    Extends: Phaser.Scene,
    initialize: function menu() {
        Phaser.Scene.call(this, { key: 'menu', active: false });
    },
    create: function() {

        this.introAudio = this.sound.add('introAudio', {
            volume: 0.4,
            loop: true
        })

        this.introAudio.play()



        this.add.tileSprite(0, 0, 3 * values.levelScreen.x, 3 * values.levelScreen.y, 'background').setOrigin(0, 0)

        this.add.sprite(values.levelScreen.x / 2, values.levelScreen.y / 2, "playButton").setOrigin(0.5, 0.5).setScale(0.7, 0.7).setInteractive()
            .on('pointerover', function() {
                this.introAudio.stop();

                this.scene.start('UIScene')
                this.scene.start('level1')

            }, this)

        this.add.sprite(values.levelScreen.x / 2, values.levelScreen.y / 2 + 80, "hangerButton").setOrigin(0.5, 0.5).setScale(0.7, 0.7).setInteractive()
        this.add.sprite(values.levelScreen.x / 2, values.levelScreen.y / 2 + 140, "exitButton").setOrigin(0.5, 0.5).setScale(0.7, 0.7).setInteractive()



    }
}

var menu = new Phaser.Class(initializer);
export default menu;