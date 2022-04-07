import create from "./create.js";
import update from "./update.js";

const initializer = {
    Extends: Phaser.Scene,
    initialize: function level2() {
        Phaser.Scene.call(this, { key: 'level2', active: false });
    },
    create: create,
    update: update,
}

var level2 = new Phaser.Class(initializer);
export default level2