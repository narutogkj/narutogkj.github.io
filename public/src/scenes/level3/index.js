import create from "./create.js";
import update from "./update.js";

const initializer = {
    Extends: Phaser.Scene,
    initialize: function level3() {
        Phaser.Scene.call(this, { key: 'level3', active: false });
    },
    create: create,
    update: update,
}

var level3 = new Phaser.Class(initializer);
export default level3