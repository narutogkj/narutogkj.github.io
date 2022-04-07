import Player from '../../components/Player.js';
import values from '../../prefab/constants.js';
import Enemy from '../../components/Enemy.js';
import colliders from '../../prefab/colliders.js';
import { score } from '../../prefab/mobxCenter.js';
import emitter from '../../prefab/EventsCenter.js';
import Bullet from '../../components/bullet.js';
export default function create() {
    // 1.  Create References -----------------------------------------------------

    this.add.tileSprite(0, 0, 3 * values.levelScreen.x, 3 * values.levelScreen.y, 'bg')
    this.player = new Player(this, 100, 500, 'player');

    this.bulletGroup = this.add.group()


    this.rocks = this.physics.add.staticGroup()
    this.invisibleRocks = this.physics.add.staticGroup()
    this.enemyGroup = [];
    this.enemyGroup.push(new Enemy(this, 80, 80, 'enemy1'))
    this.enemyGroup.push(new Enemy(this, 240, 300, 'enemy1'))
    this.enemyBulletGroup = this.add.group()


    values.enemyCount = this.enemyGroup.length;

    // 2. Create level map
    this.invisibleRocks.create(80, 100, 'rock1').setVisible(false)
    this.invisibleRocks.create(values.levelScreen.x / 2, 12, 'rock1').setVisible(false)
    this.invisibleRocks.create(values.levelScreen.x - 80, 100, 'rock1').setVisible(false)
    this.invisibleRocks.create(12, values.levelScreen.y / 2, 'rock1').setVisible(false)
    this.invisibleRocks.create(80, values.levelScreen.y - 100, 'rock1').setVisible(false)

    this.invisibleRocks.create(values.levelScreen.x / 2, values.levelScreen.y / 2 - 100, 'rock1').setVisible(false)
    this.invisibleRocks.create(values.levelScreen.x / 2, values.levelScreen.y / 2 + 100, 'rock1').setVisible(false)
    this.invisibleRocks.create(values.levelScreen.x - 12, values.levelScreen.y / 2, 'rock1').setVisible(false)
    this.invisibleRocks.create(values.levelScreen.x - 80, values.levelScreen.y - 100, 'rock1').setVisible(false)
    this.invisibleRocks.create(values.levelScreen.x / 2, values.levelScreen.y - 12, 'rock1').setVisible(false)




    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('level0Tileset', 'rock1');
    const platforms = map.createLayer('Platforms', tileset);


    map.getObjectLayer('Spikes').objects.forEach((spike) => {
        this.rocks.create(spike.x, spike.y, 'rock1');
    });



    this.blast = this.sound.add('blast')

    // 3. Create animations  ---------------------------------------------------------




    // 4.  colliders  --------------------------------------------------------
    colliders(
        this,
        this.player.playerObject,
        this.rocks,
        this.bulletGroup,
        this.enemyGroup,
        this.enemyBulletGroup,
        this.invisibleRocks
    )

    //5. Emitters -----------------------------------------------------


    if (this.player.playerObject.active == true && values.currentLevel == 3) {
        score.enemyCount = values.enemyCount
        score.currentLevel = 1
        emitter.on('enemychangeDirection', (enemy) => {
            if (this.player.playerObject.active == true) {
                enemy.changeDirection()
            }
        })


        emitter.on('fire', () => {
            if (this.player.playerObject.active == true && values.currentLevel == 3) {
                console.log(values.currentLevel)
                if (this.player.whereIAmLooking == "RIGHT") {
                    this.bulletGroup.add(new Bullet(this, this.player.playerObject.x + 50, this.player.playerObject.y, 'bullet').setVelocityX(values.bulletSpeed).setAngle(0))
                } else if (this.player.whereIAmLooking == "LEFT") {
                    this.bulletGroup.add(new Bullet(this, this.player.playerObject.x - 50, this.player.playerObject.y, 'bullet').setVelocityX(-values.bulletSpeed).setAngle(-180))
                } else if (this.player.whereIAmLooking == "DOWN") {
                    this.bulletGroup.add(new Bullet(this, this.player.playerObject.x, this.player.playerObject.y + 40, 'bullet').setVelocityY(-values.bulletSpeed).setAngle(90))
                } else {
                    this.bulletGroup.add(new Bullet(this, this.player.playerObject.x, this.player.playerObject.y - 40, 'bullet').setVelocityY(-values.bulletSpeed).setAngle(-90))
                }
            }
        }, this);




        emitter
            .on('moveUp', () => {
                if (this.player.playerObject.active == true) {
                    this.player.playerObject.setVelocityY(-values.speed)
                    this.player.whereIAmLooking = "TOP"
                }
            }, this)
            .on('moveDown', () => {
                if (this.player.playerObject.active == true) {
                    this.player.playerObject.setVelocityY(values.speed)
                    this.player.whereIAmLooking = "DOWN"
                }
            }, this)
            .on('moveLeft', () => {
                if (this.player.playerObject.active == true) {
                    this.player.playerObject.setVelocityX(-values.speed)
                    this.player.whereIAmLooking = "LEFT"
                }
            }, this)
            .on('moveRight', () => {
                if (this.player.playerObject.active == true) {
                    this.player.playerObject.setVelocityX(values.speed)
                    this.player.whereIAmLooking = "RIGHT"
                }

            }, this)
            .on('stopMoving', () => {
                if (this.player.playerObject.active == true) {
                    this.player.playerObject.setVelocityX(0)
                    this.player.playerObject.setVelocityY(0)
                }
            }, this);
    }

}