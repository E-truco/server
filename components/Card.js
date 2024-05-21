class Card{

    constructor(face, suit, faceValue, suitValue, owner){

    this.face = face            // string
    this.suit =  suit           // string
    this.faceValue = faceValue  // int
    this.suitValue = suitValue  // int
    this.owner =  owner         // ?string (playerID)
    
    }
    
}

export default Card;