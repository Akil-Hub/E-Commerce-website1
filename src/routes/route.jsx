import App from '@/App';
import ProtectedRoute from '@/components/ProtectedRoute';
import SingleProduct from '@/components/SingleProduct';
import MainLayout from '@/layouts/MainLayout';
import About from '@/pages/About';
import Cart from '@/pages/Cart';
import CategoryProduct from '@/pages/CategoryProduct';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/category/:category', element: <CategoryProduct /> },
      { path: '/cart', element: <ProtectedRoute>
        <Cart /> 
      </ProtectedRoute>},
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <SingleProduct /> },
    ],
  },
]);
