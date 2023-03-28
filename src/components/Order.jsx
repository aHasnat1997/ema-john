import React from 'react';
import totalCalculation from '../utilities/totalCalculation';

const Order = ({card}) => {
  // console.log(props.card);
  const total = totalCalculation(card);
  // console.log(total);

  return (
    <div>
      <h1 className='text-center lg:text-3xl font-bold hidden lg:block'>Order Summary</h1>
      <div className="mt-[-1.5rem] md:mt-[-.5rem] lg:mt-8 text-xs md:text-sm lg:text-xl  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-1 lg:gap-4">
        <p>Selected Items: {total.quantity}</p>
        <p>Total Price: ${total.totalPrice}</p>
        <p>Shipping Charge: ${total.shipping}</p>
        <p>Tax: ${parseFloat(total.tex.toFixed(2))}</p>
        <p className='font-bold'>Grand Total: ${parseFloat(total.total.toFixed(2))}</p>
      </div>
    </div>
  );
};

export default Order;
