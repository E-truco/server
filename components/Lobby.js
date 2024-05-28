
class Lobby{

    
    constructor(lobbyID, lobbyName){
        this.lobbyID = lobbyID;
        this.lobbyName = lobbyName;
        this.players = [];
    }

    // will add a player object to the lobby
    addPlayer(player){

        try{

            this.players.push(player)

        }catch{

            return `ERROR. PLAYER NOT ADDED TO LOBBY ${this.lobbyName}`

        }

        return `PLAYER ADDED TO LOBBY ${this.lobbyName}`
    }
}

export default Lobby