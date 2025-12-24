import Title from "../ui/Title"


export default function Product() {
  type Product = {
  name: string;
  price: number;
  img : string;
};

const products: Product[] = [
  { name: "프리미엄 커피 머신", price: 129000, img : "2.jpg" },
  { name: "블루투스 이어폰", price: 59000, img : "3.jpg" },
  { name: "게이밍 키보드", price: 89000, img : "4.jpg" },
  { name: "USB-C 고속 충전기", price: 19000, img : "5.jpg" },
  { name: "무선 마우스", price: 24000, img : "5.jpg" },
  { name: "휴대용 보조배터리", price: 33000, img : "4.jpg" },
  { name: "데스크 LED 스탠드", price: 42000, img : "3.jpg" },
  { name: "스마트 체중계", price: 29000, img : "2.jpg" },
  { name: "탁상용 공기청정기", price: 76000, img : "5.jpg" },
  { name: "방수 블루투스 스피커", price: 52000, img : "3.jpg" }
];
  return (
    <section className="px-5">
      <Title bigtitle="제품소개" subtitle="25년 업계 최초 인증제품을 소개합니다."></Title>
       <ul className="grid lg:grid-cols-3 gap-[clamp(15px,5vw,30px)] grid-cols-2 max-w-[1024px] w-full mx-auto mt-[clamp(2.5rem,3.8vw,10rem)]">
      {
       //products.map(() => ())
       //products.map(() => { return()})

       products.map((v) => (
                           <li className="bg-white">
                              <div>
                                <img src={`/${v.img}`} className="rounded-[20px] "></img>
                              </div>
                              <div className="flex flex-col md:flex-row text-[clamp(18px,3vw,20px)] font-kr md:justify-between py-4">
                                   <p >{v.name}</p>
                                   <p className="price text-[#ff5722] font-en">
                                    {v.price}
                                    <span className="text-[#999] font-thin text-[0.9em]">원</span>
                                   </p>
                              </div>
                          </li>
                          )
                    )
          }
      </ul>
    </section>
  )
}
