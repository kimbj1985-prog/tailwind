import mainData from '../json/data.json';
import type {  MainProductResponse } from '../types/banner';
import Productinfo from './Productinfo';

export default function Productset() {
      const products = mainData.mainProduct as MainProductResponse['mainProduct'];      
      let count = 0;

  return (
    <section className='max-w-1550 mx-auto py-[100px] px-5 xl:px-0'>
        <h2 className='text-title font-semiBold mb-[30px]'>
          { products.title.split("|")[0] }
        </h2>
        <ul className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-5'>
          {
              products.products.map((v, i)=>{
                return(
                  v.노출 && v.price_sell !== v.price_original && count < 8 && ++count && <li key={i} 
                        className={`pb-5 flex flex-col ${ count > 6 ? "hidden lg:flex" : "flex"}`}>
                        <Productinfo v={v}></Productinfo>
                  </li>                 
                )
              })
          }
        </ul>
        

      </section>
     
  )
}
  