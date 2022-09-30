import Image from 'next/image';

export default function SpecialOfferItem({ img }) {
  return (
    <div className="flex justify-center items-center relative border-b-2 border-b-gray-quick-silver cursor-pointer mt-4 h-400px px-4 hover:opacity-70 transition-all">
      <div className="flex flex-col justify-around items-center max-w-252px mx-auto">
        <div className="absolute flex left-0 top-0 z-10">
          <small className=" bg-label-yellow px-5 py-1 mb-1">HIT!</small>
          <small className="border-2 px-3 py-1 border-gray-quick-silver mb-1 mx-2">
            NEW
          </small>
          <small className="bg-label-pink-2 border-2 border-label-pink-2 text-white px-3 py-1 mb-1">
            -15%
          </small>
        </div>
        <div className=" mt-20">
          <Image className=" object-cover" src={img} />
        </div>
        <div className="flex flex-row justify-end items-end w-full">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66667 9.33333L9 5"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66666 9.33333L5.33333 9"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xs text-gray-quick-silver">1.4 Б</p>
        </div>
        <div className="">
          <p className="text-xs text-center text-gray-quick-silver tracking-widest">
            УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-label-orange text-center text-sm mt-7">3 750 De</p>
          <div className="flex flex-row">
            <p className="text-center text-sm mr-2 text-gray-quick-silver line-through">
              ₽ 920.00
            </p>
            <p className="text-center text-sm pb-14">₽ 764.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
