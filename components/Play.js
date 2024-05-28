
class Play{

    constructor(){

        this.currentPlayer = undefined;
        this.currentTeam = undefined;

    }

    // play handler
    // will run until a play is finished AKA all 4 players made a play
    // a round point is awarded to the best of 3 plays
    // in the case if a tie, I'm not sure about the rules, needs to check with the rest of the team

    playHandler(){


    }

    // will award 1 play point to the winning team of that play, will only be called by the playHandler() method
    givePlayPoint(winnerTeamID){

        winnerTeamID.playPoints += 1;

    }

    // this will check if any of the teams won
    checkIfTeamWon(teams){
        
    }

    

}

export default Play