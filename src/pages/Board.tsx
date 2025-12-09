import { useState } from "react";
import Title from "../ui/Title"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function Board() {
  const [ action , setAction ] = useState<number | null>(null);
  

  interface BoardItem {
    subject: string;
    content: string;
}


const boardlist: BoardItem[] = [
    {
        subject: "첫 번째 게시글",
        content: "첫 번째 게시글입니다."
    },
    {
        subject: "공지사항",
        content: "새로운 공지사항을 알려드립니다."
    },
    {
        subject: "행사 일정 변경",
        content: "행사 일정 변경 안내드립니다."
    },
    {
        subject: "고객 문의 안내",
        content: "고객 문의 답변 관련 안내"
    },
    {
        subject: "서비스 점검 안내",
        content: "서비스 점검 안내드립니다."
    },
    {
        subject: "커뮤니티 가이드",
        content: "커뮤니티 이용 가이드라인"
    }
];


  return (
    <section>
      <Title bigtitle="커뮤니티" subtitle="자유롭게 의견을 나누는 공간입니다."></Title>
      <ul className="text-white text-[36px] mx-auto w-[1024px] flex flex-col gap-4 mt-20">
      {
       boardlist.map( ( item, idx ) => <li className={  `${ action !== idx && "border-b-2" } ` } key={idx}>
        <h3 className={`text-2xl ${ action === idx && "font-bold" } mb-2
         flex justify-between items-center `} 
         onClick={ ()=> { setAction(action === idx ? null : idx); } } > 
        
        {item.subject}

       <div className="flex p-2">
        {
          action === idx ? 
          <ChevronUpIcon className="w-[25px] h-[25px]"></ChevronUpIcon> :
          <ChevronDownIcon className="w-[25px] h-[25px]"></ChevronDownIcon>
          
        }
       </div>

        </h3>
        {
          action === idx && <p className="text-xl p-5 bg-gray-800">{item.content}</p>
        }
        </li> )
      }
      </ul>
    </section>
  )
}
