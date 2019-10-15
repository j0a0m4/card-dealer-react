import React, { Component } from 'react';
import DealCard from './DealCard';
import getNewDeck from '../utils/getNewDeck';
import dealNewCard from '../utils/dealNewCard';
import deckTransform from '../utils/deckTransform';
import Card from './Card';

class DeckOfCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawn: []
    };

    this.dealCard = this.dealCard.bind(this);
    this.createCards = this.createCards.bind(this);
  }

  async componentDidMount() {
    let deck = await getNewDeck();

    this.setState(st => {
      return { deck };
    });
  }

  async dealCard() {
    let card = await dealNewCard(this.state.deck);
    const newCard = card.cards[0];
    const remaining = card.remaining;
    newCard._transform = deckTransform();

    this.setState(st => {
      return {
        drawn: [...st.drawn, newCard],
        deck: { ...st.deck, remaining }
      };
    });
  }

  createCards({ image, value, suit, code, _transform }) {
    const alt = `${value.toLowerCase()} of ${suit.toLowerCase()} card`;
    return (
      <Card
        transform={_transform}
        key={code}
        image={image}
        value={value}
        suit={suit}
        alt={alt}
      />
    );
  }

  render() {
    const clubEmoji = (
      <span role="img" aria-label="Black Club Suit Emoji">
        ♣️
      </span>
    );
    const pileOfCards = this.state.drawn.map(this.createCards);
    return (
      <div className="DeckOfCards">
        <h1>
          {clubEmoji} Card Dealer {clubEmoji}
        </h1>
        <DealCard deck={this.state.deck} dealCard={this.dealCard} />
        <h4>{this.state.deck && this.state.deck.remaining} cards left</h4>
        <div className="card-area">{pileOfCards}</div>
      </div>
    );
  }
}

export default DeckOfCards;
