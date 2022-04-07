import values from '../../prefab/constants.js';

const initializer = {

    Extends: Phaser.Scene,
    initialize: function gameOver() {
        Phaser.Scene.call(this, { key: 'gameOver', active: false });
    },
    create: function() {

        this.introAudio = this.sound.add('introAudio', {
            volume: 0.4,
            loop: true
        })

        this.introAudio.play()
        var loadingText = this.make.text({
            x: values.levelScreen.x / 2,
            y: values.levelScreen.y / 2,
            text: 'Game Over',
            style: {
                font: '30px monospace',
                fill: '0xFF0000'
            }
        });

        loadingText.setOrigin(0.5, 0.5)

        setTimeout(() => {
            location.reload();
        }, 1000)

    }
}

var gameOver = new Phaser.Class(initializer);
export default gameOver;