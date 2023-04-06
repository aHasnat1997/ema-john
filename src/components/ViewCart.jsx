import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../utilities/fakedb';
import Order from './Order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import totalCalculation from '../utilities/totalCalculation';


const ViewCart = () => {
  const loadedData = useLoaderData();

  const [cards, setCards] = useState([]);
  useEffect(() => {
    const storeCard = getShoppingCart();
    const saveCard = [];

    for (const id in storeCard) {
      const addProducts = loadedData.find(pd => pd.id === id);
      if (addProducts) {
        const quantity = storeCard[id];
        addProducts.quantity = quantity;
        saveCard.push(addProducts);
      }
    }
    setCards(saveCard);
  }, [loadedData]);


  console.log(cards);

  return (
    <div className='max-w-screen-xl mx-auto px-7 my-32'>
      {
        cards.map(card => (
          <div key={card.id}>
            <div className='flex items-center gap-4 my-8 w-1/2'>
              <img className='w-[20%]' src={card.img} alt="product" />
              <div className='w-full flex justify-between items-center'>
                <div>
                  <h1>{card.name}</h1>
                  <h3>Price: {card.price}</h3>
                  <p>Quantity: {card.quantity}</p>
                </div>
                <FontAwesomeIcon className='btn btn-warning text-sm p-2 rounded-full' icon={faTrashCan} />
              </div>
            </div>
            
          </div>))
      }
    </div>
  );
};

export default ViewCart;
