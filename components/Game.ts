import PlayedRound from "./PlayedRound";

class Game{

    currentRound : number;
    roundHistory : PlayedRound[];

    constructor(){

        this.currentRound = 0;
        this.roundHistory = [];

    }

    // this method will be done last, after all the other components are done
    gameHandler(){

    }

    addToRoundHistory(playedRound : PlayedRound){

        this.roundHistory.push(playedRound);

        return 'PLAYED ROUND ADDED TO HISTORY.'
    }
}

export default Game