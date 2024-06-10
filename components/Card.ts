class Card{

    face : string;
    suit : string;
    faceValue : number;
    suitValue : number;
    owner : string | undefined;
    hidden : boolean;

    constructor(face : string, suit : string, faceValue : number, suitValue : number){

    this.face = face
    this.suit =  suit
    this.faceValue = faceValue
    this.suitValue = suitValue
    this.owner = undefined  // should be a playerID
    this.hidden = false;
    
    }
    
}

export default Card;