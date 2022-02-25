printBoard(board) {
    let boardToPrint = ''
    for (let i=0; i < board.length; i++) {
        for (let j=0; j < board[i].length; j++){
            boardToPrint += `${board[i][j]} `
        }
        boardToPrint += `\n`
    }
    printLog(logBoard, boardToPrint)
}

getMove() {
    for (let row = 0; row < board.getNumRows(); row++) {
        for (let column = 0; column < board.getNumColumns(); column++) {
            const gridPosition = document.getElementById(`row-${row}-column-${column}`);
            gridPosition.addEventListener("click", positionClick.bind(" ", column));
        }
    }
}