import PlayedPlay from "./PlayedPlay";
import Team from "./Team";

class Round{

    currentPlay : number;
    playedPlays : PlayedPlay[];
    roundPointWorth : number;

    constructor(){

        this.currentPlay = 0;
        this.playedPlays = [];
        this.roundPointWorth = 1;

    }

    roundHandler(){


    }

    giveRoundPoint(winnerTeam : Team){


    }

    // will handle truco calls (incresing the roundPointWorth for example)
    trucoHandler(){


    }
}

export default Round