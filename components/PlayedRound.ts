import PlayedPlay from "./PlayedPlay"

class PlayedRound{

    playedPlays : PlayedPlay[];
    winnerTeamID : string;

    constructor(playedPlays : PlayedPlay[], winnerTeamID : string){

        this.playedPlays = playedPlays;
        this.winnerTeamID = winnerTeamID;

    }
}

export default PlayedRound