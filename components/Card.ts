class Card{

    face : string;
    suit : string;
    faceValue : number;
    suitValue : number;
    owner : string | undefined;

    constructor(face : string, suit : string, faceValue : number, suitValue : number){

    this.face = face
    this.suit =  suit
    this.faceValue = faceValue
    this.suitValue = suitValue
    this.owner = undefined  // should be a playerID
    
    }
    
}

export default Card;