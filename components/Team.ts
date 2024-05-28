import Player from './Player'

class Team{

    teamID : string;
    players : Player[];
    playPoints : number;
    roundPoints : number;

    constructor(teamID : string){

        this.teamID = teamID;
        this.players = [];
        this.playPoints = 0;
        this.roundPoints = 0;

    }

    // this will receive a Player object and add it to the players[] list
    addPlayer(player : Player){

        try{

            this.players.push(player)

        }catch{

            return `ERROR. PLAYER NOT ADDED TO TEAM ${this.teamID}`

        }

        return `PLAYER ADDED TO TEAM ${this.teamID}`
    }

    // this will reset the playPoints (it can also be done directly by editing the variable but now we have the option to use this method =)
    resetPlayPoints(){

        let oldPoints = this.playPoints;

        this.playPoints = 0;

        return `PLAY POINTS SET TO 0. (FROMT ${oldPoints})`
    }

}

export default Team