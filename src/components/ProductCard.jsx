import Button from '@/components/Buttons/Button';
import { useCart } from '@/context/CartContext';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <article className="border relative border-gray-100 rounded-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 md:h-full duration-300  flex flex-col justify-between shadow-xl">
      <img
        src={product.thumbnail}
        alt=""
        className="bg-gray-100 aspect-square object-cover h-full"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1 className="line-clamp-2 leading-5 p-1 font-semibold  text-gray-900 md:text-base text-sm pb-3">
        {product.title}
      </h1>
      <p className="py-1 text-lg text-gray-700 font-bold md:text-base text-sm px-1">
        ${product.price}
      </p>

      <Button
      className='md:text-lg!'
        title={'Add To Cart'}
        icon={<IoCartOutline className="h-5 w-5 md:h-6 md:w-6" />}
        onClick={() => addToCart(product)}
      />
    </article>
  );
};

export default ProductCard;
