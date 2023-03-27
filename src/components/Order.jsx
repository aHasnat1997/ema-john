import React from 'react';

const Order = ({card}) => {
  // console.log(props.card);

  let totalPrice = 0;
  let shipping = 0;
  for(const price of card){
    totalPrice += price.price;
    shipping += price.shipping;
  }
  const tex = (totalPrice*7)/100;
  const total = totalPrice+shipping+tex;
  // console.log(totalPrice);

  return (
    <div>
      <h1 className='text-center lg:text-3xl font-bold hidden lg:block'>Order Summary</h1>
      <div className="mt-[-1.5rem] md:mt-[-.5rem] lg:mt-8 text-xs md:text-sm lg:text-xl  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-1 lg:gap-4">
        <p>Selected Items: {card.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping Charge: ${shipping}</p>
        <p>Tax: ${parseFloat(tex.toFixed(2))}</p>
        <p className='font-bold'>Grand Total: ${parseFloat(total.toFixed(2))}</p>
      </div>
    </div>
  );
};

export default Order;
