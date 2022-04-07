const initializer = {

    Extends: Phaser.Scene,
    initialize: function preloadScene() {
        Phaser.Scene.call(this, { key: 'preloadScene', active: false });
    },
    create: function() {
        this.scene.start('menu')
    },
    preload: function preload() {
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;


        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.2);
        progressBox.fillRoundedRect(20, height - 140, 320, 30, 10);










        var loadingPercentageText = this.make.text({
            x: width / 2,
            y: height - 127,
            text: '0%',
            style: {
                font: '20px monospace',
                fill: '0xFF0000'
            }
        });
        loadingPercentageText.setOrigin(0.5, 0.5)




        var loadingText = this.make.text({
            x: width / 2,
            y: height - 80,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '0xFF0000'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/level3.json');




        this.load.image("upArrow", "../../assets/upArrow.png");
        this.load.image("leftArrow", "../../assets/leftArrow.png");
        this.load.image("rightArrow", "../../assets/rightArrow.png");
        this.load.image("downArrow", "../../assets/downArrow.png");
        this.load.image("arrows2", "../../assets/arrows2.jpg");
        this.load.image('player', '../../assets/player.png');
        this.load.image('bg', '../../assets/bg.jpg');
        this.load.image("centerArrow", "../../assets/centerArrow.jpg");
        this.load.image("arrowsC", "../../assets/arrowsC.png");
        this.load.image("arrowsX", "../../assets/arrowsX.png");
        this.load.image("arrowsS", "../../assets/arrowsS.png");
        this.load.image("arrowsT", "../../assets/arrowsT.png");

        this.load.audio('backgroundMusic', '../../assets/backgroundMusic.mp3')
        this.load.audio('introAudio', '../../assets/introMusic.mp3')
        this.load.audio('tank', '../../assets/tank.mp3')
        this.load.audio('blast', '../../assets/blast.mp3')

        this.load.audio('fire', '../../assets/fire.mp3')
        this.load.image("bullet", "../../assets/bullet.png");
        this.load.image("bomb", "../../assets/bomb.png");

        this.load.image("rock1", "../../assets/rock1.png");
        this.load.image("enemy1", "../../assets/enemy1.png");

        this.load.image("background", "../../assets/background.png");
        this.load.image("playButton", "../../assets/playButton.png")
        this.load.image("hangerButton", "../../assets/hangerButton.png")
        this.load.image("exitButton", "../../assets/exitButton.png")





        this.load.image('tiles', '../../assets/platformPack_tilesheet.png')
        this.load.tilemapTiledJSON('tilemap2', '../../assets/level2.json')


        this.load.on('progress', function(value) {
            loadingPercentageText.setText(Math.ceil(value * 100) + "%")
            progressBar.clear();

            progressBar.fillStyle(0xFFFF00, 1);
            progressBar.fillRoundedRect(25, height - 135, 300 * value, 21, 7);

        });

        this.load.on('complete', function() {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });
    }

}

var preloadScene = new Phaser.Class(initializer);
export default preloadScene;