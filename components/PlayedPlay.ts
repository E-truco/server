import Card from './Card'

class PlayedPlay{

    playedCards : Card[];
    winnerCardPlayIndex : number; // index of playedCards[] that points to the winning card (by this point, cards should have owners)

    constructor(playedCard : Card[], winnerCardPlayIndex : number){

        this.playedCards = playedCard;
        this.winnerCardPlayIndex = winnerCardPlayIndex;

    }
}

export default PlayedPlay