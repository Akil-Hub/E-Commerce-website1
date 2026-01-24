import { useCart } from '@/context/CartContext';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const{addToCart} = useCart()
    const navigate = useNavigate()

  return (
    <article className="border relative border-gray-100 rounded-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max ">
      <img src={product.thumbnail} alt="" className="bg-gray-100 aspect-square" onClick={()=>navigate(`/products/${product.id}`)}  />
      <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold ">${product.price}</p>
      <button className="bg-primary px-3 py-2 text-xl rounded-md text-white w-full cursor-pointer flex gap-3 justify-center  font-semibold"
      onClick={()=>addToCart(product)}>
        {' '}
        <IoCartOutline className="h-6 w-6" />
        Add to cart
      </button>
    </article>
  );
};

export default ProductCard;
