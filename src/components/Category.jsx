import { getData } from '@/context/DataContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const {  data } = getData();
  const navigate = useNavigate()

      const getUniqueCategory = (data, property) => {
      let newVal = data?.map(curElem => {
        return curElem[property];
      });
      newVal = [...new Set(newVal)];
      return newVal;
    };
    const categoryOnlyData = getUniqueCategory(data, 'category');

  return (
    <section className="bg-[#101829]">
      <div className="wrapper flex flex-wrap gap-4 items-center md:justify-around justify-center py-7 px-4">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button  className="uppercase bg-linear-to-r from-primary to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer" 
              onClick={()=>navigate(`category/${item}`)}>
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
