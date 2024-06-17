
// --------------------
// this code snippet is under MIT license and can be found on: https://github.com/Tanglink-URL/random-string
let randStringSet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"

function randString(length : number, set : string) : string {

    let output = ''

    const setLength = set.length

    for(let i = 0; i < length; i++){
        output += set.charAt(Math.floor(Math.random()*setLength))
    }

    return output
}
// end of code snippet
// --------------------

// this is a list with all existing room's ID
let activeRoomsList : string[] = [];


// create a new room
function createNewRoom(){

    let roomID : string;

    do{

        roomID = randString(10, randStringSet);

    }while(roomExists(roomID) == false)

    activeRoomsList.push(roomID)

    return roomID

}

// delete an existing room
function deleteRoom(roomID : string){

    if(roomExists(roomID) == true){

        let index = activeRoomsList.indexOf(roomID);

        activeRoomsList.splice(index, 1);

        return "Room successfully deleted."

    }else{

        return "Room ID could not be found."
    }

}


function roomExists(newRoomID){

    for(let currentRoomID in activeRoomsList){

        if(newRoomID == currentRoomID){
            return true
        }
    }

    return false;
}