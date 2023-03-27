import { useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Shop from './components/Shop'

function App() {
  const [card, setCard] = useState([]);

  const addToCard = product => {
    const newCard = [...card, product];
    setCard(newCard);
  }

  return (
    <div className="App">
      <Nav card={card}></Nav>
      <Shop card={card} addToCard={addToCard}></Shop>
    </div>
  )
}

export default App
