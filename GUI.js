class GUI extends Display {
       
    updateScore() {
        document.getElementById("p1ScoreName").innerHTML = `${this.player1.getPlayerName()}: ${this.player1.getScore()}`
        document.getElementById("p2ScoreName").innerHTML = `${this.player2.getPlayerName()}: ${this.player2.getScore()}`
    }

    getMode(){
        return document.querySelector('input[name="gameMode"]:checked').value
    }

    changeNames() {
        let p1Name = document.getElementById('p1Name').value
        let p2Name = document.getElementById('p2Name').value
        p1Name = (p1Name === '') ? 'Guest 1' : p1Name
        p2Name = (p2Name === '') ? 'Guest 2' : p2Name
        document.getElementById("p1ScoreName").innerHTML = `${p1Name}: ${this.player1.getScore()}`
        document.getElementById("p2ScoreName").innerHTML = `${p2Name}: ${this.player2.getScore()}`
        this.player1.setPlayerName(p1Name)
        this.player2.setPlayerName(p2Name)
        console.log(player1)
        console.log(player2)
    }

    drawBoard(gameBoard) {
        for (let rowIndex = 0; rowIndex < board.getNumRows(); rowIndex++) {
            for (let columnIndex = 0; columnIndex < board.getNumColumns(); columnIndex++) {
                if (gameBoard[rowIndex][columnIndex] === '-') {
                    document.getElementById(`row-${rowIndex}-column-${columnIndex}`).style.backgroundColor = 'transparent'
                    continue
                }
                const cellText = gameBoard[rowIndex][columnIndex]
                document.getElementById(`row-${rowIndex}-column-${columnIndex}`).style.backgroundColor = cellText;
            }
        }
    }

    showGame() {
        this.changeNames()
        document.getElementById('welcomeScreen').style.display = 'none'
        document.getElementById("game").style.display = "block"
    }

    resetDisplay(gameBoard) {
        this.drawBoard(gameBoard)
        document.getElementById("winner-name").innerText = ""
        document.getElementById("winner-display").style.display = "none"
    }

    displayWinner(winner) {
        document.getElementById("winner-name").innerText = winner;
        const winnerDisplay = document.getElementById("winner-display").style.display = "block";
        this.updateScore()
    }

    setupDOMListeners() {
        const resetButton = document.getElementById("reset-button")
        const submitButton = document.getElementById("submitNames")

        resetButton.addEventListener("click", resetGame)
        submitButton.addEventListener("click", playClick)

        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
            for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
                const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`)
                gridPosition.addEventListener("click", positionClick.bind(" ", columnIndex))
            }
        }
    }
}