import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { useRef, useEffect } from "react";

import mainData from '../json/data.json';
import type {  MainProductResponse } from '../types/banner';


import Productinfo from './Productinfo';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperInstance } from 'swiper';

export default function Productset() {

      const products = mainData.mainProduct as MainProductResponse['mainProduct'];
      const slideWidth = (1550 - 16 * 4) / 5;

      const swiperRef = useRef<SwiperInstance | null>(null); // swiper 객체 저장
      const prevbtnRef = useRef<HTMLButtonElement | null>(null); // 이전버튼저장
      const nextbtnRef = useRef<HTMLButtonElement | null>(null); // 다음버튼저장

      useEffect(() => {
        if(swiperRef.current && prevbtnRef.current && nextbtnRef.current){
          const swiper = swiperRef.current.swiper;
          swiper.params.navigation.prevEl = prevbtnRef.current;
          swiper.params.navigation.nextEl = nextbtnRef.current;
          swiper.navigation.update();
        }
      }, [])


  return (
    <section className='max-w-1550 mx-auto pb-[clamp(30px,8vw,100px)] px-5 xl:px-0'>
        <h2 className='text-[clamp(22px,3vw,30px)] font-semiBold mb-[30px]
                      flex justify-between items-center'>
          { products.title.split("|")[1] }
          <div className='flex gap-3'>
          <button className='prevbtn' ref={prevbtnRef}>prev</button>
          <button className='nextbtn' ref={nextbtnRef}>next</button>
          </div>
        </h2>
        <Swiper
        ref={swiperRef} 
        spaceBetween={10}  // 슬라이드 간격
        slidesPerView="auto"  // 슬라이드 너비 자동으로 맞추기
        loop={true}  // 순환 반복>
        autoplay={{
          delay: 3000, // 3초마다 슬라이드 자동 전환
          disableOnInteraction: false, // 사용자가 슬라이드를 클릭하더라도 자동 전환 유지
        }}
navigation={{
          nextEl: '.nextbtn',  // 다음 버튼
          prevEl: '.prevbtn',  // 이전 버튼
        }}
        modules={[ Autoplay, Navigation]}
>
          {

              products.products
              .filter((v)=> v.노출 )
              .sort((a, b)=> new Date(b.등록날짜).getTime() - new Date(a.등록날짜).getTime())
              .slice(0,5).map((v, i)=>{
                // v.등록날자가 문자열임 "2025-12-10" 신상품 노출조건추가
                return(
                  <SwiperSlide key={i} className='flex flex-col' style={{width: `${slideWidth}px`}}>
                   <Productinfo v={v}></Productinfo>
                  </SwiperSlide>
                )
              })
          }
        </Swiper>    
      </section>
     
  )
}
  