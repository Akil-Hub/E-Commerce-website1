import { getData } from '@/context/DataContext';
import Loading from '../assets/Loading4.webm';
import FilterSection from '@/components/FilterSection';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';
import Lottie from 'lottie-react';
import notfound from '../assets/notfound.json';
import MobileFilter from '@/components/MobileFilter';
import { useFilter } from '@/context/FilterContext';


const Products = () => {
  const { data } = getData();

  const {
    lastPage,
    pageHandler,
    filteredData,
    page,
  } = useFilter();


   window.scrollTo(0, 0);

  return (
    <article>
      <section className="wrapper mb-10 px-4">
        <MobileFilter />
        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">
              <FilterSection />

              {filteredData?.length > 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  md:gap-7 gap-2 mt-10">
                    {filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                      return <ProductCard key={index} product={product} />;
                    })}
                  </div>
                  <Pagination pageHandler={pageHandler} page={page} lastPage={lastPage} />
                </div>
              ) : (
                <div className="flex justify-center items-center md:h-150 md:w-225 mt-10">
                  <Lottie animationData={notfound} classID="w-[500px]" />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </section>
    </article>
  );
};

export default Products;
