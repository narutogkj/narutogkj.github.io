import values from './constants.js';


class ScoreState {
    enemyCount = Infinity
    currentLevel = 0;
    constructor() {
        mobx.makeAutoObservable(this)
    }
}

export const score = new ScoreState()