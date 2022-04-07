import emitter from "./EventsCenter.js"
import values from './constants.js';
import { score } from "./mobxCenter.js";

function colliders(parent, _player, _staticGroup, _playerBulletsGroup, _enemyGroup, _enemyBulletGroup, _invisbleStaticGroup) {

    parent.physics.world.setBounds(0, 0, values.levelScreen.x, values.levelScreen.y);


    if (_player) {
        _player.body.onWorldBounds = true;
        _player.setCollideWorldBounds(true).setBounce(0)


        if (_staticGroup) {
            parent.physics.add.collider(_player, _staticGroup);
        }



    }


    if (_enemyGroup.length > 0) {
        _enemyGroup.map(e => {


            e.enemyObject.body.onWorldBounds = true;
            e.enemyObject.setCollideWorldBounds(true)

            parent.physics.world.on("worldbounds", function(body) {
                if (e.enemyObject == body.gameObject) {
                    emitter.emit('enemychangeDirection', e)
                }
            }, parent);


            if (_staticGroup) {
                parent.physics.add.collider(e.enemyObject, _staticGroup, () => {
                    emitter.emit('enemychangeDirection', e)
                });
            }

            if (_invisbleStaticGroup) {
                parent.physics.add.collider(e.enemyObject, _invisbleStaticGroup, () => {
                    emitter.emit('enemychangeDirection', e)
                });
            }

            if (_playerBulletsGroup && _player.active == true) {
                parent.physics.add.collider(e.enemyObject, _playerBulletsGroup, (_e, b) => {
                    parent.blast.play()

                    if (_e.active) {
                        _e.setBounce(1)
                        _e.destroy();
                        _playerBulletsGroup.remove(b, true, true)
                        score.enemyCount -= 1
                    }

                });
            }



            if (_player) {
                parent.physics.add.collider(e.enemyObject, _player, (_e) => {
                    emitter.emit('powerDown')
                    var startColor = Phaser.Display.Color.ValueToColor(0xffffff)
                    var endColor = Phaser.Display.Color.ValueToColor(0x000000)

                    parent.scene.scene.tweens.addCounter({
                        from: 0,
                        to: 100,
                        duration: 100,
                        repeat: 2,
                        yoyo: true,
                        ease: Phaser.Math.Easing.Sine.InOut,
                        onUpdate: tween => {
                            const value = tween.getValue()
                            const colorObject = Phaser.Display.Color.Interpolate.ColorWithColor(
                                startColor,
                                endColor,
                                100,
                                value
                            )
                            const color = Phaser.Display.Color.GetColor(
                                colorObject.r,
                                colorObject.g,
                                colorObject.b
                            )
                            _player.setTint(color)
                        }
                    })

                    if (values.playerHealth <= 0) {
                        _enemyGroup.length = 0;
                        values.playerHealth = 10
                        parent.scene.start('gameOver')
                    }
                });
            }




        })


    }



    if (_staticGroup && _playerBulletsGroup) {
        parent.physics.add.collider(_playerBulletsGroup, _staticGroup, (b) => {
            parent.blast.play()
            _playerBulletsGroup.remove(b, true, true)
        });


        parent.physics.add.collider(_enemyBulletGroup, _player, (b) => {
            parent.blast.play()
            _enemyBulletGroup.remove(b, true, true)
            emitter.emit('powerDown')
            var startColor = Phaser.Display.Color.ValueToColor(0xffffff)
            var endColor = Phaser.Display.Color.ValueToColor(0x000000)

            parent.scene.scene.tweens.addCounter({
                from: 0,
                to: 100,
                duration: 100,
                repeat: 2,
                yoyo: true,
                ease: Phaser.Math.Easing.Sine.InOut,
                onUpdate: tween => {
                    const value = tween.getValue()
                    const colorObject = Phaser.Display.Color.Interpolate.ColorWithColor(
                        startColor,
                        endColor,
                        100,
                        value
                    )
                    const color = Phaser.Display.Color.GetColor(
                        colorObject.r,
                        colorObject.g,
                        colorObject.b
                    )
                    _player.setTint(color)
                }

            })
            if (values.playerHealth <= 0) {
                _enemyGroup.length = 0;
                values.playerHealth = 10
                parent.scene.start('gameOver')
            }

        })
    }

    if (_enemyBulletGroup, _playerBulletsGroup) {
        parent.physics.add.collider(_enemyBulletGroup, _playerBulletsGroup, (e, p) => {
            parent.blast.play()
            _playerBulletsGroup.remove(p, true, true)
            _enemyBulletGroup.remove(e, true, true)
        });
    }
}
export default colliders;