import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import mainData from '../json/data.json';
import type { MainBannerJson, MainProductResponse } from '../types/banner';

export default function Home() {

  const banners = mainData.mainBanner as MainBannerJson['mainBanner'];
  const products = mainData.mainProduct as MainProductResponse['mainProduct'];

  return (
    <div className="">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        //effect="fade"
        //fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
      }}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      loop={true}

    >
        {
        banners.map((v, i)=> <SwiperSlide className={`!h-[800px] bg-cover`} style={{ backgroundImage: `url(${v.imgurl})` }} key={i}>
          <div className="flex justify-center items-center h-full bg-black/30">
            <div className='flex flex-col gap-[10px] text-white items-center'> 
              <h2 className="text-[30px]
                            uppercase 
                            font-extrabold 
                            tracking-[-0.028] 
                            leading-[1.01]">
                  {v.title}
              </h2>
              <p className="text-[24px] font-bold uppercase">
                  {v.subtitle}
              </p>
            </div>
       </div>
        </SwiperSlide>)
      }
      </Swiper>

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
     
        </div>
  )
}
