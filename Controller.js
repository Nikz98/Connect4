// class Connect4 {
let logTracker = true       // short strings to track movement of code
let logDebug = true         // variables or information to ensure code is working correctly
let logFunction = true      // the function that is running
let logBoard = true         // current board array state

numRows = 6
numColumns = 7
const player1= new Human('Red', 'R')
const player2 = new Human('Yellow', 'Y')
const board = new Board(numRows,numColumns, player1, player2)
const display = new GUI(player1, player2)
let gameOver = false

function printLog(item, string) {
    if (item) {console.log(string)}
}


function positionClick(columnIndex) {
    if (!gameOver) {
        board.placeTurn(columnIndex)
        display.drawBoard(board.getBoard())
        winner = board.checkWinner()
        if (winner) {
            display.displayWinner(winner)
            gameOver = true
        }
    }
}


function resetClick() {
    board.setBoard()
    display.resetDisplay(board.getBoard())
    gameOver = false
}

display.setupDOMListeners()