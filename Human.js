class Human extends Player {

    getMove() {
        return display.promptPlayerMove()
    }

    getPlayerType() {
        return "Human"
    }
}