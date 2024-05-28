import PlayedRound from "./PlayedRound";
import Team from "./Team";

class Game{

    currentRound : number;
    roundHistory : PlayedRound[];
    teams : Team[]

    constructor(teams : Team[]){

        this.currentRound = 0;
        this.roundHistory = [];
        this.teams = teams;

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