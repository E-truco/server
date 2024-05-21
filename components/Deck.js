import Card from './Card.js'

class Deck{


    // the constructor will create a deck and add the cards to it
    constructor(){

        this.cards = this.deckgen;
        this.shuffled = false;

    }

    // this method will create the cards for the deck using a proprietary algorithm available at https://github.com/E-truco/deckgen (under MIT license)
    deckgen(){

        let faces = ["4", "5", "6", "7", "10", "11", "12", "1", "2", "3"];
        let suits = ["Moles", "Espadas", "Copas", "Paus"];

        let cards = [];

        for(let i = 0; i < faces.length; i++){
            
            for(let y = 0; y < suits.length; y++){

                let currentCard = new Card(faces[i], suits[i], i+1, y+1, undefined);

                cards.push(currentCard);
            }
        }

        return cards
    }

    // this method will shuffle the deck using a implementation of the Fisher–Yates shuffle algorithm
    shuffler(){
        
        let currentIndex = this.cards.length;

        while(currentIndex != 0){

            let randomIndex = Math.floor(Math.random(Date.now()) * currentIndex);
            currentIndex--;

            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }

        this.shuffled = true;
    }


}

export default Deck;