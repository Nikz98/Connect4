const numRows = 6,
    numColumns = 7,
    player1= new Human('Guest 1', 'R')
    player2 = new Computer('Guest 2', 'Y')
    board = new Board(numRows,numColumns)
    display = new GUI(player1, player2)
    let gameOver = false
    let currentPlayer = player1


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


function changeNameClick() {
    display.changeNames()
}

resetGame()
display.setupDOMListeners()
