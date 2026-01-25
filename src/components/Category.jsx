import { getData } from '@/context/DataContext';
import React, { useEffect } from 'react';

const Category = () => {
  const {  categoryOnlyData } = getData();

  return (
    <section className="bg-[#101829]">
      <div className="wrapper flex flex-wrap gap-4 items-center md:justify-around justify-center py-7 px-4">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button className="uppercase bg-linear-to-r from-primary to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">
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
