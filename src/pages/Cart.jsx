import { useCart } from '@/context/CartContext';
import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity } = useCart();
  const { user } = useUser();

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    <main className="mt-10 wrapper mb-5 ">
      {cartItem.length > 0 ? (
        <article>
          <h1 className="font-bold text-2xl">My cart {cartItem.length}</h1>

          <section className="mt-10">
            {cartItem.map((item, index) => {
              return (
                <section key={index} className="my-5 ">
                  <article className="flex items-center gap-4 justify-between bg-gray-100  rounded-lg py-4 md:py-0 md:px-7">
                    <div className="flex items-center gap-4">
                      <img src={item.thumbnail} alt={item.title} className="w-20 h-20 rounded-md" />

                      <div>
                        <h1 className="md:w-[300px] line-clamp-2  ">{item.title}</h1>
                        <p className="text-primary font-semibold text-lg">{item.price}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-2 rounded-md font-semibold text-lg text-white bg-primary">
                      <button
                        className="cursor-pointer"
                        onClick={() => updateQuantity( item.id, 'decrease')}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="cursor-pointer"
                        onClick={() => updateQuantity( item.id, 'increase')}
                      >
                        +
                      </button>
                    </div>

                    <span className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl">
                      <FaRegTrashAlt className="text-primary text-2xl cursor-pointer " />
                    </span>
                  </article>
                </section>
              );
            })}
          </section>
  <section className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
            <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
              <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>
              <div className="flex flex-col space-y-1">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-2 rounded-md"
                  value={user?.fullName || ''}
                  readOnly 
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="p-2 rounded-md"
                  value={location?.county || ''}
                  readOnly 
                />
              </div>
              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">State</label>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    className="p-2 rounded-md w-full"
                    value={location?.state || ''}
                    readOnly  
                  />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">PostCode</label>
                  <input
                    type="text"
                    placeholder="Enter your postcode"
                    className="p-2 rounded-md w-full"
                    value={location?.postcode || ''}
                    readOnly  
                  />
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    placeholder="Enter your country"
                    className="p-2 rounded-md w-full"
                    value={location?.country || ''}
                    readOnly  
                  />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Phone No</label>
                  <input
                    type="text"
                    placeholder="Enter your Number"
                    className="p-2 rounded-md w-full"
                  />
                </div>
              </div>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer">
                Submit
              </button>
              <div className="flex items-center justify-center w-full text-gray-700">
                ---------OR-----------
              </div>
              <div className="flex justify-center">
                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white px-3 py-2 rounded-md"
                >
                  Detect Location
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
              <h1 className="text-gray-800 font-bold text-xl">Bill details</h1>
              <div className="flex justify-between items-center">
                <h1 className="flex gap-1 items-center text-gray-700">
                  <span>
                    <LuNotebookText />
                  </span>
                  Items total
                </h1>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="flex gap-1 items-center text-gray-700">
                  <span>
                    <MdDeliveryDining />
                  </span>
                  Delivery Charge
                </h1>
                <p className="text-red-500 font-semibold">
                  <span className="text-gray-600 line-through">$25</span> FREE
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="flex gap-1 items-center text-gray-700">
                  <span>
                    <GiShoppingBag />
                  </span>
                  Handling Charge
                </h1>
                <p className="text-red-500 font-semibold">$5</p>
              </div>
              <hr className="text-gray-200 mt-2" />
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg">Grand total</h1>
                <p className="font-semibold text-lg">${(totalPrice + 5).toFixed(2)}</p>
              </div>
              <div>
                <h1 className="font-semibold text-gray-700 mb-3 mt-7">Apply Promo Code</h1>
                <div className="flex gap-3">
                  <input type="text" placeholder="Enter code" className="p-2 rounded-md w-full" />
                  <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md">
                    Apply
                  </button>
                </div>
              </div>
              <button className="bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">
                Proceed to Checkout
              </button>
            </div>
          </section>
        </article>
      ) : (
        <div>Cart is Empty please but some products</div>
      )}
    </main>
  );
};

export default Cart;
