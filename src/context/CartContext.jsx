import { Children, createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

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
      toast.success('Product quantity increased')
    } else {
      // add new item with quantity
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
          toast.success('Product is added to cart successfully')

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
              toast.success('Quantity is increased')
            } else if (action === 'decrease') {
              newUnit = newUnit - 1;
              toast.success('Quantity is decreased')
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter(item => item != null)
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter(item => item.id !== productId))
    toast.success('Products is deleted from cart')
    
  };

  return (
    <CartContext.Provider value={{ cartItem, deleteItem, setCartItem, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
