import emitter from './EventsCenter.js'

export function inputs(parent) {

    parent.cursors = parent.input.keyboard.createCursorKeys();
    parent.zKeyStrok = parent.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z)


    parent.zKeyStrok.on('down', () => {
        console.log(parent)
        parent.fireSound.play()
        emitter.emit('fire')
    })

    parent.cursors.up
        .on('down', () => {
            emitter.emit('moveUp')
        })
        .on('up', () => {
            emitter.emit('stopMoving')
        })

    parent.cursors.left
        .on('down', () => {
            emitter.emit('moveLeft')
        })
        .on('up', () => {
            emitter.emit('stopMoving')
        })


    parent.cursors.right
        .on('down', () => {
            emitter.emit('moveRight')
        })
        .on('up', () => {
            emitter.emit('stopMoving')
        })



    parent.cursors.down
        .on('down', () => {
            emitter.emit('moveDown')
        })
        .on('up', () => {
            emitter.emit('stopMoving')
        })



    parent.upArrow
        .on('pointerover', function() {
            emitter.emit('moveUp')
        }, parent.upArrow)
        .on('pointerout', function() {
            emitter.emit('stopMoving')
        });

    parent.leftArrow
        .on('pointerover', function() {
            emitter.emit('moveLeft')
        })
        .on('pointerout', function() {
            emitter.emit('stopMoving')
        })


    parent.rightArrow
        .on('pointerover', function() {
            emitter.emit('moveRight')
        })
        .on('pointerout', function() {
            emitter.emit('stopMoving')
        });

    parent.downArrow
        .on('pointerover', function() {
            emitter.emit('moveDown')
        })
        .on('pointerout', function() {
            emitter.emit('stopMoving')
        });

    parent.arrowsS
        .on('pointerover', function(pointer) {

            parent.fireSound.play()
            emitter.emit('fire')
        });



    parent.arrowsT
        .on('pointerover', function(pointer) {

            parent.fireSound.play()
            emitter.emit('fire')
        });

    parent.arrowsC
        .on('pointerover', function(pointer) {

            parent.fireSound.play()
            emitter.emit('fire')
        });

    parent.arrowsX
        .on('pointerover', function(pointer) {

            parent.fireSound.play()
            emitter.emit('fire')
        });

}