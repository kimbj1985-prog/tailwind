import { useParams, Link, useNavigate } from "react-router-dom" //주소의 파라미터가져오는 모듈


import mainData from '../json/data.json'; // 상품데이터
import type {  MainProductResponse } from '../types/banner'; // 상품데이터들 타입스크립트

import Title from "../ui/Title";


export default function Detail() {
    const navigate = useNavigate();
    const products = mainData.mainProduct as MainProductResponse['mainProduct']; //상품데이터들 저장

    const { no } = useParams<{ no: string }>(); // 주소창의 데이터는 모두가 문자이다.
    const productId = Number(no); // 상품데이터의 productId 타입스크립트 숫자로 지정

    if (isNaN(productId)) {
        return <div>잘못된 접근입니다.</div>;
    }

    const product = products['products'].find(
        (item) => item.productid === productId
    ); // 상품데이터 검색 딱 하나만 색출

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }
    
     const discountRate = Math.round( (1 - product.price_sell / product.price_original) * 100);

  return (
    <section className="px-3 flex flex-col items-center gap-4">
        <Title bigtitle={product['name']} subtitle={ product['brand'] as string }></Title>
        <div className="max-w-[800px]">
                <img src={ product['image']} className="rounded-[20px] w-full"></img>
        </div>
        <p className='flex gap-4 items-end font-semiBold md:mt-auto xl:text-small text-[clamp(18px,3vw,20px)]'>
            { discountRate > 0 && <span className='font-bold text-main font-en'>{discountRate}%</span> }
             <span className='font-en'>{product.price_sell.toLocaleString()}원</span> 
            { product.price_sell !== product.price_original && <span className='text-gray font-en'>{product.price_original.toLocaleString()}원</span> }
        </p>
        <div className="flex gap-4 my-4 justify-center leading-[2.5] text-[clamp(18px,3vw,20px)] font-kr">
            <button onClick={() => navigate(-1)} className="border-2 border-[#000] px-4f">이전</button>            
            <Link to="/product" className=" border-2 bg-black text-white px-4">더 많은 제품보기</Link>
        </div>
    </section>
  )
}
