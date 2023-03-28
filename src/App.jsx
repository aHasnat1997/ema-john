import { useEffect, useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Shop from './components/Shop'
import { addToDb, getShoppingCart } from './utilities/fakedb';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const [card, setCard] = useState([]);
  useEffect(() => {
    const storeCard = getShoppingCart();
    const saveCard = [];

    for (const id in storeCard) {
      const addProducts = products.find(pd => pd.id === id);
      // console.log(addProducts);
      if (addProducts) {
        const quantity = storeCard[id];
        addProducts.quantity = quantity;
        saveCard.push(addProducts);
      }
    }
    console.log(saveCard);
    setCard(saveCard);
  }, [products]);

  const addToCard = product => {
    // const newCard = [];
    // const exists = card.find(pd => pd.id === product.id);
    // if (!exists) {
    //   product.quantity = 1;
    //   newCard = [...card, product];
    // }
    // else {
    //   exists.quantity++;
    //   const remaining = card.filter(pd => pd.id !== exists);
    //   newCard = [...remaining, exists];
    // }
    const newCard = [...card, product];
    setCard(newCard);
    addToDb(product.id);
  }

  return (
    <div className="App">
      <Nav card={card}></Nav>
      <Shop card={card} addToCard={addToCard} products={products}></Shop>
    </div>
  )
}

export default App;
