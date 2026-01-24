import Home from '@/pages/Home';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { router } from '@/routes/route';
import { RouterProvider } from 'react-router-dom';
const App = () => {



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
