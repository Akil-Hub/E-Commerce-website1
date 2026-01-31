import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { DataProvider } from '@/context/DataContext';
import { CartProvider } from '@/context/CartContext';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from 'react-scroll-to-top';
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
                <ScrollToTop smooth style={{
                  backgroundColor :'#fa2d37',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  color:'white',
                  fontSize:'2px'
                  
                }} size ={2}/>


          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            
          />
        </ClerkProvider>
      </DataProvider>
    </CartProvider>
  </StrictMode>
);
