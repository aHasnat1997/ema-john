import { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from './fakedb';

const shopFunction = () => {

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
    // console.log(saveCard);
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

  return { card, addToCard, products };

}

export default shopFunction;
