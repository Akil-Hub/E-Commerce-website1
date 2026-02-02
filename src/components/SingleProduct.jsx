import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../assets/Loading4.webm';
import Breadcrumb from '@/components/Breadcrumb';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '@/context/CartContext';
import Button from '@/components/Buttons/Button';
import { getData } from '@/context/DataContext';

const singleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const { addToCart } = useCart();

  const { getSingleProduct, loading, data } = getData();

  useEffect(() => {
    const product = getSingleProduct(params.id);
    setSingleProduct(product);
  }, [params.id, data]);

  const originalPrice = singleProduct ? Math.round(
    singleProduct.price + (singleProduct.price * singleProduct.discountPercentage) / 100
  ) : 0;
   window.scrollTo(0, 0);

  return (
    <article className="wrapper">
      {loading || !singleProduct ? (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      ) : (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrumb title={singleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full ">
              <img
                src={singleProduct.thumbnail}
                alt={singleProduct.title}
                className="rounded-2xl w-full -mt-5 md:-mt-15    object-contain h-full "
              />
            </div>
            <div className="flex justify-start flex-col gap-6 mt-4">
              <h1 className="md:text-3xl text-xl font-bold text-gray-800">{singleProduct.title}</h1>
              <div className="text-gray-700">
                {singleProduct.brand?.toUpperCase()} /{singleProduct.category?.toUpperCase()}{' '}
              </div>
              <div className="text-xl text-red-500 font-bold">
                ${singleProduct.price}{' '}
                <span className="line-through text-gray-700">${originalPrice}</span>{' '}
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm md:text-base">
                  {singleProduct.discountPercentage}% discount
                </span>
              </div>
              <p className="text-gray-600">{singleProduct.description}</p>

              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex gap-4 t mt-4 md:mr-auto">
                <Button
                  title={'Add To Cart'}
                  icon={<IoCartOutline className="h-5 w-5 md:h-6 md:w-6 " />}
                  onClick={() => addToCart(singleProduct)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default singleProduct;