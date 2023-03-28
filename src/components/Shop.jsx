import React, { useEffect, useState } from 'react';
import Order from './Order';
import Product from './Product';

const Shop = ({addToCard, card, products}) => {
  // console.log(props);
  return (
    <div>
      <div className="lg:w-[75%] my-40 lg:my-28 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => <Product key={product.id} product={product} addToCard={addToCard}></Product>)}
      </div>
      <div className="bg-secondary w-full lg:w-[20%] h-4 lg:h-[93vh] fixed right-0 top-16 py-8 lg:py-12 px-4">
        <Order card={card}></Order>
      </div>
    </div>
  );
};

export default Shop;
