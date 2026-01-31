import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../assets/Loading4.webm';
import ProductListView from '@/components/ProductListView';

const CategoryProduct = () => {
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();

  const params = useParams();
  const category = params.category;
  console.log(category)

  const filterData = async params => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/category/${category}`);

      const data = res.data.products;
      setSearchedData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterData();
    window.scrollTo(0,0)
  }, []);

  return (
    <article>
      {searchedData?.length > 0 ? (
        <div className="wrapper mt-10 mb-10 ">
          <button
            className="bg-gray-800 text-white px-3 py-1 rounded-md flex justify-center items-center"
            onClick={() => navigate('/')}
          >
            {' '}
            <ChevronLeft /> Back
          </button>

          {searchedData.map((product, index) => {
            return <ProductListView key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type=" video/webm" />
          </video>
        </div>
      )}
    </article>
  );
};

export default CategoryProduct;
