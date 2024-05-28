import Card from "./Card";
import Team from "./Team";

class Play{

    currentPlayerOrder : number;
    currentTeamOrder : number;
    playedCards : Card[];

    constructor(){

        this.currentPlayerOrder = 0;
        this.currentTeamOrder = 0;

    }

    // play handler
    // will run until a play is finished AKA all 4 players made a play
    // a round point is awarded to the best of 3 plays
    // in the case if a tie, I'm not sure about the rules, needs to check with the rest of the team

    playHandler(){


    }

    // will award 1 play point to the winning team of that play, will only be called by the playHandler() method
    givePlayPoint(winnerTeam : Team){

        winnerTeam.playPoints += 1;

    }

    // this will check if any of the teams won
    checkIfTeamWon(teams : Team[]){
        
    }

    

}

export default Play