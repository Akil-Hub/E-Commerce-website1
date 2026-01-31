import { Children, createContext, useContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

const addToCart = product => {
    const alreadyExistedItem = cartItem.find(item => item.id === product.id);
    if (alreadyExistedItem) {
      // increase quantity of cart
      const updatedCart = cartItem.map(cartProduct => 
        cartProduct.id === product.id
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct
      );
      setCartItem(updatedCart);
    } else {
      // add new item with quantity
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };


  const updateQuantity = ( productId, action) => {
    setCartItem(
      cartItem
        .map(item => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === 'increase') {
              newUnit = newUnit + 1;
            } else if (action === 'decrease') {
              newUnit = newUnit - 1;
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter(item => item != null)
    );
  };

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
