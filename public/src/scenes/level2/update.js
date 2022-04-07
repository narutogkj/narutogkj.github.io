export default function update(time) {

    if (this.player.whereIAmLooking == "RIGHT") {
        this.player.playerObject.setAngle(90)
    } else if (this.player.whereIAmLooking == "LEFT") {
        this.player.playerObject.setAngle(-90)
    } else if (this.player.whereIAmLooking == "DOWN") {
        this.player.playerObject.setAngle(180)
    } else {
        this.player.playerObject.setAngle(0)
    }

    this.enemyGroup.map(e => {
        if (e.enemyObject.active) {
            e.enemyFire(time, this.player.playerObject, this.enemyBulletGroup)
        }
    })

}