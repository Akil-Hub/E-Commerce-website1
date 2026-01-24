import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { DataProvider } from '@/context/DataContext';
import { CartProvider } from '@/context/CartContext';
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <DataProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
    </DataProvider>


    </CartProvider>
    
  </StrictMode>
);
