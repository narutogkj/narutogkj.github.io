import values from "../../prefab/constants.js";

export default function update(time) {

    values.timmer -= 0.01;
    if (values.timmer > 0)
        this.timeText.setText(values.timmer.toFixed(2));
    else {
        // this.scene.start('gameOver')
    }
}