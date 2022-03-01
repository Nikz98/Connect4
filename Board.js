class Board {

    constructor(rows, columns) {
        this.numRows = rows
        this.numColumns = columns
    }

    makeBoard() {
        this.board = []
        for (let y = 0; y < this.numRows; y++) {
            this.board.push(Array.from({length: this.numColumns}).fill('-'));
        }
    }
    
    // --------------------------------------------------------------------------------------------------------
    
    placeTurn(column, token) { // add ternary function below
        for (let i = this.numRows-1; i >= 0; i--) {
            if (this.board[i][column] === '-') {
                this.board[i][column] = token
                break
            }
        }
    }
    
    // --------------------------------------------------------------------------------------------------------
    
    checkWinner() {
        let flippedBoard = this.board[0].map((val, index) => this.board.map(row => row[index]).reverse())
        if (this.check4(this.board) || this.check4(flippedBoard)) {
            return true
        }
        return null
    }
    
    check4(board) {
        for (let row = 0; row < this.numRows; row++) {
            for (let column = 0; column < this.numColumns-3; column++) {
                if (this.checkEqual(board[row][column], board[row][column+1], board[row][column+2], board[row][column+3])) {
                    return true;
                }
            }
        }
    
        for (let row = 0; row < this.numRows-3; row++) {
            for (let column = 0; column < this.numColumns-3; column++) {
                if (this.checkEqual(board[row][column], board[row+1][column+1], board[row+2][column+2], board[row+3][column+3])) {
                    return true;
                }
            }
        }
    }
    
    checkEqual(a, b, c, d) {
        return ((a != '-') && (a == b) && (a == c) && (a == d));
    }
    
    // --------------------------------------------------------------------------------------------------------
    
    getBoard() {
        return this.board;
    }

    getNumRows() {
        return this.numRows
    }

    getNumColumns() {
        return this.numColumns
    }
}