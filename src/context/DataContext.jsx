import axios from 'axios';
import { createContext, useState, useContext, useEffect, useMemo } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all products ONCE when app loads
  const fetchAllProducts = async () => {
    // Don't fetch if data already exists
    if (data.length > 0) return;

    setLoading(true);

    try {
      const res = await axios.get('https://dummyjson.com/products?limit=0');
      const productsData = res.data.products;

      const electronicsCategories = ['smartphones', 'laptops', 'tablets', 'mobile-accessories'];
      const electronics = productsData.filter(p => electronicsCategories.includes(p.category));
      
      setData(electronics);
      setError(null);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Get single product from existing data 

  const getSingleProduct = (id) => {
    return data.find(product => product.id === parseInt(id));
  };

  // Get unique values for filters

  const getUniqueCategory = useMemo(() => (data, property) => {
    let newVal = data?.map(curElem => curElem[property]);
    newVal = ['All', ...new Set(newVal)];
    return newVal;
  }, [data])

  const categoryOnlyData = getUniqueCategory(data, 'category');

  const brandOnlyData = getUniqueCategory(data, 'brand');

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        categoryOnlyData,
        brandOnlyData,
        fetchAllProducts,
        getSingleProduct, 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);