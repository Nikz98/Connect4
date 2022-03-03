class Player {

    playerName
    token
    score

    constructor(name, token) {
        this.playerName = name
        this.token = token
        this.score = 0
    }

    getPlayerType() {}

    getMove() {}

    addScore() {
        this.score+=1
    }

    getPlayerName() {
        return this.playerName
    }

    getScore() {
        return this.score
    }

    getToken() {
        return this.token
    }

    setPlayerName(name) {
        this.playerName = name
    }

}