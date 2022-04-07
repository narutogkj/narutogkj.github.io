import values from '../../prefab/constants.js';
import emitter from '../../prefab/EventsCenter.js';
const initializer = {

    Extends: Phaser.Scene,
    initialize: function levelComplete() {
        Phaser.Scene.call(this, { key: 'levelComplete', active: false });
    },
    create: function() {

        this.introAudio = this.sound.add('introAudio', {
            volume: 0.4,
            loop: true
        })

        this.introAudio.play()
        var loadingText = this.make.text({
            x: values.levelScreen.x / 2,
            y: values.levelScreen.y / 2 - 100,
            text: 'Level Complete',
            style: {
                font: '30px monospace',
                fill: '0xFF0000'
            }
        });

        loadingText.setOrigin(0.5, 0.5)
        this.add.sprite(values.levelScreen.x / 2, values.levelScreen.y / 2, "playButton").setOrigin(0.5, 0.5).setScale(0.7, 0.7).setInteractive()
            .on('pointerover', function() {
                this.introAudio.stop();
                values.timmer = 20.00
                this.scene.remove(`level${values.currentLevel}`)
                this.scene.scene.events.shutdown()
                this.scene.scene.events.destroy()

                values.currentLevel++;
                if (values.currentLevel == 4) {
                    this.scene.start(`gameComplete`)
                        .stop('levelComplete')
                        .start('UIScene')
                } else {
                    this.scene.start(`level${values.currentLevel}`)
                        .stop('levelComplete')
                        .start('UIScene')
                }

            }, this)

        this.add.sprite(values.levelScreen.x / 2, values.levelScreen.y / 2 + 80, "exitButton").setOrigin(0.5, 0.5).setInteractive()

    }



}

var levelComplete = new Phaser.Class(initializer);
export default levelComplete;