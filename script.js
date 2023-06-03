var matrix = [
    [7, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 7],
    [0, 1, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 2, 3, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, 1, 1, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 0, 0, 2, 1, 5, 0, 0, 0],
    [7, 1, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 7, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 3, 1, 7, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 0, 1, 1, 0, 2, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 2, 0, 0, 0, 0, 5, 1, 0, 0, 0, 2, 7, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0],
    [0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 0, 3, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 2, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 1, 1, 0, 2, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 3, 2, 0, 0, 3, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 0, 0, 0, 6, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [7, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 1, 0, 2, 0, 7, 0, 0, 0, 6, 5, 1, 0, 0, 0, 1, 0, 0, 0, 7]
];

var side = 30;
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var fireArr = []
var waterArr = []
var grass2Arr = []
var mardArr =[]
var youwin = []
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y, 3);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                var fire = new Fire(x, y, 4);
                fireArr.push(fire);

            }
            else if (matrix[y][x] == 5) {
                var water = new Water(x, y, 5);
                waterArr.push(water);

            }
            else if (matrix[y][x] == 6) {
                var grass2 = new Grass2(x, y, 6);
                grass2Arr.push(grass2);

            }
            else if (matrix[y][x] == 7) {
                var mard = new Mard(x, y, 7);
                mardArr.push(mard);

            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill(233, 203, 135);
            }
            else if (matrix[y][x] == 1) {
                fill(0, 204, 0);
            }
            else if (matrix[y][x] == 2) {
                fill(255, 255, 0);
            }
            else if (matrix[y][x] == 3) {
                fill(255, 0, 0);
            }
            else if (matrix[y][x] == 4) {
                fill(225, 128, 0);
            }
            else if (matrix[y][x] == 5) {
                fill(0, 0, 255);
            }
            else if (matrix[y][x] == 6) {
                fill(0, 204, 0);
            }
            else if (matrix[y][x] == 7) {
                fill(0, 0,0);
            }

            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()
    }
    for (var i in predatorArr) {
        predatorArr[i].eat()
        predatorArr[i].move()
        predatorArr[i].mult()
        predatorArr[i].die()
    }
    for (var i in fireArr) {
        fireArr[i].eat()
        fireArr[i].move()
        fireArr[i].mult()
        fireArr[i].die()
    }
    for (var i in waterArr) {
        waterArr[i].eat()
        waterArr[i].move()
        waterArr[i].mult()
        waterArr[i].die()
    }
    for (var i in grass2Arr) {
         grass2Arr[i].eat()
         grass2Arr[i].move()
        grass2Arr[i].mult()
         grass2Arr[i].die()
    }
    for (var i in mardArr) {
        mardArr[i].eat()
        mardArr[i].move()
        // mardArr[i].mult()
    //     mardArr[i].die()
     }
   
}

