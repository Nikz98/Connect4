function positionClick(columnIndex) {
    if (!gameOver) {
        if (currentPlayer.getPlayerType() === "Human") {
            playMove(columnIndex)
        }
        if (currentPlayer.getPlayerType() === "Computer") {
            playMove(currentPlayer.getMove())
        }
    }
}

function playMove(move) {
    board.placeTurn(move, currentPlayer.getToken())
    display.drawBoard(board.getBoard())
    winner = board.checkWinner()
    if (winner) {
        currentPlayer.addScore()
        display.displayWinner(currentPlayer.getPlayerName())
        gameOver = true
        return
    }
    currentPlayer = (currentPlayer === player1) ? player2 : player1
}

function resetGame() {
    board.makeBoard()
    display.resetDisplay(board.getBoard())
    gameOver = false
    currentPlayer = player1
}

function playClick() {
    mode = display.getMode()
    player2 = mode ? player2 : comp
    display.showGame()
}


const numRows = 6
const numColumns = 7
const player1 = new Human('Guest 1', 'red')
let player2 = new Human('Guest 2', 'yellow')
const comp = new Computer('Guest 2', 'yellow')
const board = new Board(numRows, numColumns)
const display = new GUI(player1, player2)
let gameOver = false
let currentPlayer = player1

resetGame()
display.setupDOMListeners()