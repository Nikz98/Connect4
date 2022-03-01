const numRows = 6,
    numColumns = 7,
    player1= new Computer('Guest 1', 'R')
    player2 = new Computer('Guest 2', 'Y')
    board = new Board(numRows,numColumns)
    display = new GUI(player1, player2)

function playGame() {
    board.makeBoard()
    display.resetDisplay(board.getBoard())
    let gameOver = false, 
        currentPlayer = player1
    while (!gameOver) {
        board.placeTurn(currentPlayer.getMove(), currentPlayer.getToken())
        display.drawBoard(board.getBoard())
        winner = board.checkWinner()
        if (winner) {
            currentPlayer.addScore()
            display.displayWinner(currentPlayer.getPlayerName())
            gameOver = true
        }
        currentPlayer = (currentPlayer === player1) ? player2 : player1
    }
}


function changeNameClick() {
    display.changeNames()
}


display.setupDOMListeners()
playGame()



// function playGame() {
//     board.makeBoard()
//     display.resetDisplay(board.getBoard())
//     let gameOver = false, 
//         currentPlayer = player1
//     while (!gameOver) {
//         let turn
//         let myPromise = new Promise (function (pass, fail) {
//             console.log('human turn')
//             turn = currentPlayer.getMove()
//             pass()
//             fail()
//         })
    
//         board.placeTurn(turn, currentPlayer.getToken())
//         display.drawBoard(board.getBoard())
//         winner = board.checkWinner()
//         if (winner) {
//             currentPlayer.addScore()
//             display.displayWinner(currentPlayer.getPlayerName())
//             gameOver = true
//         }
//         currentPlayer = (currentPlayer === player1) ? player2 : player1
//     }
// }