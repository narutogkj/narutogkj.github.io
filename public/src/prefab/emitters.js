import emitter from "./EventsCenter.js"

import values from './constants.js';
export function emitters(parent) {

    emitter.on('enemychangeDirection', (enemy) => {
        enemy.changeDirection()
    })


    emitter.on('fire', () => {
        console.log(this.scene.key)
        if (parent.player.whereIAmLooking == "RIGHT") {
            parent.bullet.create(parent.player.playerObject.x + 50, parent.player.playerObject.y, "bullet").setVelocityX(values.bulletSpeed).setAngle(0)
        } else if (parent.player.whereIAmLooking == "LEFT") {
            parent.bullet.create(parent.player.playerObject.x - 50, parent.player.playerObject.y, "bullet").setVelocityX(-values.bulletSpeed).setAngle(-180)
        } else if (parent.player.whereIAmLooking == "DOWN") {
            parent.bullet.create(parent.player.playerObject.x, parent.player.playerObject.y + 40, "bullet").setVelocityY(values.bulletSpeed).setAngle(90)
        } else {
            parent.bullet.create(parent.player.playerObject.x, parent.player.playerObject.y - 40, "bullet").setVelocityY(-values.bulletSpeed).setAngle(-90)
        }
    }, parent);





    emitter
        .on('moveUp', () => {
            if (parent.player.playerObject) {
                parent.player.playerObject.setVelocityY(-values.speed)
                parent.player.whereIAmLooking = "TOP"
            }
        }, parent)
        .on('moveDown', () => {
            if (parent.player.playerObject) {
                parent.player.playerObject.setVelocityY(values.speed)
                parent.player.whereIAmLooking = "DOWN"
            }
        }, parent)
        .on('moveLeft', () => {
            if (parent.player.playerObject) {
                parent.player.playerObject.setVelocityX(-values.speed)
                parent.player.whereIAmLooking = "LEFT"
            }
        }, parent)
        .on('moveRight', () => {
            if (parent.player.playerObject) {
                parent.player.playerObject.setVelocityX(values.speed)
                parent.player.whereIAmLooking = "RIGHT"
            }

        }, parent)
        .on('stopMoving', () => {
            if (parent.player.playerObject) {
                parent.player.playerObject.setVelocityX(0)
                parent.player.playerObject.setVelocityY(0)
            }
        }, parent);



}