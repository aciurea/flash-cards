import './App.css';
import * as React from 'react';
import { Card } from './cards/Cards';

function App() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    setCards([
      {
        text: 'What is an array?',
        code: 'An array is a contigous space in memory',
      },
    ]);
  }, []);
  return (
    <div className='App'>
      {cards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
}

export default App;
