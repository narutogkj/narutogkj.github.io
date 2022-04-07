import { inputs } from '../../prefab/input.js';
import values from '../../prefab/constants.js';
import emitter from '../../prefab/EventsCenter.js';
import { score } from '../../prefab/mobxCenter.js';

export default function create() {

    if (progressBar) {
        progressBar.clear()
    }
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.4);
    progressBox.fillRoundedRect(10, 10, 210, 40, 5);
    progressBar.fillStyle(0xFF0000, 0.8);
    progressBar.fillRoundedRect(15, 15, 20 * values.playerHealth, 30, 5);

    this.levelText = this.make.text({
        x: 15,
        y: 60,
        text: '',
        style: {
            font: '22px monospace',
            fill: '0xFF0000',
        }
    });

    this.timeText = this.add.text(values.levelScreen.x / 2 - 20, 60, "", { font: "24px monospace", fill: '#E43AA4', stroke: '#000', strokeThickness: 4 }); //Elapsed Time Text


    var inputLeftBox = this.add.graphics();
    inputLeftBox.fillStyle(0x222222, 0.3);
    inputLeftBox.fillRoundedRect(values.leftArrow.x - 25, values.upArrow.y - 25, values.levelScreen.x - 10, 130, 5)




    this.upArrow = this.add.sprite(values.upArrow.x, values.upArrow.y, "upArrow").setScale(0.1, 0.1).setInteractive()
    this.leftArrow = this.add.sprite(values.leftArrow.x, values.leftArrow.y, "leftArrow").setScale(0.1, 0.1).setInteractive()
    this.rightArrow = this.add.sprite(values.rightArrow.x, values.rightArrow.y, "rightArrow").setScale(0.1, 0.1).setInteractive()
    this.downArrow = this.add.sprite(values.downArrow.x, values.downArrow.y, "downArrow").setScale(0.1, 0.1).setInteractive()
    this.arrowsS = this.add.sprite(values.arrowsS.x, values.arrowsS.y, "arrowsS").setScale(0.5, 0.5).setInteractive()
    this.add.sprite(values.centerArrows.x, values.centerArrows.y, "centerArrow").setScale(0.1, 0.1).setInteractive()
    this.arrowsT = this.add.sprite(values.arrowsT.x, values.arrowsT.y, "arrowsT").setScale(0.5, 0.5).setInteractive()
    this.arrowsC = this.add.sprite(values.arrowsC.x, values.arrowsC.y, "arrowsC").setScale(0.5, 0.5).setInteractive()
    this.arrowsX = this.add.sprite(values.arrowsX.x, values.arrowsX.y, "arrowsX").setScale(0.5, 0.5).setInteractive()


    this.backgroundMusic = this.sound.add('backgroundMusic', {
        volume: 0.3,
        loop: true
    })

    this.tank = this.sound.add('tank', {
        volume: 0.6,
        loop: true
    })

    this.fireSound = this.sound.add('fire', {
        volume: 0.6,
        loop: false
    })


    this.backgroundMusic.play()
    this.tank.play()


    emitter.on('powerDown', () => {
        values.playerHealth -= 1;
        progressBar.clear();
        progressBar.fillStyle(0xFF0000, 0.8);
        progressBar.fillRoundedRect(15, 15, 20 * values.playerHealth, 30, 5);
    })

    var enemyBox = this.add.graphics();
    enemyBox.fillStyle(0x222222, 0.4);
    enemyBox.fillRoundedRect(values.levelScreen.x - 60, 8, 60, 55, 5)
    this.add.image(values.levelScreen.x - 30, 35, 'enemy1').setScale(0.3, 0.3)
    this.enemyCount = this.make.text({
        x: values.levelScreen.x - 50,
        y: 60,
        text: '',
        style: {
            font: '25px monospace',
            fill: '0xFF0000'
        }
    });




    mobx.autorun(() => {
        this.enemyCount.setText(`${score.enemyCount}/${values.enemyCount}`)
        this.levelText.setText(`Level ${score.currentLevel}`)
        if (score.enemyCount <= 0) {
            score.enemyCount = Infinity
            this.scene.stop(`level${values.currentLevel}`).stop('UIScene').start('levelComplete')
        }
    })
    inputs(this);
}