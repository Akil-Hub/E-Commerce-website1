import { getData } from '@/context/DataContext';
import { createContext, useContext, useMemo, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // logic code

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  const { data } = getData();

  const handleCategoryChange = e => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };
  const handleBrandChange = e => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const filteredData = useMemo(() => {
   return data?.filter(
      item =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'All' || item.category === category) &&
        (brand === 'All' || item.brand === brand) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );
  }, [data, search, category, brand, priceRange]);




  const pageHandler = selectedPage => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const lastPage = useMemo(() => Math.ceil(filteredData?.length / 8), [filteredData]);

  return (
    <FilterContext.Provider
      value={{
        lastPage,
        pageHandler,
        filteredData,
        handleBrandChange,
        handleCategoryChange,
        search,
        setSearch,
        brand,
        setBrand,
        category,
        setCategory,
        priceRange,
        setPriceRange,
        openFilter,
        setOpenFilter,
        page,
        setPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
