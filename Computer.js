class Computer extends Player {
    getMove() {
        return Math.floor(Math.random() * board.getNumColumns())
    }

    getPlayerType() {
        return "Computer"
    }
    // aPause() {
    //     await new Promise(r => setTimeout(r, 1000))
    //     console.log(`Thinking...`)
    // }

    // genMove() {
    //     return Math.floor(Math.random() * board.getNumColumns())
    // }
}