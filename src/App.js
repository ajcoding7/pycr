import './index.css'
import React, { useState }from 'react';
import DeckOfCards from './DeckOfCards';



const App = () => {
  const [reset, setReset] = useState(false);
  const [hiddenCards, setHiddenCards] = useState([]);

  const handleCardClick = (card) => {
    setHiddenCards((prevHiddenCards) => [...prevHiddenCards, card]);
  };

  const handleReset = () => {
    setReset(true);
    setHiddenCards([]);
  };

  return (
    <div>
      <h1 className="h1">Play Your Cards Right</h1>
      <DeckOfCards resetCards={reset} onCardClick={handleCardClick} />
      <div className="line"></div>
      <div className="hiddenCardsContainer">
        <div className="hiddenCardsRow">
          {hiddenCards.map((card, index) => (
            <button key={index} className="hiddenCardButton">
              {card}
            </button>
          ))}
        </div>
      </div>
      <img className="neil" src={ require('./images/neil.jpg') } alt="neil" />
      <button className="resetButton" onClick={handleReset}>Reset Deck</button>
    </div>
  );
};

export default App;