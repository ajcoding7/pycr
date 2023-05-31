import React, { useState, useEffect } from 'react';
import './index.css';

const DeckOfCards = ({ onCardClick }) => {
  const cards = [
    'Ace Spades', '2 Spades', '3 Spades', '4 Spades', '5 Spades', '6 Spades',
    '7 Spades', '8 Spades', '9 Spades', '10 Spades', 'Jack Spades', 'Queen Spades', 'King Spades',
    'Ace Hearts', '2 Hearts', '3 Hearts', '4 Hearts', '5 Hearts', '6 Hearts',
    '7 Hearts', '8 Hearts', '9 Hearts', '10 Hearts', 'Jack Hearts', 'Queen Hearts', 'King Hearts',
    'Ace Diamonds', '2 Diamonds', '3 Diamonds', '4 Diamonds', '5 Diamonds', '6 Diamonds',
    '7 Diamonds', '8 Diamonds', '9 Diamonds', '10 Diamonds', 'Jack Diamonds', 'Queen Diamonds', 'King Diamonds',
    'Ace Clubs', '2 Clubs', '3 Clubs', '4 Clubs', '5 Clubs', '6 Clubs',
    '7 Clubs', '8 Clubs', '9 Clubs', '10 Clubs', 'Jack Clubs', 'Queen Clubs', 'King Clubs'
  ];

  const [hiddenCards, setHiddenCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([...cards]);

  const handleCardClick = (card) => {
    setHiddenCards((prevHiddenCards) => [...prevHiddenCards, card]);
    setVisibleCards((prevVisibleCards) => prevVisibleCards.filter((visibleCard) => visibleCard !== card));
    onCardClick(card);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.cardContainer')) {
        setHiddenCards([]);
        setVisibleCards([...cards]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cards]);

  return (
    <div className="cardContainer">
      <div className="cardRow">
        {visibleCards.slice(0, 13).map((card, index) => (
          <button
            key={index}
            className="cardButton"
            onClick={() => handleCardClick(card)}
          >
            {card}
          </button>
        ))}
      </div>
      <div className="cardRow">
        {visibleCards.slice(13, 26).map((card, index) => (
          <button
            key={index + 13}
            className="cardButton"
            onClick={() => handleCardClick(card)}
          >
            {card}
          </button>
        ))}
      </div>
      <div className="cardRow">
        {visibleCards.slice(26, 39).map((card, index) => (
          <button
            key={index + 26}
            className="cardButton"
            onClick={() => handleCardClick(card)}
          >
            {card}
          </button>
        ))}
      </div>
      <div className="cardRow">
        {visibleCards.slice(39, 52).map((card, index) => (
          <button
            key={index + 39}
            className="cardButton"
            onClick={() => handleCardClick(card)}
          >
            {card}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeckOfCards;
