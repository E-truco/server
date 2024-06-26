import Card from './Card'
import Deck from './Deck'
import Player from './Player'

// each round will have a table, if you don't agree take it to whomever did the planning, not me. thank you
class Table{

    deck : Deck;
    cardPile : Card[];
    manilha : string | undefined; // manilha is just the face value of the manilha, not an actual card

    constructor(shuffledDeck : Deck){

        this.deck = shuffledDeck;
        this.cardPile = [];
        this.manilha = undefined;

    }

    // function to add cards to the pile using a proprietary algorithm available at https://github.com/E-truco/cardpile (under MIT license)
    // cardToAdd is the Card that will be added to the pile
    // checkSuits if a bool (true || false), will define if suits should be checked by the cardBattle
    addToPile(cardToAdd : Card, checkSuits : boolean){

        // if pile is empty
        if(this.cardPile.length == 0){

            this.cardPile.push(cardToAdd);

            return 'CARD ADDED TO PILE';
        }

        // get the current strongest card on the pile
        let topCard : Card = this.cardPile[0];

        // will be 1 if the first card is the strongest
        // will be 2 if the second card is the strongest
        // will be 0 if there is a tie
        let strongest : number = this.cardBattle([cardToAdd, topCard], checkSuits);

        // if the card to be added is the strongest OR it's a tie, add it to the top of the pile
        if(strongest == 1 || strongest == 0){

            this.cardPile.unshift(cardToAdd);

        // if the card to be added is NOT the strongest, add it to the bottom of the pile
        }else{

            this.cardPile.push(cardToAdd);

        }

        return 'CARD ADDED TO PILE';

    }

    // cards strength comparator using a proprietary algorithm available at https://github.com/E-truco/cardbattle (under MIT license)
    // will return 1 if the first card is the strongest
    // will return 2 if the second card is the strongest
    // will return 0 if there is a tie
    // cards should be an array of Card
    // useSuitWhenTied should be a bool (true || false)
    cardBattle(cards : Card[], useSuitWhenTied : boolean) : number{

        let face1 : number = cards[0].faceValue;
        let face2 : number = cards[1].faceValue;

        let suit1 : number = cards[0].suitValue;
        let suit2 : number = cards[0].suitValue;

        if(face1 > face2){

            return 1;

        }else if(face2 > face1){

            return 2;

        // if both have the same face value AND useSuitWhenTied is true
        }else if(useSuitWhenTied == true){

            if(suit1 > suit2){

                return 1;

            }else if(suit2 > suit1){

                return 2;

            // if both have the same face and suit AND useSuitWhenTied is true
            }else{

                return 0;

            }
        // if both have the same face and suit AND useSuitWhenTied is false
        }else{

            return 0;

        }
    }


    // cards deck croupier using a proprietary algorithm available at https://github.com/E-truco/croupier (under MIT license)
    // players is a list with all the players in a lobby, should be in order of first to last to get their cards
    // deck is the deck the cards will be drawn from (following index order and removing the cards from the list as they are given)
    // cards will be given one by one, example: Player1 gets a card, then Player2 gets a card... until all players have cardsPerPlayer amount of cards
    croupier(players : Player[]){

        let cardsPerPlayer = 3;

        // totalCards is the amount of players multiplied by the amount of cards per player, it's the total amount of cards to be distributed
        let totalCards : number = players.length * cardsPerPlayer;

        // currentPlayer is a counter for which player should get their card next
        let currentPlayer = 0;

         // just in case something goes VERY WRONG (i imported this from the dart code, may not work)
        if(totalCards > this.deck.cards.length){

            let decksNeeded : number = Math.ceil((this.deck.cards.length / (totalCards - this.deck.cards.length)));

            return "There aren't enough cards on the deck. You need " + decksNeeded + " more decks.";

        }

        for(let i = 0; i < totalCards; i++){

            // give currentPlayer the first card of the deck
            players[currentPlayer].hand.push(this.deck.cards[0]);
            
            // remove the first card of the deck (the one that was just drawn by the currentPlayer)
            this.deck.cards.splice(0, 1);

            // if the currentPlayer is the last player on the list
            if(currentPlayer == players.length - 1){

                // go back to the first player on the list
                currentPlayer = 0;

            // if the currentPlayer is NOT the last player on the list
            }else{

                // go to the next player on the list
                currentPlayer = currentPlayer + 1;
            }
        }

        // return 1 for success
        return 1;
  }


    // this will return the face of the manilha for the "card"
    // "card" should be the first card on the shuffled deck AFTER the croupier dealt 3 cards to each player
    manilhaFinder(card : Card) : string{

       // if the selected card is 3 (the strongest card)
       if(card.face = '3'){

           this.manilha = '4';
           return '4';

       }else{

            let newManilha = (card.faceValue + 1).toString();

            this.manilha = newManilha;

            return newManilha;

        }
    }

}

export default Table;
