import type { ProductItem } from '../types/banner';
import { Link } from 'react-router-dom';


interface ProductItemProps {
  v: ProductItem;
}

export default function Productinfo({ v }: ProductItemProps) {

    const discountRate = Math.round( (1 - v.price_sell / v.price_original) * 100);

  return (
    <Link to={`/product/${v.productid}`} className='grid grid-cols-[repeat(15,minmax(0,1fr))] md:flex md:flex-col '>
        <img src={v.image} className='rounded-[20px] 
                col-span-4 sm:col-span-3 md:w-full object-cover'></img>
        <div className='flex flex-col gap-[12px] mt-[12px] font-kr 
                col-span-11 sm:col-span-12 md:w-full ps-[20px] '>
            <p className='xl:text-xs text-[clamp(12px,2.2vw,15px)] font-regular text-gray'>{v.brand}</p>
            <p className='mb-2 xl:text-small text-[clamp(18px,3vw,20px)] font-medium'>{v.name}</p>
            <p className='flex gap-4 items-end font-semiBold md:mt-auto xl:text-small text-[clamp(18px,3vw,20px)]'>
            { discountRate > 0 && <span className='font-bold text-main font-en'>{discountRate}%</span> }
            <span className='font-en'>{v.price_sell.toLocaleString()}원</span> 
            { v.price_sell !== v.price_original && <span className='text-gray font-en'>{v.price_original.toLocaleString()}원</span> }
            </p>
        </div>
    </Link>
  )
}
