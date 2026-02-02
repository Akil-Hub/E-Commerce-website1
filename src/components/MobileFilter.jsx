import { getData } from '@/context/DataContext';
import { useFilter } from '@/context/FilterContext';
import React from 'react';
import { FaFilter } from 'react-icons/fa';

const MobileFilter = () => {
  const {
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
  } = useFilter();
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <>
      <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5">
        <h1 className="font-semibold text-xl">Filters</h1>
        <FaFilter className="text-gray-800" onClick={() => setOpenFilter(!openFilter)} />
      </div>

      {openFilter ? (
        <section className=" bg-gray-100 p-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white p-2 rounded-md w-full border-gray-400 border-2"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />

          {/* category only data */}
          <h1 className="font-semibold text-xl mt-5"> Category</h1>
          <div className="flex flex-col gap-2 mt-3 ">
            {categoryOnlyData?.map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <input
                    type="checkbox"
                    name={item}
                    checked={category === item}
                    id={`category-${index}`}
                    onChange={handleCategoryChange}
                    value={item}
                  />
                  <label className="cursor-pointer uppercase" htmlFor={`category-${index}`}>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          {/* brand only data */}
          <h1 className="font-semibold text-xl mt-5 mb-3"> Brand</h1>
          <select
            name=""
            id=""
            value={brand}
            onChange={handleBrandChange}
            className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
          >
            {brandOnlyData?.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item.toUpperCase()}
                </option>
              );
            })}
          </select>
          {/* Price range */}

          <h1 className="font-semibold text-xl mt-5 mb-3"> Price Range</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Price Range: ${priceRange[0]} -${priceRange[1]}
            </label>
            <input
              className="w-[200px]"
              type="range"
              name=""
              id=""
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
            />
          </div>
          <button
            className="bg-primary text-white rounded-md px-3 my-1 mt-5 cursor-pointer py-1"
            onClick={() => {
              setSearch('');
              setCategory('All');
              setBrand('All');
              setPriceRange([0, 5000]);
              setOpenFilter(false);
            }}
          >
            Reset Filters
          </button>
        </section>
      ) : null}
    </>
  );
};

export default MobileFilter;
