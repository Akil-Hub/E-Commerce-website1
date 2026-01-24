import { DataContext, getData } from '@/context/DataContext';
import React, {  useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Pause } from 'lucide-react';
import Category from '@/components/Category';

const Carousel = () => {
  const { fetchAllProducts, data } = getData()

  useEffect(() => {
    fetchAllProducts();
  }, []);

  
  const SamplePrevArrow = (props) => {
    const {className,style,onClick}= props
    return (
        <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
            <AiOutlineArrowLeft className='arrows' style={{...style,display:'block', borderRadius:'50px',background:'#f53347',color:'white',position:'absolute',padding:'2px',left:'50px'}}
            onMouseOver="this.style.backgroundColor='#555'"/>
        </div>
    )}

  const SampleNextArrow = (props) => {
    const {className,style,onClick}= props
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <AiOutlineArrowRight className='arrows' style={{...style,display:'block', borderRadius:'50px',background:'#f53347',color:'white',position:'absolute',padding:'2px',right:'50px'}}
          />
        </div>
    )
    
  };
  var settings = {
    dots: false,
    autoplay : true,
    autoplaySpeed :3000,
    infinite: true,
    speed: 500,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow :<SampleNextArrow to='next'/>,
    prevArrow :<SamplePrevArrow to='prev'/>,

  };
  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <section
              key={index}
              className=" bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                <div className="space-y-6 w-[550px]">
                  <h3 className="text-primary font-semibold font-sans text-sm">
                    Powering Your World with the best electronics:
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500pxl] text-white">
                    {item.title}
                  </h1>
                  <p className='text-gray-300 md:w-[500px] line-clamp-3 pr-7'>{item.description}</p>
                  <button className='text-white rounded-md mt-2 cursor-pointer bg-gradient-to-r from-primary to-purple-500 px-3 py-2'>Shop Now</button>
                </div>
                <div>
                    <img src={item.thumbnail} alt={item.title} className='rounded-full w-[500px] hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary bg-white' />
                </div>
              </div>
            </section>
          );
        })}
    
      </Slider>
      <Category/>
    </div>
  );
};

export default Carousel;
