class TicTacToe {
    constructor() {
        this.carentPlayer = 'x';
        this.matrix = [];
        this.matrix[0] = [];
        this.matrix[1] = [];
        this.matrix[2] = [];
        this.finish = false;
        this.winner = null;
        this.noTurn = false;
        this.counter = 0;
    }

    getCurrentPlayerSymbol() {
        if (this.carentPlayer === 'x') {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === undefined) {
            if (this.carentPlayer === 'x') {
                this.matrix[rowIndex][columnIndex] = 'x';
                this.carentPlayer = 'o';
            } else {
                this.matrix[rowIndex][columnIndex] = 'o';
                this.carentPlayer = 'x';
            }


            const test = char => {
                let bool = true;
                for (let i = 0; i < 3; i++) {
                    bool &= (this.matrix[i][i] === char);
                }
                if (bool) {
                    this.winner = char;
                    this.finish = true;
                    return;
                }

                bool = true;
                for (let i = 0; i < 3; i++) {
                    bool &= (this.matrix[i][2 - i] === char);
                }
                if (bool) {
                    this.winner = char;
                    this.finish = true;
                    return;
                }


                for (let j = 0; j < 3; j++) {
                    bool = true;
                    for (let i = 0; i < 3; i++) {
                        bool &= (this.matrix[j][i] === char);
                    }
                    if (bool) {
                        this.winner = char;
                        this.finish = true;
                        return;
                    }
                }

                for (let j = 0; j < 3; j++) {
                    bool = true;
                    for (let i = 0; i < 3; i++) {
                        bool &= (this.matrix[i][j] === char);
                    }
                    if (bool) {
                        this.winner = char;
                        this.finish = true;
                        return;
                    }
                }
            };
            this.counter++;
            test('x');
            test('o');
            if (this.counter === 9) {
                this.noTurn = true;
                this.finish = true;
            }
        }
    }

    isFinished() {
        return this.finish;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.noTurn;
    }

    isDraw() {
        if (this.noTurn && !this.winner) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] === undefined) {
            return null;
        } else {
            return this.matrix[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;