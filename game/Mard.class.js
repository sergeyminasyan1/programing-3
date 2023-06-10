class Mard extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(char);
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = []
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy >= 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 7
            var newMard = new Mard(newX, newY, 7)
            mardArr.push(newMard)
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 7
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var food = random(this.chooseCell(5,6))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[this.y][this.x] = 0
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                        grassEaterArr.splice(i, 1)
                    }
                }
            } else if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1)
                    }
                }
            }
            else if (matrix[newY][newX] == 1) {
                for (var i in predatorArr) {
                    if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                        predatorArr.splice(i, 1)
                    }
                }
            }

            

            matrix[newY][newX] = 7

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1)
                }
            }
        }
    }

}