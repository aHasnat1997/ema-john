import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className='flex'>
      <div className="w-[75%] my-28 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => <Product key={product.id} product={product}></Product>)}
      </div>
      <div className="bg-secondary w-[20%] h-[93vh] fixed right-0 top-16 py-12 px-4">
        <h1 className='text-center text-3xl font-bold'>Order Summary</h1>
      </div>
    </div>
  );
};

export default Shop;
