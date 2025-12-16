import mainData from '../json/data.json';
import type {  MainProductResponse } from '../types/banner';
export default function Productset() {
      const products = mainData.mainProduct as MainProductResponse['mainProduct'];
  return (
    <section className='max-w-1550 mx-auto py-[100px]'>
        <h2 className='text-title font-600 mb-[30px]'>
          { products.title }
        </h2>
        <ul className='flex gap-[16px]'>
          {
              products.products.map((v, i)=>{
                return(
                  <li key={i} className='flex-1'>
                        <img src={v.image}></img>
                        <div className='flex flex-col gap-[8px]'>
                          <p>{v.brand}</p>
                          <p className='mb-2'>{v.name}</p>
                          <p className='flex gap-4 items-end'>
                            <span className='font-500 text-main'>{Math.round( (1 - v.price_sell / v.price_original) * 100)}%</span>
                            <span>{v.price_sell.toLocaleString()}원</span> 
                            <span>{v.price_original.toLocaleString()}원</span>
                            </p>
                        </div>
                  </li>
                )
              })
          }
        </ul>
        

      </section>
     
  )
}
  