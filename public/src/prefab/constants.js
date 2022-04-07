var screenWidth = innerWidth;
var screenHeight = innerHeight;

const values = {
    counterOfEmitter: false,
    currentLevel: 1,
    timmer: 20.00,
    playerHealth: 10,
    enemyCount: 3,
    speed: 100,
    bulletSpeed: 280,
    gameSize: {
        x: screenWidth,
        y: screenHeight
    },
    upArrow: {
        x: 70,
        y: screenHeight - 130
    },
    leftArrow: {
        x: 30,
        y: screenHeight - 90
    },
    rightArrow: {
        x: 110,
        y: screenHeight - 90
    },
    centerArrows: {
        x: 70,
        y: screenHeight - 90
    },
    downArrow: {
        x: 70,
        y: screenHeight - 50
    },

    arrowsT: {
        x: screenWidth - 70,
        y: screenHeight - 130
    },
    arrowsS: {
        x: screenWidth - 105,
        y: screenHeight - 90
    },
    arrowsC: {
        x: screenWidth - 35,
        y: screenHeight - 90
    },
    arrowsX: {
        x: screenWidth - 70,
        y: screenHeight - 50
    },
    levelScreen: {
        x: screenWidth,
        y: 2.3 * screenHeight / 3
    }
}


export default values;