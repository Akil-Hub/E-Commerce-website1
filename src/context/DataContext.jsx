import axios from 'axios';
import { Children, useContext } from 'react';
import { createContext, useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  //   Fetching all data from api

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products?limit=0');
      const productsData = await res.data.products;

      const electronicsCategories = ['smartphones', 'laptops', 'tablets', 'mobile-accessories'];

      const electronics = productsData.filter(p => electronicsCategories.includes(p.category));
      setData(electronics)

    } catch (error) {
      console.log(error);
    }
  };

    const getUniqueCategory = (data, property) => {
      let newVal = data?.map(curElem => {
        return curElem[property];
      });
      newVal = ['All',...new Set(newVal)];
      return newVal;
    };
    const categoryOnlyData = getUniqueCategory(data, 'category');

    const brandOnlyData = getUniqueCategory(data, 'brand');

  return (
    <DataContext.Provider value={{ data, setData,categoryOnlyData, fetchAllProducts,brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData =()=>useContext(DataContext)
