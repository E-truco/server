
class Team{

    constructor(teamID){
        this.teamID = teamID
        this.players = [];
        this.handPoints = 0;
        this.roundPoints = 0;

    }

    // this will receive a Player object and add it to the players[] list
    addPlayer(player){

        try{

            this.players.push(player)

        }catch{

            return `ERROR. PLAYER NOT ADDED TO TEAM ${this.teamID}`

        }

        return `PLAYER ADDED TO TEAM ${this.teamID}`
    }

    // this will reset the handPoints (it can also be done directly by editing the variable but now we have the option to use this method =)
    resetHandPoints(){

        let oldPoints = this.handPoints;

        this.handPoints = 0;

        return `HAND POINTS SET TO 0. (FROMT ${oldPoints})`
    }

}

export default Team