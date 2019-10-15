import React, { Component } from 'react';
import '../../styles/DealCard.css';

class DealCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.dealCard();
  }
  render() {
    return this.props.deck ? (
      this.props.deck.remaining > 0 ? (
        <div className="DealCard">
          <button onClick={this.handleClick}>Deal me a card!</button>
        </div>
      ) : (
        <div className="DealCard">
          <button disabled>Deck Full</button>
        </div>
      )
    ) : (
      <div className="DealCard">
        <button disabled>Loading...</button>
      </div>
    );
  }
}

export default DealCard;
