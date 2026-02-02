import React from 'react';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className="wrapper my-10 pb-10">
      <h1 className="text-xl text-gray-700 font-semibold ">
        <span className="cursor-pointer" onClick={() => navigate('/')}>
          Home
        </span>{' '}
        /{' '}
        <span className="cursor-pointer" onClick={() => navigate('/products')}>
          Products
        </span>{' '}
        / <span>{title}</span>
      </h1>
    </div>
  );
};

export default Breadcrumb;
