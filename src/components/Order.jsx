import React from 'react';

const Order = props => {
  // console.log(props.card);
  const card = props.card;
  return (
    <div>
      <h1 className='text-center lg:text-3xl font-bold hidden lg:block'>Order Summary</h1>
      <div className="mt-[-1.5rem] md:mt-[-.5rem] lg:mt-8 text-xs md:text-sm lg:text-xl  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-1 lg:gap-4">
        <p>Selected Items: {card.length}</p>
        <p>Total Price: $0</p>
        <p>Shipping Charge: $5</p>
        <p>Tax: $0</p>
        <p className='font-bold'>Grand Total: $0</p>
      </div>
    </div>
  );
};

export default Order;
