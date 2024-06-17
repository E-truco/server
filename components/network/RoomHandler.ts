// let roomId = amazingMaruanStringMakerv10();


// function checkingstuff {
//     foreach (room as existingRooms){
//     room = checkRoom(roomId);
//     room == roomId
// }

// }

// if (checkingstuff){

//     existingRooms.push(roomId);
// }


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



function createNewRoom(){

    let roomID : string;

    do{

        roomID = randString(10, randStringSet);

    }while(roomExists(roomID) == false)

    activeRoomsList.push(roomID)

    return "Room successfully created."

}


function roomExists(newRoomID){

    for(let currentRoomID in activeRoomsList){

        if(newRoomID == currentRoomID){
            return true
        }
    }

    return false;
}