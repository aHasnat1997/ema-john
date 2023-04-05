import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
import ecom from "../assets/ecommerce.json";

const Home = () => {
  console.log('Home...');
  return (
    <div className='h-[90vh] max-w-screen-xl mx-auto px-7 lg:flex items-center my-24 lg:my-0'>
      <div className='flex flex-col gap-6 lg:w-1/2'>
        <h4 className='text-primary'>Sale up to 70% off</h4>
        <h1 className='text-5xl font-bold'>New Collection For Sales</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius voluptas eveniet, explicabo ipsam sed eaque aut illo dolorum nulla!</p>
        <button className='btn btn-accent text-xl w-52 h-16'>Shop Now <FontAwesomeIcon className='ml-2' icon={faShoppingCart} /></button>
      </div>
      <div className='lg:w-1/2'>
        <Lottie animationData={ecom} loop={true} />
      </div>
    </div>
  );
};

export default Home;
