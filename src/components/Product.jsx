import React from 'react';

const Product = (props) => {
  // console.log(props.product);
  const { name, price, img, ratings, seller } = props.product;
  return (
    <>
      <div className="card w-[100%] h-full bg-base-100 overflow-hidden shadow-xl hover:shadow-2xl">
        <img src={img} alt="Shoes" />
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title font-bold text-2xl">{name}</h2>
            <h3 className='text-xl font-semibold'>Price: ${price}</h3>
          </div>
          <div>
            <p>Manufacturer: {seller}</p>
            <p>Rating : {ratings}</p>
          </div>
        </div>
        <button className="btn btn-secondary">Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
