import { useCart } from '@/context/CartContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductListView = ({product}) => {
    const {addToCart} = useCart()
    const navigate = useNavigate()
  return (
    <article className='space-y-4 mt-2 rounded-md'>
        
        <section className="bg-gray-100 flex gap-7 items-center p-2 rounded-md">
            <img src={product.thumbnail} alt={product.title} className='md:h-60 md:w-60 h-25 w-25  rounded-md cursor-pointer' onClick={()=>navigate(`/products/${product.id}`)}/>

            <div className="space-y-2">
                <h1 className=' font-bold md:text-xl line-clamp-3 hover:text-red-500 w-full'>{product.title}</h1>
                <p className='font-semibold flex items-center md:text-2xl text-lg'>${product.price} <span className='md:text-3xl text-md ml-3 text-red-500'>({product.discountPercentage})% off</span></p>
                <p className='text-sm md:text-base'>FREE delivery <span className='font-semibold'>Fri, 18 Apr</span> <br /> Or Fastest delivery Tomorrow , 17 Apr </p> 
                <button className='bg-primary px-3 py-2 md:text-xl text-sm rounded-md text-white w-full cursor-pointer flex gap-3 justify-center  font-semibold' onClick={()=>addToCart(product)}> Add To Cart</button>
            </div>


        </section>
    </article>
  )
}

export default ProductListView