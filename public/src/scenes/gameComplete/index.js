import values from '../../prefab/constants.js';
const initializer = {

    Extends: Phaser.Scene,
    initialize: function boot() {
        Phaser.Scene.call(this, { key: 'gameComplete', active: false });
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
            text: 'Game Complete',
            style: {
                font: '30px monospace',
                fill: '0xFF0000'
            }
        });

        loadingText.setOrigin(0.5, 0.5)
        this.add.sprite(values.levelScreen.x / 2, values.levelScreen.y / 2 + 80, "exitButton").setOrigin(0.5, 0.5).setInteractive()
            .on('pointerover', function() {
                location.reload()
            })

    }



}

var gameComplete = new Phaser.Class(initializer);
export default gameComplete;