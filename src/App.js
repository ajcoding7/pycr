import './index.css'
import React from 'react';
import DeckOfCards from './DeckOfCards';

const App = () => {
  const [reset, setReset] = React.useState(false);

  const handleCards = () => {
    setReset(true);
  };

  return (
    <div>
      <h1 className="h1">Play Your Cards Right</h1>
      <DeckOfCards resetCards={reset} />
      <div className="blackLine"></div>
      <button className="resetButton" onClick={handleCards}>Reset Deck</button>
    </div>
  );
};

export default App;
